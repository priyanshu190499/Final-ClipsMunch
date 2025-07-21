
const leftCards = [
  {
    title: 'Trusted by clients worldwide',
    desc: "Running out of copy so I’ll write anything.",
    variant: 'large',
  },
  {
    title: 'Expertly edited',
    desc: "Yes, it’s true. I’m not even kidding.",
    variant: 'small',
  },
  {
    title: 'Expertly edited',
    desc: "Yes, it’s true. I’m not even kidding.",
    variant: 'small',
  },
  {
    title: 'Expertly edited',
    desc: "Yes, it’s true. I’m not even kidding.",
    variant: 'small',
  },
  {
    title: 'Expertly edited',
    desc: "Yes, it’s true. I’m not even kidding.",
    variant: 'small',
  },
];

const rightCards = [
  {
    title: 'A powerhouse of talent',
    desc: "Running out of copy so I’ll write anything.",
    variant: 'large',
  },
  {
    title: 'A powerhouse of talent',
    desc: "Running out of copy so I’ll write anything.",
    variant: 'large',
  },
];

export default function FormatStyleBento() {
  return (
    <section className="bg-gradient-to-br from-[#9e1e1e] to-[#d42c2c] py-12 px-4 md:px-0 text-white">
      {/* Title */}
      <h2 className="text-center text-2xl md:text-4xl font-bold mb-10">
        Choose Your <span className="italic font-extrabold underline decoration-white/60">Format / Style</span>
      </h2>

      {/* Two-column bento layout for desktop, stacked for mobile */}
      <div className="flex flex-col lg:flex-row gap-8 max-w-5xl mx-auto">
        {/* Left Section (60%) */}
        <div className="w-full lg:w-[60%] flex flex-col gap-6">
          {/* Large card */}
          <div className="rounded-2xl p-6 bg-gradient-to-br from-[#d32121] to-[#5c0000] shadow-md min-h-[140px] flex flex-col justify-end">
            <h3 className="text-2xl font-bold mb-1">{leftCards[0].title}</h3>
            <p className="text-lg text-white/90">{leftCards[0].desc}</p>
          </div>
          {/* 2x2 grid of small cards, heights adjusted for alignment */}
          <div className="grid grid-cols-2 gap-6 h-[300px]">
            {leftCards.slice(1).map((item, i) => (
              <div key={i} className="rounded-2xl p-6 bg-gradient-to-br from-[#d32121] to-[#5c0000] shadow-md h-full flex flex-col justify-end">
                <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                <p className="text-base text-white/90">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Right Section (40%) */}
        <div className="w-full lg:w-[40%] flex flex-col gap-6 justify-between">
          {rightCards.map((item, i) => (
            <div key={i} className="rounded-2xl p-6 bg-gradient-to-br from-[#d32121] to-[#5c0000] shadow-md h-[calc(50%-12px)] min-h-[140px] flex flex-col justify-end">
              <h3 className="text-2xl font-bold mb-1">{item.title}</h3>
              <p className="text-lg text-white/90">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Responsive: stack all cards in a column on small screens */}
      <div className="lg:hidden flex flex-col gap-6 max-w-2xl mx-auto mt-10">
        {[...leftCards, ...rightCards].map((item, i) => (
          <div key={i} className={`rounded-2xl p-6 bg-gradient-to-br from-[#d32121] to-[#5c0000] shadow-md flex flex-col justify-end transition duration-300 ${item.variant === 'large' ? 'min-h-[180px]' : 'min-h-[100px]'}`}>
            <h3 className={`${item.variant === 'large' ? 'text-2xl' : 'text-lg'} font-bold mb-1`}>{item.title}</h3>
            <p className={`${item.variant === 'large' ? 'text-lg' : 'text-base'} text-white/90`}>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
