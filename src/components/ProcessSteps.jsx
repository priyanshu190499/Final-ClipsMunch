import { useEffect, useRef, useState } from "react"

const steps = [
  {
    title: "Upload Footage/Clips",
    desc:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.",
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
  const stepsContainerRef = useRef(null)

  // Handle scroll to update activeStep
  useEffect(() => {
    const container = stepsContainerRef.current
    if (!container) return
    const handleScroll = () => {
      const children = Array.from(container.children)
      let closestIdx = 0
      let minDist = Infinity
      const containerRect = container.getBoundingClientRect()
      children.forEach((child, idx) => {
        const rect = child.getBoundingClientRect()
        const dist = Math.abs((rect.top + rect.bottom) / 2 - (containerRect.top + containerRect.bottom) / 2)
        if (dist < minDist) {
          minDist = dist
          closestIdx = idx
        }
      })
      setActiveStep(closestIdx)
    }
    container.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => {
      container.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <section className="bg-white dark:bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-4 relative items-stretch">
        {/* Left Side (Fixed on desktop, full width on mobile) */}
        <div className="lg:w-[32%] w-full lg:sticky lg:left-0 lg:top-24 flex flex-col justify-center lg:h-[400px] z-10  mb-8 lg:mb-0">
          <p className="text-red-500 font-semibold mb-2">// Our Process</p>
          <h2 className="text-black dark:text-white text-4xl lg:text-5xl font-extrabold leading-tight mb-2">
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
              className="z-10 w-16 h-16 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-3xl  shadow-lg transition-all duration-300"
              style={{ marginTop: '0px' }}
            >
              {activeStep + 1}
            </div>
          </div>
        </div>

        {/* Right Scrollable Steps: Only one centered at a time, scrollable */}
        <div
          ref={stepsContainerRef}
          id="steps-container"
          className="lg:w-[68%] w-full flex flex-col gap-0 max-h-[500px] min-h-[300px] overflow-y-auto px-2 scroll-smooth scrollbar-hide snap-y snap-mandatory"
        >
          {steps.map((step, idx) => (
            <div
              key={idx}
              data-index={idx}
              className="flex flex-col md:flex-col lg:flex-row items-center gap-8  min-h-[420px] snap-center justify-center"
              style={{ scrollSnapAlign: 'center' }}
            >
              {/* Step Image/Color Block */}
              <div className={`w-[90vw] sm:w-[420px] h-[220px] sm:h-[320px] lg:w-[320px] lg:h-[320px] ${step.color} rounded-lg flex-shrink-0 mb-6 lg:mb-0`} />
              {/* Step Content */}
              <div className="flex flex-col justify-center items-start max-w-xl px-2">
                <h3 className="text-black dark:text-white text-2xl sm:text-3xl font-extrabold mb-4">{step.title}</h3>
                <p className="text-black dark:text-white text-base sm:text-lg ">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}