import { motion } from "framer-motion";
import v1 from "../assets/vector-1.png"
import v2 from "../assets/vector-2.png"
import v3 from "../assets/vector-3.png"
import v4 from "../assets/vector-4.png"
const subscriptionData = [
  {
    title: "Influencers",
    desc: "For creators staying consistent and saving hours on content editing.",
    image: v1,
  },
  {
    title: "Agency Owners",
    desc: "For businesses using videos to market services without handling editing themselves.",
    image: v2,
  },
  {
    title: "Personal Brands",
    desc: "For founders, coaches, and executives growing influence with engaging content.",
    image: v3,
  },
  {
    title: "Videographers",
    desc: "For pros needing fast, reliable post-production support for client work.",
    image: v4,
  },
  {
    title: "SAAS Companies",
    desc: "For tech founders explaining features and attracting users with videos.",
    image: v4,
  },
  {
    title: "Media Agency",
    desc: "For high-volume creative teams managing content across multiple clients.",
    image: v3,
  },
  {
    title: "Corporate Businesses",
    desc: "For corporate companies that require high-quality, branded content creation.",
    image: v2,
  },
  {
    title: "Real Estate Professionals",
    desc: "For agents & brokers needing high-impact property reels, client stories, and explainers.",
    image: v1,
  },
]

export default function Subscription() {
  return (
    <section className="bg-gradient-to-b from-[#7c0e0e] to-[#f22929] pt-12 px-8 md:px-10 text-center">
      <h2 className="text-2xl md:text-4xl font-bold text-white mb-12">
        Who’s This <span className="italic underline">Subscription For</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {subscriptionData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 + index * 0.08 }}
            className="border-8 border-secondary rounded-xl"
          >
            <div className="bg-white rounded-xl p-3 border-8 h-full border-primary shadow-md hover:shadow-xl transition text-left flex flex-col items-center justify-between gap-6">
              {/* 💡 IMAGE placeholder */}
              <div className="w-36 h-36">
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-contain w-full h-full"
                />
              </div>
              <div>
                <h3 className="font-bold text-black text-lg text-start">{item.title}</h3>
                <p className="text-sm text-gray-700 text-start">{item.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}