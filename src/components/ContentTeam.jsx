
const ContentTeam = () => {
  return (
      
<section className="py-16 px-4 bg-neutral dark:bg-black text-black dark:text-white transition-colors duration-300">
  <div className="max-w-6xl mx-auto text-center mb-6">
    <h2 className="text-2xl md:text-4xl font-bold">
      <span className="text-primary">Build Your In-House Content Team</span>
      <br />
      <span className="text-white dark:text-white">Without the Overhead!</span>
    </h2>
  </div>

  {/* Two column card comparison */}
  <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
    {/* Left Card */}
    <div className="flex-1 flex flex-col bg-gradient-to-br from-primary to-secondary text-white p-6 rounded-2xl max-w-xl">
      <div className="mb-4 flex flex-col items-center">
        <span className="bg-white text-red-600 px-4 py-1 text-xs font-semibold rounded-full">
          Typical Content Creator With
        </span>
        <h3 className="text-xl font-bold mt-2">Full-Time Team Member</h3>
      </div>
      <ul className="space-y-3 text-sm leading-relaxed">
        <li>❌ <b>Hiring Hassles:</b> Time consuming talent search, vetting and onboarding.</li>
        <li>❌ <b>Financial Overhead:</b> Unseen costs beyond talent payment.</li>
        <li>❌ <b>Limited Hours:</b> Constraints on real-time team availability.</li>
        <li>❌ <b>Role Juggling:</b> Balancing multiple responsibilities with separate hires.</li>
        <li>❌ <b>Geographical & Experience Limits:</b> Restricted by location and narrow expertise.</li>
        <li>❌ <b>Flexibility Challenges:</b> Difficulty adapting to changing project needs.</li>
        <li>❌ <b>Contractual Rigidity:</b> Bound by inflexible, long-term agreements.</li>
        <li>❌ <b>Fixed Annual Costs:</b> Set expenses, regardless of project fluctuations.</li>
        <li className="pt-2 font-semibold text-base">Cost – $50,000 – $1,50,000 / year</li>
      </ul>
    </div>

    {/* Right Card */}
    <div className="flex-1 flex flex-col bg-gradient-to-br from-primary to-secondary text-white p-6 rounded-2xl max-w-xl">
      <div className="mb-4 flex flex-col items-center">
        <span className="bg-white text-red-600 px-4 py-1 text-xs font-semibold rounded-full">
          You With
        </span>
        <h3 className="text-xl font-bold mt-2">ClipsMunch Subscription</h3>
      </div>
      <ul className="space-y-3 text-sm leading-relaxed">
        <li>✅ <b>Pre-vetted Expertise:</b> Content creation with ready-made niche experts.</li>
        <li>✅ <b>Zero Financial Baggage:</b> Focus on creativity, not on hidden financial burdens.</li>
        <li>✅ <b>24/7 Creative Availability:</b> Your ideas don’t wait, neither do we.</li>
        <li>✅ <b>All Talents in One Place:</b> A diverse pool under a single subscription.</li>
        <li>✅ <b>Global Top Talents:</b> Access the best minds from around the world.</li>
        <li>✅ <b>Flexibility Redefined:</b> Change teams or talents within 12 hours.</li>
        <li>✅ <b>Contract-Free Commitment:</b> No long-term ties.</li>
        <li>✅ <b>Budget-Friendly Pay-as-You-Go:</b> Starts at just $999 per month.</li>
      </ul>
    </div>
  </div>

  {/* CTA footer */}
  <div className="mt-12 flex justify-center">
    <div className="bg-primary text-white text-lg font-bold px-8 py-4 rounded-full shadow-lg text-center">
      Have More Questions? Book Your Call Now!
    </div>
  </div>
</section>
  )
}

export default ContentTeam