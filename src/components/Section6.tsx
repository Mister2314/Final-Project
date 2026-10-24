const services = [
  {
    icon: 'M4.55 19q-1.275 0-1.975-.888T2.05 15.95l1.05-7.5q.225-1.5 1.338-2.475T7.05 5h9.9q1.5 0 2.613.975T20.9 8.45l1.05 7.5q.175 1.275-.525 2.163T19.45 19q-.525 0-.975-.188t-.825-.562L15.4 16H8.6l-2.25 2.25q-.375.375-.825.563T4.55 19Zm.4-2.15L7.8 14h8.4l2.85 2.85q.05.05.4.15q.275 0 .438-.163T20 16.4l-1.1-7.7q-.1-.725-.65-1.212T16.95 7h-9.9q-.75 0-1.3.488T5.1 8.7L4 16.4q-.05.275.113.438T4.55 17q.05 0 .4-.15ZM17 13q.425 0 .713-.287T18 12q0-.425-.288-.713T17 11q-.425 0-.713.288T16 12q0 .425.288.713T17 13Zm-2-3q.425 0 .713-.287T16 9q0-.425-.288-.713T15 8q-.425 0-.713.288T14 9q0 .425.288.713T15 10Zm-7.25 3h1.5v-1.75H11v-1.5H9.25V8h-1.5v1.75H6v1.5h1.75V13ZM12 12Z',
    size: 42,
    title: (
      <>
        Game <br /> Development
      </>
    ),
    text: (
      <>
        Game design, programming,<br /> art, animation, audio, testing,<br /> marketing, publishing,<br />{' '}
        monetization, maintenance,<br /> player support, analytics.
      </>
    ),
  },
  {
    icon: 'M14 21q-.425 0-.713-.288T13 20q0-.425.288-.713T14 19q1.175 0 2.087-.463T17 17.5q0-.35-.325-.65t-.9-.55l1.475-1.475q.8.475 1.275 1.125T19 17.5q0 1.65-1.575 2.575T14 21Zm-9.425-7.65q-.725-.425-1.15-.987T3 11q0-1.05.775-1.763T6.55 7.65q1.575-.725 2.013-1.012T9 6q0-.4-.488-.7T7 5q-.625 0-1.05.15t-.775.5q-.275.275-.675.325t-.725-.225Q3.45 5.5 3.4 5.1t.225-.725Q4.1 3.8 4.988 3.4T7 3q1.8 0 2.9.813T11 6q0 .975-.725 1.75T7.35 9.475q-1.45.625-1.9.925T5 11q0 .225.287.438t.788.412l-1.5 1.5ZM18.85 10.4L14.6 6.15l1.05-1.05q.6-.6 1.438-.6t1.412.6l1.4 1.4q.6.575.6 1.413t-.6 1.437l-1.05 1.05ZM6 19h1.4l7.2-7.2l-1.4-1.4L6 17.6V19Zm-2 2v-4.25l9.2-9.2l4.25 4.25l-9.2 9.2H4Zm9.2-10.6l1.4 1.4l-1.4-1.4Z',
    size: 40,
    title: (
      <>
        Game Art & <br /> Design
      </>
    ),
    text: (
      <>
        Concept, character, <br /> environment, UI/UX, 2D/3D <br />
        modeling, texturing, rigging, <br />
        animation, VFX, lighting, <br /> compositing, motion graphics.
      </>
    ),
  },
  {
    icon: 'M6 23q-1.25 0-2.125-.875T3 20q0-1.25.875-2.125T6 17q.35 0 .65.075t.575.2L8.65 15.5q-.7-.775-.975-1.75T7.55 11.8l-2.025-.675q-.425.625-1.075 1T3 12.5q-1.25 0-2.125-.875T0 9.5q0-1.25.875-2.125T3 6.5q1.25 0 2.125.875T6 9.5v.2l2.025.7q.5-.9 1.338-1.525t1.887-.8V5.9q-.975-.275-1.613-1.063T9 3q0-1.25.875-2.125T12 0q1.25 0 2.125.875T15 3q0 1.05-.65 1.838T12.75 5.9v2.175q1.05.175 1.888.8t1.337 1.525L18 9.7v-.2q0-1.25.875-2.125T21 6.5q1.25 0 2.125.875T24 9.5q0 1.25-.875 2.125T21 12.5q-.8 0-1.463-.375t-1.062-1l-2.025.675q.15.975-.125 1.938T15.35 15.5l1.425 1.75q.275-.125.575-.188T18 17q1.25 0 2.125.875T21 20q0 1.25-.875 2.125T18 23q-1.25 0-2.125-.875T15 20q0-.5.163-.963t.437-.837l-1.425-1.775Q13.15 17 11.987 17T9.8 16.425L8.4 18.2q.275.375.438.838T9 20q0 1.25-.875 2.125T6 23ZM3 10.5q.425 0 .713-.288T4 9.5q0-.425-.288-.713T3 8.5q-.425 0-.713.288T2 9.5q0 .425.288.713T3 10.5ZM6 21q.425 0 .713-.288T7 20q0-.425-.288-.713T6 19q-.425 0-.713.288T5 20q0 .425.288.713T6 21Zm6-17q.425 0 .713-.288T13 3q0-.425-.288-.713T12 2q-.425 0-.713.288T11 3q0 .425.288.713T12 4Zm0 11q1.05 0 1.775-.725T14.5 12.5q0-1.05-.725-1.775T12 10q-1.05 0-1.775.725T9.5 12.5q0 1.05.725 1.775T12 15Zm6 6q.425 0 .713-.288T19 20q0-.425-.288-.713T18 19q-.425 0-.713.288T17 20q0 .425.288.713T18 21Zm3-10.5q.425 0 .713-.288T22 9.5q0-.425-.288-.713T21 8.5q-.425 0-.713.288T20 9.5q0 .425.288.713T21 10.5ZM12 3ZM3 9.5Zm9 3Zm9-3ZM6 20Zm12 0Z',
    size: 40,
    title: (
      <>
        Nft <br /> Development
      </>
    ),
    text: (
      <>
        Smart contract development, <br />
        NFT creation, blockchain <br />
        integration,NFT games, digital <br />
        ownership, NFT transfers, NFT <br />
        authentication, NFT branalytics.
      </>
    ),
  },
  {
    icon: 'M5 17h14q.825 0 1.413-.588T21 15V9q0-.825-.588-1.413T19 7H5q-.825 0-1.413.588T3 9v6q0 .825.588 1.413T5 17Zm2 3v-1H5q-1.65 0-2.825-1.175T1 15V9q0-1.65 1.175-2.825T5 5h14q1.65 0 2.825 1.175T23 9v6q0 1.65-1.175 2.825T19 19h-2v1H7Zm3.5-7q.425 0 .713-.288T11.5 12q0-.425-.288-.713T10.5 11q-.425 0-.713.288T9.5 12q0 .425.288.713T10.5 13Zm-3 0q.425 0 .713-.288T8.5 12q0-.425-.288-.713T7.5 11q-.425 0-.713.288T6.5 12q0 .425.288.713T7.5 13Zm6 0q.425 0 .713-.288T14.5 12q0-.425-.288-.713T13.5 11q-.425 0-.713.288T12.5 12q0 .425.288.713T13.5 13Zm3 0q.425 0 .713-.288T17.5 12q0-.425-.288-.713T16.5 11q-.425 0-.713.288T15.5 12q0 .425.288.713T16.5 13ZM12 12Z',
    size: 43,
    title: (
      <>
        Vr & Ar <br />
        Solutions
      </>
    ),
    text: (
      <>
        VR, HMDs, mobile AR, spatial <br /> computing, gesture control,<br /> haptic feedback, 360-degreebr audio,
        user tracking, immersive <br /> experiences.
      </>
    ),
  },
]

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5 12h14m-6 6l6-6m-6-6l6 6"
    />
  </svg>
)

export default function Section6() {
  return (
    <section id="Services" className="section6">
      <div className="s6-div1">
        <div data-aos="zoom-in-right" className="s6-div1-left-box">
          <h4>
            Our Time <span>Provide</span>
          </h4>
          <h1>
            Next Level <span>Services</span>
          </h1>
        </div>
        <div data-aos="zoom-in-left" className="s6-div1-right-box">
          <p>
            Gamestorm Studios provides end-to-end services for clients wishing to employ <br /> game development
            businesses skilled in Unity3D, Unreal, PlayCanvas, blockchain, <br /> game design, VR, NFT, metaverse, and
            more.
          </p>
        </div>
      </div>
      <div data-aos="fade-up" className="s6-div2">
        {services.map((s, i) => (
          <div className="s6-div2-boxes" key={i}>
            <div className="icon-box-container">
              <div className="icon-box">
                <svg xmlns="http://www.w3.org/2000/svg" width={s.size} height={s.size} viewBox="0 0 24 24">
                  <path fill="currentColor" d={s.icon} />
                </svg>
              </div>
              <div className="icon-box-texts">
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
              <div className="icon-box-hovertext">
                <h2>Learn More</h2>
                <ArrowIcon />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
