const stars = Array.from({ length: 5 })
const STAR_PATH =
  'm12 15.39l-3.76 2.27l.99-4.28l-3.32-2.88l4.38-.37L12 6.09l1.71 4.04l4.38.37l-3.32 2.88l.99 4.28M22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.45 4.73L5.82 21L12 17.27L18.18 21l-1.64-7.03L22 9.24Z'

export default function Section9() {
  return (
    <section id="Blog" className="section9">
      <div className="s9-div1">
        <div className="s9-div1-box">
          <div className="s9-div1-box-container">
            <div className="s9-div1-box-top">
              <div data-aos="zoom-out" className="s9-div1-box-top-radiusbox">
                <img src="./assets/img/testimonial-img-1 (1).png" alt="" />
              </div>
            </div>
            <div data-aos="fade-up" className="s9-div1-box-star">
              {stars.map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
                  <path fill="currentColor" d={STAR_PATH} />
                </svg>
              ))}
            </div>
            <div className="s9-div1-box-middle">
              <p data-aos="fade-up">
                “The graphics in their games are always top-notch and <br /> truly bring the world to life”
              </p>
            </div>
            <div className="s9-div1-box-bottom">
              <h5 data-aos="fade-up">Kristin Watson</h5>
              <div className="s9-div1-box-bottom2">
                <div data-aos="fade-up" className="s9-div1-box-bottom2-left">
                  <span>United Kingdom</span>
                </div>
                <div className="s9-div1-box-bottom2-right">
                  {/* the original has an invalid stray "bb" attribute — attribute order preserved */}
                  <p data-aos="fade-up">
                    Mar 22, 2023
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
