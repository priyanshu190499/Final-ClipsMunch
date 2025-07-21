export default function SubscriptionPlans() {
  const plans = [
    {
      tag: "Individual",
      title: "Creator Core",
      price: "$299",
      frequency: "/month",
      requests: "1 Active Request",
      cta: "Get Started",
      features: [
        "Perfect for solo creators who want unlimited video editing for social media clips.",
        "Most Recommended for Short Form Focused Content Creations",
        "Unlimited Clips Section & Revisions on Videos",
        "Short Form / Repurposed / Podcast",
        "24 Hours Turnaround Time Per Video",
        "10+ Video Styles Available to Choose from",
        "2 Long Form or 8 Short Videos Edit",
      ],
    },
    {
      tag: "Startup",
      title: "Content Plus",
      price: "$499",
      frequency: "/month",
      requests: "1 Active Request",
      cta: "Get Started",
      features: [
        "Perfect for solo creators who want unlimited video editing for social media clips.",
        "Most Recommended for Short Form Focused Content Creations",
        "Unlimited Clips Section & Revisions on Videos",
        "Short Form / Repurposed / Podcast",
        "24 Hours Turnaround Time Per Video",
        "15+ Video Styles Available to Choose from",
        "4 Long Form or 16 Short Videos Edit",
        "Dedicated Email / Whatsapp + Slack Support",
        "Access to our Affiliate Programme",
      ],
    },
    {
      tag: "Enterprise",
      title: "Content Pro",
      price: "$1299",
      frequency: "/month",
      requests: "3 Active Request (Single Client)",
      cta: "Get Started",
      features: [
        "For brands needing scripts, posting, and unlimited video editing across all formats.",
        "Highly Recommended for Short + Long form Content Creation",
        "Everything in Content Plus",
        "7 Long form Podcast / YouTube or 28 Short Videos Edit",
        "Content Posting from 2nd Month",
        "Weekly Team Updates",
        "25+ Video Styles Available to Choose from",
        "Weekly Reporting of Content",
        "Dedicated Email / Whatsapp + Slack Support",
        "Access to our Affiliate Programme",
        "Scripting for Social Media",
      ],
    },
    {
      tag: "Agency",
      title: "Agency Pro",
      price: "$2999",
      frequency: "/month",
      requests: "4 Active Requests (Multiple Clients)",
      cta: "Talk To Us",
      features: [
        "Designed for agencies managing multiple clients & heavy unlimited video editing workloads.",
        "For All type of Content Creations, From Planning to Execution for You and Your Clients.",
        "Everything in Content Pro",
        "15 Long Form Podcast / Youtube Content or 60 Short Videos Edit",
        "Content Recommendation + Planning",
        "Daily Team Updates Access via Slack OR Asana",
        "Access to unique style like 2D Animations + Whiteboard Videos",
        "Fully WhiteLabel Plan, You own our Casestudies, Portfolios, Pitch Decks, etc.",
        "Support Platform of Your Choice",
        "Direct Phone Support during working hours",
        "Access to Full Fledged Content Team for Custom Need",
        "Unlimited Access to Design Teams: for Thumbnails, Ads and Creatives",
        "Access to AI Creatives + AI Videos with Custom Avatar Videos",
      ],
    },
  ];

  return (
    <section className="bg-neutral dark:bg-black text-black dark:text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-red-500 font-semibold">// Our Subscriptions Plans</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Choose The <span className="text-red-600">Right Plan</span> For Your Business
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-b from-red-500 to-red-700 text-white p-2 rounded-xl flex flex-col justify-between shadow-md"
            >
              <div>
                <span className="text-xs font-semibold bg-white/20 px-2 py-1 rounded-full inline-block mb-2 uppercase tracking-wide">
                  {plan.tag}
                </span>
                <h3 className="text-xl font-bold">{plan.title}</h3>
                <div className="mt-2 text-3xl font-bold">
                  {plan.price}
                  <span className="text-base font-medium">{plan.frequency}</span>
                </div>
                <div className="mt-4 bg-white text-red-700 font-semibold text-center py-2 rounded">
                  {plan.requests}
                </div>

                <ul className="mt-6 space-y-3 text-sm text-white">
                  {plan.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1 text-red-200">•</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                className={`mt-6 w-full text-center py-2 font-semibold rounded transition-colors ${
                  plan.cta === "Talk To Us"
                    ? "bg-white text-red-700 hover:bg-gray-100"
                    : "bg-white text-red-600 hover:bg-gray-100"
                }`}
              >
                {plan.cta} →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
