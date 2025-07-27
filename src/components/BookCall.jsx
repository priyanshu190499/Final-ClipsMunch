const reasons = [
  "It’s Free but super valuable if you’re just starting out or stucked in Growth.",
  "Experts advise, suggestions and feedbacks for content lead growth.",
  "Get Complete Clarity on Your Requirements before selecting the plan",
  "Clear idea of results you can achieve with ClipsMunch.",
  "A Deep dive on our case studies & success of our clients.",
  "Special Discounts as well Free Upgrades on Showup.",
]
import bg from "../assets/BAC.jpeg"
export default function WhyBookCall() {
  return (
    <section className="bg-gradient-to-b from-primary to-secondary py-16 px-4 md:px-10 text-white">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">
        Why You Should Book the Call?
      </h2>

      <div className="flex flex-col lg:flex-row gap-10 justify-between max-w-7xl mx-auto">
        {/* Left Reason List */}
        <div className="flex flex-col gap-4 flex-1">
          {reasons.map((text, i) => (
            <div
              key={i}
              className="flex items-center gap-6 bg-gradient-to-r from-[#7c0e0e] to-[#f22929] rounded-xl px-5 py-2 shadow-secondary"
            >
              <div>
               <div className="w-4 h-4 bg-white rounded-full" />
              </div>
             
              <p className="text-xl font-bold">{text}</p>
            </div>
          ))}
        </div>

        {/* Right Image + Buttons */}
                {/* Right Image + Buttons */}
        <div className="px-0 md:px-12 lg:px-24 flex flex-col items-center gap-6 flex-1 w-full">
          {/* Image + Overlay */}
          <div className="w-full rounded-xl overflow-hidden shadow-md relative min-h-[180px] border-6 border-primary">
            <img
              src={bg}
              alt="Book a call"
              className="w-full object-cover min-h-[180px] max-h-[320px]"
              style={{ objectFit: "cover" }}
            />
            <span className="absolute p-4 inset-0 flex items-end justify-center text-white font-bold text-2xl md:text-4xl">
              BOOK A CALL NOW
            </span>
          </div>

          {/* Buttons */}
          <div className="flex flex-col items-center gap-2 w-full">
            <div className="w-full">
              <button className="bg-white text-lg md:text-2xl lg:text-3xl text-black w-full md:w-1/2 py-4 rounded-3xl font-extrabold border-6 border-primary shadow-primary">
                CALL US
              </button>
            </div>

            <div className="w-full flex justify-center">
              <button className="bg-green-500 text-lg md:text-2xl lg:text-3xl text-white w-full py-4 rounded-3xl font-extrabold shadow-primary">
                WHATSAPP NOW
              </button>
            </div>

            <div className="w-full flex justify-end">
              <button className="bg-white text-lg md:text-2xl lg:text-3xl text-black w-full md:w-1/2 py-4 rounded-3xl font-extrabold border-6 border-primary shadow-secondary">
                MAIL US
              </button>
            </div>
          </div>
        </div>



      </div>
    </section>
  )
}
