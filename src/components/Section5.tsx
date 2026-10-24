const stats = [
  { id: 'count1', value: '652+', label: 'unique daily users.' },
  { id: 'count2', value: '50M', label: 'downloads' },
  { id: 'count3', value: '200+', label: 'games launched' },
  { id: 'count4', value: '350K', label: 'gaming projects delivered' },
]

export default function Section5() {
  return (
    <section className="section5">
      <div data-aos="fade-up" className="s5-boxdiv">
        {stats.map((s) => (
          <div className="s5-boxes" key={s.id}>
            <h1 id={s.id}>{s.value}</h1>
            <p>{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
