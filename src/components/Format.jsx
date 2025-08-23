import { motion } from "framer-motion";

const leftCards = [
  {
    title: "Trusted by clients worldwide",
    desc: "Running out of copy so I’ll write anything.",
    variant: "large",
  },
  {
    title: "Expertly edited",
    desc: "Yes, it’s true. I’m not even kidding.",
    variant: "small",
  },
  {
    title: "Expertly edited",
    desc: "Yes, it’s true. I’m not even kidding.",
    variant: "small",
  },
  {
    title: "Expertly edited",
    desc: "Yes, it’s true. I’m not even kidding.",
    variant: "small",
  },
  {
    title: "Expertly edited",
    desc: "Yes, it’s true. I’m not even kidding.",
    variant: "small",
  },
];

const rightCards = [
  {
    title: "A powerhouse of talent",
    desc: "Running out of copy so I’ll write anything.",
    variant: "large",
  },
  {
    title: "A powerhouse of talent",
    desc: "Running out of copy so I’ll write anything.",
    variant: "large",
  },
];

export default function FormatStyleBento() {
  return (
    <motion.section
      className="bg-gradient-to-b from-primary to-secondary py-16 px-4 md:px-0 text-white"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-center text-xl md:text-4xl font-extrabold  mb-10"
      >
        Choose Your{" "}
        <span className="italic font-extrabold underline decoration-white/60">
          Format / Style
        </span>
      </motion.h2>

      {/* Bento layout for large screens */}
      <div className="hidden lg:flex flex-col lg:flex-row gap-6 max-w-6xl mx-auto">
        {/* Left Section (60%) */}
        <div className="w-full lg:w-[60%] flex flex-col gap-6">
          {/* Large card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="rounded-2xl p-6 bg-gradient-to-br from-[#d32121] to-[#5c0000] shadow-md min-h-[200px] flex flex-col justify-end"
          >
            <h3 className="text-2xl font-bold mb-1">{leftCards[0].title}</h3>
            <p className="text-lg text-white/90">{leftCards[0].desc}</p>
          </motion.div>
          {/* 2x2 grid of small cards */}
          <div className="grid grid-cols-2 gap-6 h-[400px]">
            {leftCards.slice(1).map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                className="rounded-2xl p-6 bg-gradient-to-br from-[#d32121] to-[#5c0000] shadow-md h-full flex flex-col justify-end"
              >
                <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                <p className="text-base text-white/90">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Right Section (40%) */}
        <div className="w-full lg:w-[40%] flex flex-col gap-6 justify-between">
          {rightCards.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.5 + i * 0.1 }}
              className="rounded-2xl p-6 bg-gradient-to-br from-[#d32121] to-[#5c0000] shadow-md h-[calc(50%-12px)] min-h-[140px] flex flex-col justify-end"
            >
              <h3 className="text-2xl font-bold mb-1">{item.title}</h3>
              <p className="text-lg text-white/90">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Equal grid for small/medium screens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto mt-10 lg:hidden">
        {[...leftCards, ...rightCards].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 + i * 0.08 }}
            className="rounded-2xl p-6 bg-gradient-to-br from-[#d32121] to-[#5c0000] shadow-md flex flex-col justify-end min-h-[140px]"
          >
            <h3 className="text-lg font-bold mb-1">{item.title}</h3>
            <p className="text-base text-white/90">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
