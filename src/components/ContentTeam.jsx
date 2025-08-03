import { motion } from "framer-motion";

const ContentTeam = () => {
  return (
    <motion.section
      className="py-16 px-4 bg-neutral dark:bg-black text-black dark:text-white transition-colors duration-300"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto text-center mb-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-2xl md:text-4xl font-bold"
        >
          <span className="text-primary">Build Your In-House Content Team</span>
          <br />
          <span className="text-white dark:text-white">Without the Overhead!</span>
        </motion.h2>
      </div>

      {/* Two column card comparison */}
      <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto justify-center items-stretch">
        {/* Left Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex-1 flex flex-col gap-12 bg-gradient-to-br from-primary to-secondary text-white p-6 md:p-16 rounded-4xl max-w-xl border border-gray-700"
        >
          <div className="mb-4 flex flex-col items-center ">
            <span className="bg-white text-red-600 px-8 text-md font-semibold rounded-bl-3xl rounded-tr-3xl">
              Typical Content Creator With
            </span>
            <h3 className="text-xl font-bold mt-2">Full-Time Team Member</h3>
          </div>
          <ul className="space-y-3 text-sm leading-relaxed">
            <div className="flex gap-2">
              <span>😓</span><li> <b>Hiring Hassles:</b> Time consuming talent search, vetting and onboarding.</li>
            </div>
            <div className="flex gap-2">
              <span>😞</span><li> <b>Financial Overhead:</b> Unseen costs beyond talent payment.</li>
            </div>
            <div className="flex gap-2">
              <span>⌛</span> <li> <b>Limited Hours:</b> Constraints on real-time team availability.</li>
            </div>
            <div className="flex gap-2">
              <span>🤹</span><li> <b>Role Juggling:</b> Balancing multiple responsibilities with separate hires.</li>
            </div>
            <div className="flex gap-2">
              <span>🌐</span><li> <b>Geographical & Experience Limits:</b> Restricted by location and narrow expertise.</li>
            </div>
            <div className="flex gap-2">
              <span>🔄️</span><li> <b>Flexibility Challenges:</b> Difficulty adapting to changing project needs.</li>
            </div>
            <div className="flex gap-2">
              <span>📃</span><li> <b>Contractual Rigidity:</b> Bound by inflexible, long-term agreements.</li>
            </div>
            <div className="flex gap-2">
              <span>💼</span><li> <b>Fixed Annual Costs:</b> Set expenses, regardless of project fluctuations.</li>
            </div>
            <li className="pt-2 font-semibold text-base">Cost – $50,000 – $1,50,000 / year</li>
          </ul>
        </motion.div>

        {/* Right Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex-1 flex flex-col gap-12 bg-gradient-to-br from-primary to-secondary text-white p-6 md:p-16 rounded-4xl max-w-xl border border-gray-700"
        >
          <div className="mb-4 flex flex-col items-center">
            <span className="bg-white text-red-600 px-8 text-md font-semibold rounded-bl-3xl rounded-tr-3xl">
              You With
            </span>
            <h3 className="text-xl font-bold mt-2">ClipsMunch Subscription</h3>
          </div>
          <ul className="space-y-3 text-sm leading-relaxed">
            <div className="flex gap-2">
              <span>✅</span><li> <b>Pre-vetted Expertise:</b> Content creation with ready-made niche experts.</li>
            </div>
            <div className="flex gap-2">
              <span>✅</span><li> <b>Zero Financial Baggage:</b> Focus on creativity, not on hidden financial burdens.</li>
            </div>
            <div className="flex gap-2">
              <span>✅</span><li> <b>24/7 Creative Availability:</b> Your ideas don’t wait, neither do we.</li>
            </div>
            <div className="flex gap-2">
              <span>✅</span><li> <b>All Talents in One Place:</b> A diverse pool under a single subscription.</li>
            </div>
            <div className="flex gap-2">
              <span>✅</span><li> <b>Global Top Talents:</b> Access the best minds from around the world.</li>
            </div>
            <div className="flex gap-2">
              <span>✅</span><li> <b>Flexibility Redefined:</b> Change teams or talents within 12 hours.</li>
            </div>
            <div className="flex gap-2">
              <span>✅</span><li> <b>Contract-Free Commitment:</b> No long-term ties.</li>
            </div>
            <div className="flex gap-2">
              <span>✅</span><li> <b>Budget-Friendly Pay-as-You-Go:</b> Starts at just $999 per month.</li>
            </div>
          </ul>
        </motion.div>
      </div>

      {/* CTA footer */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="mt-12 flex max-w-6xl mx-auto justify-center"
      >
        <div className="bg-secondary w-full text-white text-2xl md:text-4xl font-bold px-4 py-4 md:px-8 md:py-4 rounded-full shadow-lg text-center">
          Have More Questions? Book Your Call Now!
        </div>
      </motion.div>
    </motion.section>
  )
}

export default ContentTeam