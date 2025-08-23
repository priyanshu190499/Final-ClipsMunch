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
      <div className="max-w-7xl mx-auto text-center mb-6 ">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-xl md:text-4xl font-extrabold"
        >
          <span className="text-primary">Build Your In-House Content Team</span>
          <br />
          <span className="text-black dark:text-white">Without the Overhead!</span>
        </motion.h2>
      </div>

      {/* Two column card comparison */}
      <div className="flex flex-col md:flex-row gap-8 max-w-6xl  mx-auto justify-center items-stretch">
        {/* Left Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex-1 flex flex-col gap-12 bg-gradient-to-br from-primary to-secondary text-white p-6 md:p-16 rounded-4xl max-w-xl border border-gray-700"
        >
          <div className="mb-4 flex flex-col items-center ">
            <span className="bg-white text-red-600 px-8 text-md font-semibold rounded-bl-3xl rounded-tr-3xl custom-cont-team">
              Typical Content Creator With
            </span>
            <h3 className="text-xl font-bold mt-2">Full-Time Team Member</h3>
          </div>
          <ul className="space-y-3 text-sm leading-relaxed">
  <div className="flex gap-2">
    <span>😓</span>
    <li>
      <div className="flex flex-col">
        <b>Hiring Hassles:</b>
        <span>Time consuming talent search, vetting and onboarding.</span>
      </div>
    </li>
  </div>

  <div className="flex gap-2">
    <span>😞</span>
    <li>
      <div className="flex flex-col">
        <b>Financial Overhead:</b>
        <span>Unseen costs beyond talent payment.</span>
      </div>
    </li>
  </div>

  <div className="flex gap-2">
    <span>⌛</span>
    <li>
      <div className="flex flex-col">
        <b>Limited Hours:</b>
        <span>Constraints on real-time team availability.</span>
      </div>
    </li>
  </div>

  <div className="flex gap-2">
    <span>🤹</span>
    <li>
      <div className="flex flex-col">
        <b>Role Juggling:</b>
        <span>Balancing multiple responsibilities with separate hires.</span>
      </div>
    </li>
  </div>

  <div className="flex gap-2">
    <span>🌐</span>
    <li>
      <div className="flex flex-col">
        <b>Geographical & Experience Limits:</b>
        <span>Restricted by location and narrow expertise.</span>
      </div>
    </li>
  </div>

  <div className="flex gap-2">
    <span>🔄️</span>
    <li>
      <div className="flex flex-col">
        <b>Flexibility Challenges:</b>
        <span>Difficulty adapting to changing project needs.</span>
      </div>
    </li>
  </div>

  <div className="flex gap-2">
    <span>📃</span>
    <li>
      <div className="flex flex-col">
        <b>Contractual Rigidity:</b>
        <span>Bound by inflexible, long-term agreements.</span>
      </div>
    </li>
  </div>

  <div className="flex gap-2">
    <span>💼</span>
    <li>
      <div className="flex flex-col">
        <b>Fixed Annual Costs:</b>
        <span>Set expenses, regardless of project fluctuations.</span>
      </div>
    </li>
  </div>

  <li className="pt-2 font-semibold text-base">
    Cost – $50,000 – $1,50,000 / year
  </li>
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
            <span className="bg-white text-red-600 px-8 text-md font-semibold rounded-bl-3xl rounded-tr-3xl custom-cont-team">
              You With
            </span>
            <h3 className="text-xl font-bold mt-2">ClipsMunch Subscription</h3>
          </div>
          <ul className="space-y-3 text-sm leading-relaxed">
  <div className="flex gap-2">
    <span>✅</span>
    <li>
      <div className="flex flex-col">
        <b>Pre-vetted Expertise:</b>
        <span>Content creation with ready-made niche experts.</span>
      </div>
    </li>
  </div>

  <div className="flex gap-2">
    <span>✅</span>
    <li>
      <div className="flex flex-col">
        <b>Zero Financial Baggage:</b>
        <span>Focus on creativity, not on hidden financial burdens.</span>
      </div>
    </li>
  </div>

  <div className="flex gap-2">
    <span>✅</span>
    <li>
      <div className="flex flex-col">
        <b>24/7 Creative Availability:</b>
        <span>Your ideas don’t wait, neither do we.</span>
      </div>
    </li>
  </div>

  <div className="flex gap-2">
    <span>✅</span>
    <li>
      <div className="flex flex-col">
        <b>All Talents in One Place:</b>
        <span>A diverse pool under a single subscription.</span>
      </div>
    </li>
  </div>

  <div className="flex gap-2">
    <span>✅</span>
    <li>
      <div className="flex flex-col">
        <b>Global Top Talents:</b>
        <span>Access the best minds from around the world.</span>
      </div>
    </li>
  </div>

  <div className="flex gap-2">
    <span>✅</span>
    <li>
      <div className="flex flex-col">
        <b>Flexibility Redefined:</b>
        <span>Change teams or talents within 12 hours.</span>
      </div>
    </li>
  </div>

  <div className="flex gap-2">
    <span>✅</span>
    <li>
      <div className="flex flex-col">
        <b>Contract-Free Commitment:</b>
        <span>No long-term ties.</span>
      </div>
    </li>
  </div>

  <div className="flex gap-2">
    <span>✅</span>
    <li>
      <div className="flex flex-col">
        <b>Budget-Friendly Pay-as-You-Go:</b>
        <span>Starts at just $999 per month.</span>
      </div>
    </li>
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
        <div className="bg-secondary w-full text-white text-2xl font-bold px-4 py-4  rounded-full shadow-lg text-center">
          Have More Questions? Book Your Call Now!
        </div>
      </motion.div>
    </motion.section>
  )
}

export default ContentTeam