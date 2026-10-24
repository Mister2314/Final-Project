const team = [
  { img: './assets/img/team-members-1-5real.webp', name: 'Esther Howard', role: 'Artist', y: true, w: 987, h: 1305 },
  { img: './assets/img/team-members-2-4real.webp', name: 'Dianne Russell', role: 'Animator', y: false, w: 884, h: 1169 },
  { img: './assets/img/team-members-3-real.webp', name: 'Marvin McKinney', role: 'Brand & Culture Manager', y: true, w: 850, h: 1124 },
  { img: './assets/img/team-members-4-1-real.webp', name: 'Kristin Watsonl', role: 'Developer', y: false, w: 985, h: 1302 },
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
              <img src={m.img} alt={`${m.name}, ${m.role} at Gamestorm`} width={m.w} height={m.h} loading="lazy" decoding="async" />
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
