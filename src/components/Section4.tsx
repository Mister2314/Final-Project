const team = [
  { img: './assets/img/team-members-1-5real.png', name: 'Esther Howard', role: 'Artist', y: true },
  { img: './assets/img/team-members-2-4real.png', name: 'Dianne Russell', role: 'Animator', y: false },
  { img: './assets/img/team-members-3-real.png', name: 'Marvin McKinney', role: 'Brand & Culture Manager', y: true },
  { img: './assets/img/team-members-4-1-real.png', name: 'Kristin Watsonl', role: 'Developer', y: false },
]

export default function Section4() {
  return (
    <section className="section4">
      <div className="s4-firstbox">
        <div className="s4-firstbox-container">
          <h4 data-aos="fade-up">
            We Have A Passion For <span className="h4span">Games!</span>
          </h4>
          <span data-aos="fade-up" className="h4span2">
            Our Team Is Next-Level. And <br />{' '}
            <span className="h4span3">
              We're <span>Proud Of It.</span>
            </span>
          </span>
          <div className="s4-firstbox-container-paragraph">
            <p data-aos="fade-up">
              Our dynamic team blends tech-savvy developers, imaginative artists, analytical <br />
              minds, and visionary product managers. Driven to innovate, we bring excitement to <br />
              every project
            </p>
          </div>
        </div>
      </div>
      <div className="team-members">
        <div data-aos="fade-down" className="team-members-container">
          {team.map((m) => (
            <div className={`team-members-boxes${m.y ? ' team-members-y' : ''}`} key={m.name}>
              <img src={m.img} alt="" />
              <div className="team-members-paragraph">
                <h4 data-aos="fade-right">{m.name}</h4>
                <p data-aos="fade-right">{m.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
