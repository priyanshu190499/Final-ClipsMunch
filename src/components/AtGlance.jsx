import { IoDocumentOutline } from "react-icons/io5";
import { motion } from "framer-motion";

export default function AtGlance() {
  return (
    <motion.section
      className="bg-neutral dark:bg-black text-black dark:text-white pt-12 px-6"
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
        className="text-2xl md:text-4xl font-extrabold text-center mb-14"
      >
        <span className="text-secondary text-2xl md:text-4xl font-extrabold">ClipsMunch</span> at Glance
      </motion.h2>

      {/* Bento Grid - Flex Format */}
      <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
        {/* Left Column */}
        <div className="flex flex-col gap-8 flex-1">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="border-5 border-secondary rounded-4xl p-6 bg-gradient-to-br h-1/2 from-secondary to-[#410606] flex flex-col justify-between text-white shadow-xl hover:scale-[1.015] transition-transform duration-300"
          >
            <span className="text-white text-3xl mb-12 border-2 w-fit py-1 rounded-lg"><IoDocumentOutline /></span>
            <h3 className="text-xl font-semibold mb-1">Trusted by clients worldwide</h3>
            <p className="text-sm text-white/90">Running out of copy so I’ll write anything.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="border-5 border-secondary rounded-4xl p-6 h-1/2 bg-gradient-to-br from-secondary to-[#410606] flex flex-col justify-between text-white shadow-xl hover:scale-[1.015] transition-transform duration-300"
          >
            <span className="text-white text-3xl mb-12 border-2 w-fit py-1 rounded-lg"><IoDocumentOutline /></span>
            <h3 className="text-xl font-semibold mb-1">Expertly edited and delivered</h3>
            <p className="text-sm text-white/90">Yes, it’s true. I’m not even kidding. Ask my mom if you don’t believe me.</p>
          </motion.div>
        </div>
        {/* Center Column (tall card) */}
        <div className="flex flex-col gap-8 flex-[0.8] justify-between">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="border-5 border-secondary rounded-4xl p-6 bg-gradient-to-br from-secondary to-[#410606] flex flex-col justify-between h-full text-white shadow-xl hover:scale-[1.015] transition-transform duration-300"
          >
            <span className="text-white text-3xl mb-12 border-2 w-fit py-1 rounded-lg"><IoDocumentOutline /></span>
            <div>
              <h3 className="text-xl font-semibold mb-1">Dedicated to quality and creativity</h3>
              <p className="text-sm text-white/90">It’s the best money you’ll ever spend</p>
            </div>
          </motion.div>
        </div>
        {/* Right Column */}
        <div className="flex flex-col gap-8 flex-1">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="border-5 border-secondary rounded-4xl h-1/2 p-6 bg-gradient-to-br from-secondary to-[#410606] flex flex-col justify-between text-white shadow-xl hover:scale-[1.015] transition-transform duration-300"
          >
            <span className="text-white text-3xl mb-12 border-2 w-fit py-1 rounded-lg"><IoDocumentOutline /></span>
            <h3 className="text-xl font-semibold mb-1">A powerhouse of talent</h3>
            <p className="text-sm text-white/90">Running out of copy so I’ll write anything.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="border-5 border-secondary rounded-4xl h-1/2 p-6 bg-gradient-to-br from-secondary to-[#410606] flex flex-col justify-between text-white shadow-xl hover:scale-[1.015] transition-transform duration-300"
          >
            <span className="text-white text-3xl mb-12 border-2 w-fit py-1 rounded-lg"><IoDocumentOutline /></span>
            <h3 className="text-xl font-semibold mb-1">Collaborating around the globe</h3>
            <p className="text-sm text-white/90">Running out of copy so I’ll write anything.</p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}