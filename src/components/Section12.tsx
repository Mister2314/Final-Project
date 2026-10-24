const socials = [
  {
    name: 'Facebook',
    path: 'M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5Z',
  },
  {
    name: 'Instagram',
    path: 'M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z',
  },
  {
    name: 'Linkedin',
    path: 'M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002ZM7 8.48H3V21h4V8.48Zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68Z',
  },
  {
    name: 'Twitter',
    path: 'M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23Z',
  },
]

const PIN_PATH =
  'M12 12q.825 0 1.413-.588T14 10q0-.825-.588-1.413T12 8q-.825 0-1.413.588T10 10q0 .825.588 1.413T12 12Zm0 7.35q3.05-2.8 4.525-5.088T18 10.2q0-2.725-1.738-4.462T12 4Q9.475 4 7.737 5.738T6 10.2q0 1.775 1.475 4.063T12 19.35ZM12 22q-4.025-3.425-6.012-6.362T4 10.2q0-3.75 2.413-5.975T12 2q3.175 0 5.588 2.225T20 10.2q0 2.5-1.988 5.438T12 22Zm0-12Z'

export default function Section12() {
  return (
    <section className="section12">
      <div className="s12-boxes-container">
        {socials.map((s) => (
          <div className="s12-boxes" key={s.name}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path fill="currentColor" d={s.path} />
            </svg>
            <p>{s.name}</p>
          </div>
        ))}
      </div>
      <div className="s12-boxes2">
        <div className="s12-leftbox">
          <div className="s12-texts">
            <div className="s12-texts-container">
              <h4 data-aos="fade-up">GAMESTORM</h4>
              <p data-aos="fade-up">
                Gamestorm is a premier gaming studio <br /> creating innovative and engaging games for <br /> players of
                all ages. Offering a wide variety of <br /> gaming experiences.
              </p>
              <div className="s12-boxes-container2">
                <div className="s12-boxes-box">
                  <div data-aos="fade-up" className="s12-boxes-box-left">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="25" viewBox="0 0 24 24">
                      <path fill="currentColor" d={PIN_PATH} />
                    </svg>
                  </div>
                  <div className="s12-boxes-box-right">
                    <h3 data-aos="fade-up">London</h3>
                    <p data-aos="fade-up">Al. Brucknera Aleksandra 63, Wrocław 51-410</p>
                  </div>
                </div>
                <div className="s12-boxes-box">
                  <div data-aos="fade-up" className="s12-boxes-box-left">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="25" viewBox="0 0 24 24">
                      <path fill="currentColor" d={PIN_PATH} />
                    </svg>
                  </div>
                  <div className="s12-boxes-box-right">
                    <h3 data-aos="fade-up">New York</h3>
                    <p data-aos="fade-up">7012 Green Lake Ave., Poughkeepsie, NY 12601</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="s12-rightbox">
          <div className="s12-rightbox-container">
            <h3 data-aos="fade-up">
              Stay Updated With News On All <br /> Our Games
            </h3>
            <p data-aos="fade-up">
              Want to be the first to know about new releases? <br /> Subscribe out newsletter!
            </p>
            <input data-aos="fade-up" type="text" placeholder="Enter Your Email" />
            <div data-aos="fade-up" className="button4-box">
              <button className="button4">Send Message</button>{' '}
            </div>
            <div className="s12-rightbox-container-posts">
              <h3 data-aos="fade-up">Instagram Posts</h3>
              <div className="post-icon-container">
                <div data-aos="fade-right" className="post-icons">
                  <img src="./assets/img/instagram-img-1.png" alt="" />
                </div>
                <div data-aos="fade-right" className="post-icons">
                  <img src="./assets/img/instagram-img-2.png" alt="" />
                </div>
                <div data-aos="fade-right" className="post-icons">
                  <img src="./assets/img/instagram-img-3.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
