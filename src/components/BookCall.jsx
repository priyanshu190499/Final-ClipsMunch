const reasons = [
  "It’s Free but super valuable if you’re just starting out or stucked in Growth.",
  "Experts advise, suggestions and feedbacks for content lead growth.",
  "Get Complete Clarity on Your Requirements before selecting the plan",
  "Clear idea of results you can achieve with ClipsMunch.",
  "A Deep dive on our case studies & success of our clients.",
  "Special Discounts as well Free Upgrades on Showup.",
]
import bg from "../assets/bg-1.webp"
export default function WhyBookCall() {
  return (
    <section className="bg-gradient-to-b from-[#7c0e0e] to-[#f22929] py-16 px-4 md:px-10 text-white">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">
        Why You Should Book the Call?
      </h2>

      <div className="flex flex-col lg:flex-row gap-10 justify-between max-w-7xl mx-auto">
        {/* Left Reason List */}
        <div className="flex flex-col gap-4 flex-1">
          {reasons.map((text, i) => (
            <div
              key={i}
              className="flex items-start gap-4 bg-gradient-to-r from-[#8e0e0e] to-[#c82929] rounded-xl px-5 py-4 border border-white"
            >
              <div className="w-4 h-4 mt-1 bg-white rounded-full" />
              <p className="text-sm">{text}</p>
            </div>
          ))}
        </div>

        {/* Right Image + Buttons */}
        <div className="flex flex-col items-center gap-6 flex-1">
          {/* 📷 Replace src with actual asset path */}
          <div className="w-full max-w-sm rounded-xl overflow-hidden shadow-md relative">
            <img
              src={bg}
              alt="Book a call"
              className="w-full object-cover"
            />
            <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg">
              BOOK A CALL NOW
            </span>
          </div>

          {/* Buttons */}
          <div className="flex flex-col items-center gap-4 w-full">
            <button className="bg-white text-black px-6 py-3 rounded-full font-semibold w-3/4 border border-black">
              CALL US
            </button>
            <button className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold w-3/4 shadow-lg">
              WHATSAPP NOW
            </button>
            <button className="bg-white text-black px-6 py-3 rounded-full font-semibold w-3/4 border border-black">
              MAIL US
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
