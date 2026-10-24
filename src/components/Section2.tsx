const shapes = [
  { value: '500M', text: 'Downloads, or 6% of the world’s population.' },
  { value: '2M', text: 'Our games have over 20 million unique daily users.' },
  { value: '52', text: 'Experts collaborating to blow your mind in one place.' },
  { value: '4K', text: 'The Gamestorm Studio is launching with 4K+ Games.' },
]

export default function Section2() {
  return (
    <section className="section2">
      <div className="section2-container">
        <div className="section2-left-box">
          <img src="./assets/img/about-block-bg.png" alt="" width={636} height={664} loading="lazy" decoding="async" />
          <div data-aos="fade-down" className="border-box-border">
            <div className="border-box">
              <h1 id="counter">0+</h1>
              <div className="border-box-text">
                <p>Years Of Experience</p>
              </div>
            </div>
          </div>
        </div>

        <div className="section2-right-box">
          <div className="right-box-container">
            <h4 data-aos="fade-down">
              Welcome To <span className="span1"> Gamestorm</span> Game Studios
            </h4>

            <span data-aos="fade-down" className="right-box-container-span">
              Bringing People Together Through <span>The Power Of Play</span>{' '}
            </span>

            <p data-aos="fade-down" className="paragraph1">
              As Game Gamestorm, we continue to open doors to new worlds every day and we are working excitedly for
              creating new games and unique ideas!
            </p>

            <div className="container">
              {shapes.map((s, i) => (
                <div data-aos="fade-down" className="shape" key={i}>
                  <span className="shape-span" data-aos={i === 3 ? 'fade-down' : undefined}>
                    {s.value}
                    <span>+</span>{' '}
                  </span>
                  <p>{s.text}</p>
                </div>
              ))}
              <div data-aos="zoom-out" className="animation-button-box">
                <button className="animation-button">Explore Our Games</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
