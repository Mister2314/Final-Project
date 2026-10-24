const ICON_PEN =
  'M14 21q-.425 0-.713-.288T13 20q0-.425.288-.713T14 19q1.175 0 2.087-.463T17 17.5q0-.35-.325-.65t-.9-.55l1.475-1.475q.8.475 1.275 1.125T19 17.5q0 1.65-1.575 2.575T14 21Zm-9.425-7.65q-.725-.425-1.15-.987T3 11q0-1.05.775-1.763T6.55 7.65q1.575-.725 2.013-1.012T9 6q0-.4-.488-.7T7 5q-.625 0-1.05.15t-.775.5q-.275.275-.675.325t-.725-.225Q3.45 5.5 3.4 5.1t.225-.725Q4.1 3.8 4.988 3.4T7 3q1.8 0 2.9.813T11 6q0 .975-.725 1.75T7.35 9.475q-1.45.625-1.9.925T5 11q0 .225.287.438t.788.412l-1.5 1.5ZM18.85 10.4L14.6 6.15l1.05-1.05q.6-.6 1.438-.6t1.412.6l1.4 1.4q.6.575.6 1.413t-.6 1.437l-1.05 1.05ZM6 19h1.4l7.2-7.2l-1.4-1.4L6 17.6V19Zm-2 2v-4.25l9.2-9.2l4.25 4.25l-9.2 9.2H4Zm9.2-10.6l1.4 1.4l-1.4-1.4Z'

const ICON_QR =
  'M3 4c0-.55.45-1 1-1h2V1H4C2.34 1 1 2.34 1 4v2h2V4zm0 16v-2H1v2c0 1.66 1.34 3 3 3h2v-2H4c-.55 0-1-.45-1-1zM20 1h-2v2h2c.55 0 1 .45 1 1v2h2V4c0-1.66-1.34-3-3-3zm1 19c0 .55-.45 1-1 1h-2v2h2c1.66 0 3-1.34 3-3v-2h-2v2zm-2-5.13V9.13c0-.72-.38-1.38-1-1.73l-5-2.88c-.31-.18-.65-.27-1-.27s-.69.09-1 .27L6 7.39c-.62.36-1 1.02-1 1.74v5.74c0 .72.38 1.38 1 1.73l5 2.88c.31.18.65.27 1 .27s.69-.09 1-.27l5-2.88c.62-.35 1-1.01 1-1.73zm-8 2.3l-4-2.3v-4.63l4 2.33v4.6zm1-6.33L8.04 8.53L12 6.25l3.96 2.28L12 10.84zm5 4.03l-4 2.3v-4.6l4-2.33v4.63z'

const ICON_PERSON =
  'M10 12q-1.65 0-2.825-1.175T6 8q0-1.65 1.175-2.825T10 4q1.65 0 2.825 1.175T14 8q0 1.65-1.175 2.825T10 12Zm-8 8v-2.8q0-.825.425-1.55t1.175-1.1q1.275-.65 2.875-1.1T10 13h.35q.15 0 .3.05q-.2.45-.338.938T10.1 15H10q-1.775 0-3.187.45t-2.313.9q-.225.125-.363.35T4 17.2v.8h6.3q.15.525.4 1.038t.55.962H2Zm14 1l-.3-1.5q-.3-.125-.563-.263T14.6 18.9l-1.45.45l-1-1.7l1.15-1q-.05-.35-.05-.65t.05-.65l-1.15-1l1-1.7l1.45.45q.275-.2.538-.337t.562-.263L16 11h2l.3 1.5q.3.125.563.275t.537.375l1.45-.5l1 1.75l-1.15 1q.05.3.05.625t-.05.625l1.15 1l-1 1.7l-1.45-.45q-.275.2-.537.338t-.563.262L18 21h-2Zm1-3q.825 0 1.413-.588T19 16q0-.825-.588-1.413T17 14q-.825 0-1.413.588T15 16q0 .825.588 1.413T17 18Zm-7-8q.825 0 1.413-.588T12 8q0-.825-.588-1.413T10 6q-.825 0-1.413.588T8 8q0 .825.588 1.413T10 10Zm0-2Zm.3 10Z'

const ICON_BRIEFCASE =
  'M4 21q-.825 0-1.413-.588T2 19V8q0-.825.588-1.413T4 6h4V4q0-.825.588-1.413T10 2h4q.825 0 1.413.588T16 4v2h4q.825 0 1.413.588T22 8v11q0 .825-.588 1.413T20 21H4Zm0-2h16V8H4v11Zm6-13h4V4h-4v2ZM4 19V8v11Z'

const ICON_CLOCK =
  'M12 20a8 8 0 0 0 8-8a8 8 0 0 0-8-8a8 8 0 0 0-8 8a8 8 0 0 0 8 8m0-18a10 10 0 0 1 10 10a10 10 0 0 1-10 10C6.47 22 2 17.5 2 12A10 10 0 0 1 12 2m.5 5v5.25l4.5 2.67l-.75 1.23L11 13V7h1.5Z'

const ADDR = 'Al. Brucknera Aleksandra63, Wrocław 51-410'

function JobBox({
  icon,
  iconSize = 34,
  title,
  address,
  margRight = false,
  aos = false,
}: {
  icon: string
  iconSize?: number
  title: string
  address: string
  margRight?: boolean
  aos?: boolean
}) {
  return (
    <div data-aos={aos ? 'flip-up' : undefined} className={`s8-div2-boxes${margRight ? ' marg-right' : ''}`}>
      <div className="s8-div2-boxes-left">
        <div className="left-icon-box">
          <svg xmlns="http://www.w3.org/2000/svg" width={iconSize} height="34" viewBox="0 0 24 24">
            <path fill="currentColor" d={icon} />
          </svg>
        </div>
      </div>
      <div className="s8-div2-boxes-middle">
        <div className="s8-div2-boxes-middle-div1">
          <h4>{title}</h4>
          <p>{address}</p>
        </div>
        <div className="s8-div2-boxes-middle-div2">
          <div className="s8-div2-boxes-middle-div2-boxes">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
              <path fill="currentColor" d={ICON_BRIEFCASE} />
            </svg>
            <span>Full Time</span>
          </div>
          <div className="s8-div2-boxes-middle-div2-boxes">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
              <path fill="currentColor" d={ICON_CLOCK} />
            </svg>
            <span>Full Time</span>
          </div>
        </div>
      </div>
      <div className="s8-div2-boxes-right">
        <span>Design</span>
      </div>
    </div>
  )
}

export default function Section8() {
  return (
    <section id="About" className="section8">
      <div className="s8-div1">
        <div className="s8-div1-box1">
          <h4 data-aos="fade-up">
            We're Looking For <span>Talented Professionals</span>{' '}
          </h4>
          <h2 data-aos="fade-up">
            <span>Let's Build The Future</span> Of <br /> Video Games Together!
          </h2>
        </div>
        <div data-aos="fade-up" className="s8-div1-box1-paragraph">
          <p>
            Our belief is that being simple, honest, self-driven and motivated combined with the constant pursuit of
            the ultimate company atmosphere can help grow a creative and robust team.
          </p>
        </div>
      </div>
      <div data-aos="flip-up" className="s8-div2">
        <JobBox icon={ICON_PEN} title="Senior Level Game Designer" address={ADDR} margRight />
        <JobBox icon={ICON_PEN} title="Level Game Designer" address="Al10" />
      </div>

      <div data-aos="flip-up" className="s8-div2">
        <JobBox icon={ICON_QR} title="SR UI/UX Game Designer" address={ADDR} margRight />
        <JobBox icon={ICON_PEN} title="Sr. Unity Developer" address="Al10" aos />
      </div>

      <div data-aos="flip-up" className="s8-div2">
        <JobBox icon={ICON_PEN} title="Lead VFX Artist" address={ADDR} margRight />
        <JobBox icon={ICON_QR} title="3D Artist" address="Al10" />
      </div>

      <div data-aos="flip-up" className="s8-div2">
        <JobBox icon={ICON_QR} iconSize={50} title="SR. 3D Artist" address={ADDR} margRight />
        <JobBox icon={ICON_PERSON} title="Product Manager" address="Al10" aos />
      </div>
    </section>
  )
}
