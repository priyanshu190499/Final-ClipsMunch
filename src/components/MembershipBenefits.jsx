import { useState } from "react"
import { motion } from "framer-motion"

const benefitCards = [
  ['neutral', 'theme', 'theme', 'neutral'],
  ['theme', 'neutral', 'theme', 'neutral'],
  ['neutral', 'theme', 'neutral', 'theme'],
]

const cardDescriptions = [
  "Benefit: Fast turnaround and priority support.",
  "Benefit: Unlimited revisions for your projects.",
  "Benefit: Access to premium editing tools.",
  "Benefit: Dedicated account manager.",
  "Benefit: Early access to new features.",
  "Benefit: Custom branding options.",
  "Benefit: Collaboration with top editors.",
  "Benefit: Monthly performance reports.",
  "Benefit: Secure cloud storage.",
  "Benefit: Exclusive member discounts.",
  "Benefit: Priority scheduling.",
  "Benefit: Personalized onboarding."
]

export default function MembershipBenefits() {
  const [popupIdx, setPopupIdx] = useState(null)
  let cardCount = 0

  return (
    <>
      <motion.section
        className="pt-12 px-8 bg-neutral dark:bg-black transition-colors duration-300"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-2xl md:text-4xl font-extrabold text-center mb-8 sm:mb-12 text-black dark:text-white"
        >
          Membership <span className="text-primary">Benefits</span>
        </motion.h2>

        <div className="max-w-6xl mx-auto flex flex-col items-end gap-4 ">
          {benefitCards.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex flex-wrap justify-center gap-4 sm:gap-6 w-full max-w-full"
            >
              {row.map((type, i) => {
                const flatIdx = cardCount++;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.6, delay: 0.1 + flatIdx * 0.12 }}
                    className="p-1 sm:p-2 bg-secondary rounded-xl cursor-pointer "
                    onClick={() => setPopupIdx(flatIdx)}
                  >
                    <div
                      className={`
                        flex-1 min-w-[90vw] max-w-full sm:min-w-[110px] sm:max-w-[250px] min-h-[220px] sm:min-h-[300px]
                         flex flex-col items-center justify-between transition
                        ${type === 'theme'
                          ? 'bg-gradient-to-br from-primary to-secondary h-full p-4 sm:p-7 text-white rounded-xl'
                          : 'bg-white dark:bg-black text-black border-10 p-2 sm:p-4 border-primary dark:text-white rounded-xl'}
                      `}
                    >
                      <p className="text-base sm:text-xl font-bold text-start leading-snug">
                        Trusted by clients worldwide
                      </p>
                      <div className="w-full flex justify-end">
                        <div
                          className={`
                            w-16 h-16 sm:w-24 sm:h-24 flex items-center justify-center rounded-full border-8 p-2 sm:p-4 text-5xl sm:text-8xl
                            ${type === 'theme'
                              ? 'border-white text-white'
                              : 'border-black dark:border-white text-black dark:text-white'}
                          `}
                        >
                          ♥
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          ))}
        </div>
      </motion.section>

      {/* Popup Modal */}
      {popupIdx !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
        >
          <div className="bg-white dark:bg-black rounded-2xl shadow-2xl p-4 sm:p-8 max-w-md w-full relative text-black dark:text-white">
            <button
              className="absolute top-2 right-4 text-2xl sm:text-3xl font-bold text-black dark:text-white"
              onClick={() => setPopupIdx(null)}
              aria-label="Close"
            >
              &times;
            </button>
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Benefit Details</h3>
            <p className="text-base sm:text-lg">{cardDescriptions[popupIdx]}</p>
          </div>
        </motion.div>
      )}
    </>
  )
}