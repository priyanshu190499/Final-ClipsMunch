import { useState } from "react"

const benefitCards = [
  // Row 1
  ['neutral', 'theme', 'theme', 'neutral'],
  // Row 2
  ['theme', 'neutral', 'theme', 'neutral'],
  // Row 3
  ['neutral', 'theme', 'neutral', 'theme'],
]

// Example random descriptions for each card (row-major order)
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

  // Calculate flat index for each card
  let cardCount = 0

  return (
    <>
      <section className="py-16 px-6 bg-neutral dark:bg-black transition-colors duration-300">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-12 text-black dark:text-white">
          Membership <span className="text-primary">Benefits</span>
        </h2>

        <div className="max-w-6xl mx-auto flex flex-col items-end gap-4">
          {benefitCards.map((row, rowIndex) => (
            <div key={rowIndex} className="flex flex-wrap justify-center gap-6 w-full max-w-full">
              {row.map((type, i) => {
                const flatIdx = cardCount++
                return (
                  <div
                    key={i}
                    className="p-2 bg-secondary rounded-xl cursor-pointer"
                    onClick={() => setPopupIdx(flatIdx)}
                  >
                    <div
                      className={`
                        flex-1 min-w-[200px] max-w-[250px] min-h-[300px]
                        rounded-xl flex flex-col items-center justify-between transition
                        ${type === 'theme'
                          ? 'bg-gradient-to-br from-primary to-secondary h-full p-7 text-white'
                          : 'bg-white dark:bg-black text-black border-10 p-4 border-primary dark:text-white'}
                      `}
                    >
                      {/* title */}
                      <p className="text-xl font-bold text-start leading-snug">
                        Trusted by clients worldwide
                      </p>
                      {/* Heart Icon */}
                      <div className="w-full flex justify-end">
                        <div
                          className={`
                            w-24 h-24 flex items-center justify-center rounded-full border-8 p-4 text-8xl
                            ${type === 'theme'
                              ? 'border-white text-white'
                              : 'border-black dark:border-white text-black dark:text-white'}
                          `}
                        >
                          ♥
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          ))}
        </div>
      </section>

      {/* Popup Modal */}
      {popupIdx !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="bg-white dark:bg-black rounded-2xl shadow-2xl p-8 max-w-md w-full relative text-black dark:text-white">
            <button
              className="absolute top-2 right-4 text-3xl font-bold text-black dark:text-white"
              onClick={() => setPopupIdx(null)}
              aria-label="Close"
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold mb-4">Benefit Details</h3>
            <p>{cardDescriptions[popupIdx]}</p>
          </div>
        </div>
      )}
    </>
  )
}