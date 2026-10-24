export default function Section10() {
  return (
    <section className="section10">
      <img className="s10-bg1" src="./assets/img/s-10bg1.png" alt="" />
      <img className="s10-bg2" src="./assets/img/s10-bg2.png" alt="" />
      <div className="s10-container">
        <div className="s10-leftbox">
          <div data-aos="zoom-in" className="s10-leftbox-img-container">
            <img src="./assets/img/s10-leftbox-img.png" alt="" />
          </div>
        </div>
        <div className="s10-rightbox">
          <div className="s10-rightbox-container">
            <div className="s10-text">
              <h4 data-aos="fade-up">
                Join Our <span>Community</span>{' '}
              </h4>
              <h3 data-aos="fade-up">
                Connect With <span>Gamers Worldwide</span>
              </h3>
              <p data-aos="fade-up">
                Join the revolution and immerse yourself in the ultimate gaming experience, where <br />
                the boundaries between reality and fantasy blur, and the only limit is your <br /> imagination. Sign up
                now and be the first to play our latest game releases.
              </p>
            </div>
            <div data-aos="fade-up" className="s10-buttons">
              <button className="button1">Explore Our Games</button>
              <button className="button2">Join Now Our Community</button>{' '}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
