import { scrollToSection } from '../hooks'
import { useTypewriter } from '../hooks'

export default function Hero() {
  const typewriteRef = useTypewriter(['Entertain', 'Games', 'Joy', 'Games'], 2000)
  return (
    <section id="Home" className="hero">
      <div className="ellipse1">
        <img src="./assets/img/ellipse-1.png" alt="" className="ellipse-img1" />
        <img src="./assets/img/ellipse-2.png" alt="" className="ellipse-img2" />
        <img src="./assets/img/ellipse-3.png" alt="" className="ellipse-img3" />
      </div>
      <div className="ellipse2">
        <img src="./assets/img/ellipse-2.png" alt="" className="ellipse2-img1" />
        <img src="./assets/img/ellipse-1.png" alt="" className="ellipse2-img2" />
        <img src="./assets/img/ellipse-2-new1.png" alt="" className="ellipse2-img3" />
        <img src="./assets/img/ellipse-3.png" alt="" className="ellipse2-img4" />
        <img src="./assets/img/ellipse2-new3.png" alt="" className="ellipse2-img5" />
      </div>
      <div className="ellipse3">
        <img src="./assets/img/planet.png" alt="" />
      </div>
      <div className="ellipse4">
        <img src="./assets/img/ellipse-1.png" alt="" className="ellipse4-img1" />
        <img src="./assets/img/ellipse2-new3.png" alt="" className="ellipse4-img2" />
        <img src="./assets/img/ellipse3-new11.png" alt="" className="ellipse4-img3" />
      </div>
      <img src="./assets/img/headphones.png" alt="" className="headphones1" />
      <img src="./assets/img/console-2.png" alt="" className="console" />
      <div className="overlay1" />
      <div className="overlay2" />
      <div className="overlay3" />
      <div className="overlay4" />
      <div className="hero-div">
        <div
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
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
              <button type="button" onClick={() => scrollToSection('#Games')} className="animation-button">Explore Our Games</button>
            </div>
          </div>
        </div>

        <div
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0"
          className="right-side"
        >
          <div className="img-container2">
            <img src="./assets/img/banner-slider-img-1.png" alt="" />
          </div>
          <div className="right-side-text">
            <h3>Crazy Wild</h3>
          </div>
          <div className="image-container2">
            <img src="./assets/img/appstore-real.png" alt="" className="app-store" />
            <img src="./assets/img/googleplay-real.png" alt="" className="play-store" />
          </div>
        </div>
      </div>
    </section>
  )
}
