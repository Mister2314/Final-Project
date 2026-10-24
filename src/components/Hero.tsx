import { useTypewriter } from '../hooks'

export default function Hero() {
  const typewriteRef = useTypewriter(['Entertain', 'Games', 'Joy', 'Games'], 2000)
  return (
    <section id="Home" className="hero">
      <div className="ellipse1">
        <img src="./assets/img/ellipse-1.png" alt="" className="ellipse-img1" width={20} height={20} />
        <img src="./assets/img/ellipse-2.png" alt="" className="ellipse-img2" width={11} height={16} />
        <img src="./assets/img/ellipse-3.png" alt="" className="ellipse-img3" width={9} height={9} />
      </div>
      <div className="ellipse2">
        <img src="./assets/img/ellipse-2.png" alt="" className="ellipse2-img1" width={11} height={16} />
        <img src="./assets/img/ellipse-1.png" alt="" className="ellipse2-img2" width={20} height={20} />
        <img src="./assets/img/ellipse-2-new1.png" alt="" className="ellipse2-img3" width={13} height={12} />
        <img src="./assets/img/ellipse-3.png" alt="" className="ellipse2-img4" width={9} height={9} />
        <img src="./assets/img/ellipse2-new3.png" alt="" className="ellipse2-img5" width={20} height={20} />
      </div>
      <div className="ellipse3">
        <img src="./assets/img/planet.png" alt="" width={219} height={144} />
      </div>
      <div className="ellipse4">
        <img src="./assets/img/ellipse-1.png" alt="" className="ellipse4-img1" width={20} height={20} />
        <img src="./assets/img/ellipse2-new3.png" alt="" className="ellipse4-img2" width={20} height={20} />
        <img src="./assets/img/ellipse3-new11.png" alt="" className="ellipse4-img3" width={10} height={10} />
      </div>
      <img src="./assets/img/headphones.png" alt="" className="headphones1" width={266} height={272} />
      <img src="./assets/img/console-2.png" alt="" className="console" width={489} height={318} />
      <div className="overlay1" />
      <div className="overlay2" />
      <div className="overlay3" />
      <div className="overlay4" />
      <div className="hero-div">
        <div
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-duration="1050"
          data-aos-offset="0"
          className="hero-container"
        >
          <div className="text-container">
            <h2>Building Gaming Worlds</h2>
            <h1>We Craft Games</h1>
            <span
              className="typewrite"
              data-period="2000"
              data-type='[ "Entertain", "Games", "Joy", "Games" ]'
              ref={typewriteRef}
            />
            <p>Developing games that are imaginative, fun and bringing colors to the gaming world</p>
            <div className="animation-button-box">
              <a className="animation-button" href="#Games">
                Explore Our Games
              </a>
            </div>
          </div>
        </div>

        <div
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="500"
          data-aos-duration="900"
          data-aos-offset="0"
          className="right-side"
        >
          <div className="img-container2">
            <img
              src="./assets/img/banner-slider-img-1.png"
              alt="Crazy Wild — Gamestorm game key art"
              width={392}
              height={491}
              fetchPriority="high"
            />
          </div>
          <div className="right-side-text">
            <h3>Crazy Wild</h3>
          </div>
          <div className="image-container2">
            <img src="./assets/img/appstore-real.png" alt="" className="app-store" />
            <img src="./assets/img/googleplay-real.webp" alt="" className="play-store" width={720} height={224} />
          </div>
        </div>
      </div>
    </section>
  )
}
