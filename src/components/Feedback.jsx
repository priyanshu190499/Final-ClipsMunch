import { useState } from "react"
import { FaStar } from "react-icons/fa"

const testimonials = [
  {
    name: "Avinash Singh",
    role: "Founder @ Luminance",
    message:
      "Fantastic experience again! Always quick, high-quality, and extremely professional.",
    rating: 5,
  },
  {
    name: "Avinash Singh",
    role: "Founder @ Luminance",
    message:
      "Fantastic experience again! Always quick, high-quality, and extremely professional.",
    rating: 5,
  },
  {
    name: "Avinash Singh",
    role: "Founder @ Luminance",
    message:
      "Fantastic experience again! Always quick, high-quality, and extremely professional.",
    rating: 5,
  },
  // Add more testimonials here
]

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0)

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    )
  }

  return (
    <section className="bg-neutral dark:bg-black text-black dark:text-white py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-8">
          <p className="text-red-500 font-semibold">// Our Feedback</p>
          <h2 className="text-2xl md:text-3xl font-bold">
            What <span className="text-red-500">They Say</span> About Us
          </h2>
        </div>

        {/* Main content */}
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Rating Box (hidden on md and smaller) */}
          <div className="bg-white dark:bg-black border-2 border-red-500 rounded-xl p-8 w-full max-w-sm hidden lg:flex flex-col items-center shadow-lg">
            <h1 className="text-5xl font-bold text-black dark:text-white">4.8</h1>
            <div className="text-red-500 text-xl flex gap-1 my-2">
              {Array(5)
                .fill(0)
                .map((_, idx) => (
                  <FaStar key={idx} />
                ))}
            </div>
            <p className="font-bold text-center">(120 Review)</p>
            <hr className="my-4 w-full border-gray-300 dark:border-gray-700" />
            <p className="text-center text-sm text-gray-600 dark:text-gray-400">
              Enhancing top-tier companies with innovative startup and business solutions!
            </p>
          </div>

          {/* Testimonial Slider */}
          <div className="flex-1 overflow-hidden w-full">
            <div className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${current * 100}%)`,
                width: `${testimonials.length * 100}%`,
              }}
            >
              {testimonials.map((t, idx) => (
                <div
                  key={idx}
                  className="w-full lg:w-1/3 flex-shrink-0 px-2"
                >
                  <div className="bg-red-600 rounded-2xl p-6 text-white h-full flex flex-col justify-between shadow-md">
                    <div className="flex flex-col lg:flex-row gap-4">
                      <div className="w-full lg:w-1/4 font-bold text-left">
                        <p>{t.name}</p>
                        <p className="text-sm font-normal">{t.role}</p>
                      </div>
                      <div className="w-full lg:w-3/4 border-l pl-4 border-white text-sm">
                        <p>{t.message}</p>
                        <div className="text-white text-lg flex gap-1 mt-2">
                          {Array(t.rating)
                            .fill(0)
                            .map((_, i) => (
                              <FaStar key={i} />
                            ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-3 mt-6">
              {testimonials.map((_, idx) => (
                <div
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${
                    current === idx
                      ? "w-6 bg-red-600"
                      : "w-2 bg-gray-400 dark:bg-gray-600"
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
