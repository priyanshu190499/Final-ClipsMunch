import { motion } from "framer-motion";
import { useState, useRef  } from "react";

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

   const [activeIndex, setActiveIndex] = useState(0);

  const scrollRef = useRef(null);

  const handleDotClick = (idx) => {
    setActiveIndex(idx);
    if (scrollRef.current) {
      const container = scrollRef.current;
      const cardWidth = container.offsetWidth; // each card = full width on mobile
      container.scrollTo({
        left: cardWidth * idx,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-neutral dark:bg-black text-black dark:text-white pt-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-red-500 font-semibold">// Our Subscriptions Plans</p>
          <h2 className="text-xl md:text-4xl font-extrabold">
            Choose The <span className="text-red-600">Right Plan</span> For Your Business
          </h2>
        </div>

        {/* Carousel for small screens */}
        <div className="block sm:hidden relative">
          <div 
          ref={scrollRef}
            className="flex gap-4 overflow-y-hidden overflow-x-auto snap-x snap-mandatory scrollbar-hide h-fit scroll-smooth"
            onScroll={(e) => {
              const container = e.target;
              const idx = Math.round(container.scrollLeft / container.offsetWidth);
              setActiveIndex(idx);
            }}>
            {plans.map((plan, idx) => (
              <motion.div
                key={idx}
                
                className="min-w-full snap-center bg-gradient-to-b from-red-500 to-red-700 
                           text-white rounded-xl flex flex-col justify-between shadow-md"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: 0.1 + idx * 0.12 }}
                onViewportEnter={() => setActiveIndex(idx)}
              >
                <div>
                  <div className="p-8">
                    <span className="text-xs font-bold bg-white text-secondary px-4 py-1 
                                     rounded-bl-2xl rounded-tr-2xl border border-gray-500 
                                     inline-block mb-2 uppercase tracking-wide">
                      {plan.tag}
                    </span>
                    <h3 className="text-2xl font-bold">{plan.title}</h3>
                    <div className="mt-8">
                      <p className="text-3xl font-extralight">FROM</p>
                      <p className="text-5xl font-bold">
                        {plan.price}{" "}
                        <span className="text-sm font-medium">{plan.frequency}</span>
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 bg-white text-sm text-black font-semibold text-center py-2 
                                  border border-primary shadow-primary">
                    {plan.requests}
                  </div>
                  <div className="p-8">
                    <ul className="mt-6 space-y-3 text-sm text-white">
                      {plan.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="mt-1 text-red-200">•</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="p-1 mt-auto rounded-b-xl">
                  <button className="w-full py-4 text-xl text-secondary text-center font-bold 
                                     transition-colors rounded-b-xl bg-white">
                    {plan.cta} →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tracking Dots */}
          <div className="flex justify-center mt-4 space-x-2">
            {plans.map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleDotClick(idx)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  activeIndex === idx ? "bg-red-600" : "bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Grid for larger screens */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.1 + idx * 0.12 }}
              className="bg-gradient-to-b from-red-500 to-red-700 text-white rounded-xl 
                         flex flex-col justify-between shadow-md h-full"
            >
              <div>
                <div className="p-8">
                  <span className="text-xs font-bold bg-white text-secondary px-4 py-1 
                                   rounded-bl-2xl rounded-tr-2xl border border-gray-500 
                                   inline-block mb-2 uppercase tracking-wide">
                    {plan.tag}
                  </span>
                  <h3 className="text-2xl font-bold">{plan.title}</h3>
                  <div className="mt-8">
                    <p className="text-3xl font-extralight">FROM</p>
                    <p className="text-5xl font-bold">
                      {plan.price}{" "}
                      <span className="text-sm font-medium">{plan.frequency}</span>
                    </p>
                  </div>
                </div>
                <div className="mt-4 bg-white text-sm text-black font-semibold text-center py-2 
                                border border-primary shadow-primary">
                  {plan.requests}
                </div>
                <div className="p-8">
                  <ul className="mt-6 space-y-3 text-sm text-white">
                    {plan.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-1 text-red-200">•</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="p-1 mt-auto rounded-b-xl">
                <button className="w-full py-4 text-xl text-secondary text-center font-bold 
                                   transition-colors rounded-b-xl bg-white">
                  {plan.cta} →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
