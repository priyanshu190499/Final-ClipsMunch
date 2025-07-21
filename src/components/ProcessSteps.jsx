import { useEffect, useRef, useState } from "react"

const steps = [
  {
    title: "Upload Footage/Clips",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    color: "bg-red-600",
  },
  {
    title: "Receive Custom Edits",
    desc:
      "We turn raw content into social-ready shortform content tailored to your brand.",
    color: "bg-primary",
  },
  {
    title: "Review & Feedback",
    desc:
      "You’ll get revisions till you're 100% satisfied. Total creative control at every step.",
    color: "bg-secondary",
  },
  {
    title: "Publish & Grow",
    desc:
      "Export-ready formats to post instantly across platforms and maximize reach.",
    color: "bg-red-400",
  },
]

export default function ProcessSteps() {
  const [activeStep, setActiveStep] = useState(0)
  const stepRefs = useRef([])

  useEffect(() => {
    // Highlight tracker as step comes to center
    const container = document.getElementById('steps-container');
    if (!container) return;
    const handleScroll = () => {
      const children = Array.from(container.children);
      let closestIdx = 0;
      let minDist = Infinity;
      const containerRect = container.getBoundingClientRect();
      children.forEach((child, idx) => {
        const rect = child.getBoundingClientRect();
        // Find the child whose center is closest to the container's center
        const dist = Math.abs((rect.top + rect.bottom) / 2 - (containerRect.top + containerRect.bottom) / 2);
        if (dist < minDist) {
          minDist = dist;
          closestIdx = idx;
        }
      });
      setActiveStep(closestIdx);
    };
    container.addEventListener('scroll', handleScroll, { passive: true });
    // Initial highlight
    handleScroll();
    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, [])

  return (
    <section className="bg-neutral dark:bg-black text-black dark:text-white py-20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-0 md:gap-0 relative">
        {/* Left Side (Fixed on desktop) */}
        <div className="md:w-[32%] w-full md:sticky md:left-0 md:top-24 flex flex-col justify-center md:h-[400px] z-10 bg-neutral dark:bg-black">
          <p className="text-red-500 font-semibold mb-2">// Our Process</p>
          <h2 className="text-2xl md:text-3xl font-bold leading-tight">
            How <span className="text-red-600">ClipsMunch</span> Works?
          </h2>
        </div>

        {/* Middle Tracker (only one number, vertical line, hidden on md and below) */}
        <div className="hidden lg:flex flex-col items-center justify-center w-[60px] relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 h-full w-[2px] bg-red-500 -translate-x-1/2" />
          {/* Step Number */}
          <div className="relative flex flex-col items-center justify-center h-full">
            <div
              className="z-10 w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-lg border-4 border-white dark:border-black shadow-lg transition-all duration-300"
              style={{ marginTop: '0px' }}
            >
              {activeStep + 1}
            </div>
          </div>
        </div>

        {/* Right Scrollable Steps: Only one centered at a time, scrollable */}
        <div
          id="steps-container"
          className="md:w-[68%] w-full flex flex-col gap-24 max-h-[500px] min-h-[300px] overflow-y-auto px-2 scroll-smooth scrollbar-hide snap-y snap-mandatory"
        >
          {steps.map((step, idx) => (
            <div
              key={idx}
              ref={(el) => (stepRefs.current[idx] = el)}
              data-index={idx}
              className="flex flex-row items-center gap-8 min-h-[200px] scroll-mt-[40vh] snap-center"
              style={{ scrollSnapAlign: 'center' }}
            >
              {/* Step Image/Color Block */}
              <div className={`w-[150px] h-[150px] ${step.color} rounded flex-shrink-0`} />
              {/* Step Content */}
              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 max-w-lg">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
