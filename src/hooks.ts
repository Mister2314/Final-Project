import { useEffect, useRef } from 'react'

/**
 * Minimal AOS 2.3.1 replication (duration 400ms, once: false).
 * data-aos-offset="0" elements trigger on any intersection; the rest use the
 * AOS default offset of 120px.
 */
export function useAos(): void {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('[data-aos]'))
    if (els.length === 0) return

    els.forEach((el) => {
      el.classList.add('aos-init')
      const delay = el.getAttribute('data-aos-delay')
      if (delay) el.style.transitionDelay = `${delay}ms`
    })

    const ioDefault = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('aos-animate')
          else entry.target.classList.remove('aos-animate')
        })
      },
      { root: null, rootMargin: '0px 0px -120px 0px', threshold: 0 },
    )
    const ioZero = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('aos-animate')
          else entry.target.classList.remove('aos-animate')
        })
      },
      { root: null, rootMargin: '0px', threshold: 0 },
    )

    els.forEach((el) => {
      const offset = el.getAttribute('data-aos-offset')
      if (offset === '0') ioZero.observe(el)
      else ioDefault.observe(el)
    })
    return () => {
      ioDefault.disconnect()
      ioZero.disconnect()
    }
  }, [])
}

/** Faithful port of the original TxtType typewriter (assets/js/index.js). */
export function useTypewriter(words: string[], period = 2000): React.RefObject<HTMLSpanElement | null> {
  const ref = useRef<HTMLAnchorElement | null>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    let loopNum = 0
    let txt = ''
    let isDeleting = false
    let timeout: ReturnType<typeof setTimeout>

    const tick = () => {
      const i = loopNum % words.length
      const fullTxt = words[i]
      txt = isDeleting ? fullTxt.substring(0, txt.length - 1) : fullTxt.substring(0, txt.length + 1)
      el.innerHTML = `<span class="wrap">${txt}</span>`

      let delta = 200 - Math.random() * 100
      if (isDeleting) delta /= 2
      if (!isDeleting && txt === fullTxt) {
        delta = period
        isDeleting = true
      } else if (isDeleting && txt === '') {
        isDeleting = false
        loopNum++
        delta = 500
      }
      timeout = setTimeout(tick, delta)
    }
    // injected wrap style from the original window.onload
    const style = document.createElement('style')
    style.innerHTML = '.typewrite > .wrap { border-right: 0.08em solid #0ef0ad}'
    document.body.appendChild(style)

    tick()
    return () => {
      clearTimeout(timeout)
      style.remove()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return ref
}

/** Custom double cursor (.cursor / .cursor2 follow the mouse). */
export function useCursor(): void {
  useEffect(() => {
    const cursor = document.querySelector<HTMLElement>('.cursor')
    const cursor2 = document.querySelector<HTMLElement>('.cursor2')
    if (!cursor || !cursor2) return
    const onMove = (e: MouseEvent) => {
      const css = `left: ${e.clientX}px; top: ${e.clientY}px;`
      cursor.style.cssText = css
      cursor2.style.cssText = css
    }
    document.addEventListener('mousemove', onMove)
    return () => document.removeEventListener('mousemove', onMove)
  }, [])
}

/** Back-to-top button visibility + smooth scroll (original behavior). */
export function useClickTop(): void {
  useEffect(() => {
    const button = document.querySelector<HTMLElement>('.click-top')
    const sectionToAppear = document.querySelector<HTMLElement>('.section2')
    if (!button || !sectionToAppear) return
    button.style.opacity = '0'
    const onScroll = () => {
      const sectionTop = sectionToAppear.getBoundingClientRect().top
      button.style.opacity = sectionTop <= window.innerHeight / 2 ? '1' : '0'
    }
    const onClick = () => window.scrollTo({ top: 0, behavior: 'smooth' })
    window.addEventListener('scroll', onScroll)
    button.addEventListener('click', onClick)
    return () => {
      window.removeEventListener('scroll', onScroll)
      button.removeEventListener('click', onClick)
    }
  }, [])
}

/** Animated numbers in .section5 (ids count1..count4) — original logic. */
function startCounting(el: HTMLElement, targetValue: number, suffix: string) {
  const step = Math.ceil(targetValue / 100)
  let current = 0
  const interval = setInterval(() => {
    if (current <= targetValue) {
      el.textContent = current.toLocaleString() + suffix
      current += step
    } else {
      el.textContent = targetValue.toLocaleString() + suffix
      clearInterval(interval)
    }
  }, 10)
}

export function useCounters(): void {
  useEffect(() => {
    const sectionElement = document.querySelector<HTMLElement>('.section5')
    const borderBox = document.querySelector<HTMLElement>('.border-box-border')
    const cleanups: Array<() => void> = []

    if (sectionElement) {
      const observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return
            const targetElement = entry.target.querySelector('h1')
            if (!targetElement) return
            const targetValue = parseInt(targetElement.textContent?.replace(/\D/g, '') ?? '0', 10)
            const id = targetElement.id
            if (id === 'count1' || id === 'count3') startCounting(targetElement, targetValue, '+')
            else if (id === 'count2' || id === 'count4') startCounting(targetElement, targetValue, 'K')
            obs.unobserve(entry.target)
          })
        },
        { root: null, rootMargin: '0px', threshold: 0.5 },
      )
      sectionElement.querySelectorAll('h1').forEach((h1) => observer.observe(h1.parentElement ?? h1))
      cleanups.push(() => observer.disconnect())
    }

    if (borderBox) {
      const observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return
            const counterElement = document.getElementById('counter')
            if (counterElement) {
              let counterValue = 0
              const intervalId = setInterval(() => {
                if (counterValue < 20) {
                  counterValue++
                  counterElement.textContent = `${counterValue}+`
                } else {
                  clearInterval(intervalId)
                }
              }, 100)
            }
            obs.unobserve(entry.target)
          })
        },
        { root: null, rootMargin: '0px', threshold: 0.5 },
      )
      observer.observe(borderBox)
      cleanups.push(() => observer.disconnect())
    }

    return () => cleanups.forEach((c) => c())
  }, [])
}

/** Contact form dirty-tracking → beforeunload confirm (original behavior). */
export function useFormDirtyGuard(): { onInput: (id: string, value: string) => void } {
  const dirty = useRef({ name: false, email: false, subject: false, message: false })
  useEffect(() => {
    const handler = (e: BeforeUnloadEvent) => {
      const d = dirty.current
      if (d.name || d.email || d.subject || d.message) {
        e.preventDefault()
        e.returnValue = 'You have unsent changes in the contact form. Are you sure you want to leave?'
        return e.returnValue
      }
    }
    window.addEventListener('beforeunload', handler)
    return () => window.removeEventListener('beforeunload', handler)
  }, [])
  return {
    onInput: (id, value) => {
      const key = id === 'name_id' ? 'name' : id === 'email_id' ? 'email' : (id as 'subject' | 'message')
      dirty.current[key as keyof typeof dirty.current] = Boolean(value)
    },
  }
}

export function scrollToSection(selector: string) {
  const target = document.querySelector(selector)
  if (!target) return
  const offset = document.querySelector('header')?.offsetHeight || 0
  window.scrollTo({ top: Math.max(target.getBoundingClientRect().top + window.scrollY - offset, 0), behavior: 'smooth' })
}
