const glanceData = [
  {
    title: 'Trusted by clients worldwide',
    desc: "Running out of copy so I’ll write anything.",
    span: 'col-span-1 row-span-1',
  },
  {
    title: 'A powerhouse of talent',
    desc: "Running out of copy so I’ll write anything.",
    span: 'col-span-1 row-span-2',
  },
  {
    title: 'Expertly edited and delivered',
    desc: "Yes, it’s true. I’m not even kidding. Ask my mom if you don’t believe me.",
    span: 'col-span-1 row-span-1',
  },
  {
    title: 'Dedicated to quality and creativity',
    desc: "It’s the best money you’ll ever spend",
    span: 'col-span-1 row-span-1',
  },
  {
    title: 'Collaborating around the globe',
    desc: "Running out of copy so I’ll write anything.",
    span: 'col-span-1 row-span-1',
  },
]

export default function AtGlance() {
  return (
    <section className="bg-neutral dark:bg-black text-black dark:text-white py-16 px-6">
      {/* Title */}
      <h2 className="text-2xl md:text-4xl font-extrabold text-center mb-14">
        <span className="text-primary">ClipsMunch</span> at Glance
      </h2>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[minmax(180px,_auto)] gap-8 max-w-7xl mx-auto">
        {glanceData.map((item, i) => (
          <div
            key={i}
            className={`border-3 border-primary rounded-2xl p-6 bg-gradient-to-br from-primary to-secondary flex flex-col justify-between text-white shadow-xl hover:scale-[1.015] transition-transform duration-300 ${item.span}`}
          >
            <div>

            <span className="text-white text-3xl mb-3 border">📄</span>
            </div>
            <div>

            <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
            <p className="text-sm text-white/90">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
