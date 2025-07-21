const subscriptionData = [
  {
    title: "Influencers",
    desc: "For creators staying consistent and saving hours on content editing.",
    image: "/* IMAGE_PATH */", // add actual image path
  },
  {
    title: "Agency Owners",
    desc: "For businesses using videos to market services without handling editing themselves.",
    image: "/* IMAGE_PATH */",
  },
  {
    title: "Personal Brands",
    desc: "For founders, coaches, and executives growing influence with engaging content.",
    image: "/* IMAGE_PATH */",
  },
  {
    title: "Videographers",
    desc: "For pros needing fast, reliable post-production support for client work.",
    image: "/* IMAGE_PATH */",
  },
  {
    title: "SAAS Companies",
    desc: "For tech founders explaining features and attracting users with videos.",
    image: "/* IMAGE_PATH */",
  },
  {
    title: "Media Agency",
    desc: "For high-volume creative teams managing content across multiple clients.",
    image: "/* IMAGE_PATH */",
  },
  {
    title: "Corporate Businesses",
    desc: "For corporate companies that require high-quality, branded content creation.",
    image: "/* IMAGE_PATH */",
  },
  {
    title: "Real Estate Professionals",
    desc: "For agents & brokers needing high-impact property reels, client stories, and explainers.",
    image: "/* IMAGE_PATH */",
  },
]

export default function Subscription() {
  return (
    <section className="bg-gradient-to-b from-[#7c0e0e] to-[#f22929] py-16 px-4 md:px-10 text-center">
      <h2 className="text-2xl md:text-4xl font-bold text-white mb-12">
        Who’s This <span className="italic underline">Subscription For</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {subscriptionData.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition text-left flex flex-col items-center gap-4"
          >
            {/* 💡 IMAGE placeholder */}
            <div className="w-24 h-24">
              <img
                src={item.image}
                alt={item.title}
                className="object-contain w-full h-full"
              />
            </div>

            <h3 className="font-bold text-black text-lg text-center">{item.title}</h3>
            <p className="text-sm text-gray-700 text-center">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
