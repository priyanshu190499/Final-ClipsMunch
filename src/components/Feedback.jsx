import { useState, useRef, useEffect } from "react";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Avinash Singh",
    role: "Founder @ Luminance",
    message:
      "Great result and the communication with the seller was amazing. Overall great experience",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "CMO @ BrandX",
    message:
      "Their team is super responsive and delivers exactly what we need every time.",
    rating: 5,
  },
  {
    name: "Rahul Jain",
    role: "CEO @ StartupHub",
    message:
      "The best video editing subscription for fast-growing brands. Highly recommended!",
    rating: 5,
  },
  {
    name: "Sneha Kapoor",
    role: "Marketing Lead @ Creatify",
    message:
      "ClipsMunch made our video workflow seamless. Highly creative and always on time.",
    rating: 5,
  },
  {
    name: "Vikram Mehra",
    role: "Head of Content @ MediaNest",
    message:
      "Their editors are top-notch and the support team is fantastic. Great value!",
    rating: 5,
  },
  {
    name: "Ritu Agarwal",
    role: "Founder @ EduSpark",
    message:
      "I love the unlimited revisions and the quick turnaround. My go-to team for video edits.",
    rating: 5,
  },
  {
    name: "Siddharth Rao",
    role: "Brand Manager @ NextGen",
    message:
      "Professional, creative, and reliable. ClipsMunch helped us scale our content fast.",
    rating: 5,
  },
  {
    name: "Megha Joshi",
    role: "Content Strategist @ SocialBuzz",
    message:
      "The best investment for our brand’s video content. Highly recommend their subscription!",
    rating: 5,
  },
];

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);
  const sliderRef = useRef(null);
  let touchStartX = null;

  // Swipe functionality
  const handleTouchStart = (e) => {
    touchStartX = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    if (touchEndX - touchStartX > 50) {
      prevSlide();
    } else if (touchStartX - touchEndX > 50) {
      nextSlide();
    }
    touchStartX = null;
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  // Autoscroll every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-neutral dark:bg-black text-black dark:text-white py-16 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-8">
          <p className="text-red-500 font-semibold">// Our Feedback</p>
          <h2 className="text-2xl md:text-3xl font-bold">
            What <span className="text-red-500">They Say</span> About Us
          </h2>
        </div>

        {/* Main Card Container */}
        <div className="flex flex-col items-center">
          <div className="  flex flex-col items-center lg:flex-row gap-10 w-full justify-center overflow-hidden bg-transparent">
            {/* Fixed Rating Box */}
            <div
              className="bg-white dark:bg-black border-4 border-red-500 rounded-[40px] p-10 flex flex-col items-center shadow-lg justify-center"
              style={{
                flex: "1 1 20%",
                minWidth: "300px",
                maxWidth: "300px",
                maxHeight:"300px",
                minHeight: "300px",
               
              }}
            >
              <h1 className="text-6xl font-extrabold text-black dark:text-white mb-2">4.8</h1>
              <div className="text-red-500 text-2xl flex gap-1 my-2">
                {Array(5)
                  .fill(0)
                  .map((_, idx) => (
                    <FaStar key={idx} />
                  ))}
              </div>
              <p className="font-bold text-center text-lg mb-2">( 120 Review )</p>
              <hr className="my-4 w-full border-red-200" />
              <p className="text-center text-xs text-gray-600 dark:text-gray-400">
                Enhancing top-tier companies with innovative startup and business solutions!"
              </p>
            </div>

            {/* Slider Section */}
            <div
              className="flex-1 flex flex-col items-center justify-center relative bg-transparent"
              ref={sliderRef}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <div className="w-full h-full flex items-center justify-center">
               
                <div className="w-full flex overflow-hidden">
                  {testimonials.map((t, idx) => (
                    <div
                      key={idx}
                      className={`w-full transition-all duration-500 ${
                        idx === current ? "block" : "hidden"
                      }`}
                    >
                      <div className="bg-secondary rounded-[40px] p-6  text-white h-full flex flex-col items-center justify-center shadow-md min-h-[300px] custom-feedmain">
                        <div className="flex flex-row justify-between items-centers h-full ">
                          {/* Name & Role Vertical Section */}
                          <div className=" flex flex-col justify-center items-center w-[80px]  ">
                            <div className="flex flex-col items-center justify-center h-full rotate-[-90deg]">
                              <div>
                                <p className="font-extrabold text-xl md:text-2xl lg:text-3xl text-white text-center whitespace-nowrap">
                                  {t.name}
                                </p>
                                <p className="font-semibold text-sm md:text-base text-white text-center whitespace-nowrap">
                                  {t.role}
                                </p>
                              </div>
                            </div>
                          </div>
                          {/* Divider */}
                          <div className="w-[2px] bg-white mx-6 rounded-full"></div>
                          {/* Message Section */}
                          <div className=" flex flex-col justify-center gap-6">
                            <p className="text-base md:text-lg lg:text-xl font-medium">{t.message}</p>
                            <div className="text-white text-2xl flex gap-1 ">
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
               
              </div>
            </div>
          </div>

          {/* Dots Container */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, idx) => (
              <div
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${
                  current === idx
                    ? "w-10 bg-red-600"
                    : "w-6 bg-gray-400 dark:bg-gray-600"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}