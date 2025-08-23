import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import FAQ from "../assets/FAQ-1.jpeg";

const tabs = ["About", "Subscription", "Service", "Process"];

const faqsData = {
  About: [
    {
      question: "What is ClipsMunch?",
      answer: "ClipsMunch is a subscription-based video editing service for creators, brands, and agencies.",
    },
    {
      question: "Who can use ClipsMunch?",
      answer: "Anyone who needs professional video editing, from solo creators to large enterprises.",
    },
    {
      question: "How do I get started?",
      answer: "Simply choose a plan and book a call or sign up directly on our website.",
    },
  ],
  Subscription: [
    {
      question: "What plans do you offer?",
      answer: "We offer Individual, Startup, Enterprise, and Agency plans to suit different needs.",
    },
    {
      question: "Can I upgrade or downgrade my plan?",
      answer: "Yes, you can change your plan anytime from your dashboard.",
    },
    {
      question: "Is there a minimum commitment?",
      answer: "No long-term contracts. You can cancel or change your subscription anytime.",
    },
  ],
  Service: [
    {
      question: "What video formats do you support?",
      answer: "We support all major formats including MP4, MOV, AVI, and more.",
    },
    {
      question: "How fast is the turnaround?",
      answer: "Most edits are delivered within 24-48 hours depending on complexity.",
    },
    {
      question: "Do you offer unlimited revisions?",
      answer: "Yes, all plans include unlimited revisions until you’re satisfied.",
    },
  ],
  Process: [
    {
      question: "How does the editing process work?",
      answer: "Upload your footage, share your requirements, and our editors deliver your video.",
    },
    {
      question: "Can I communicate directly with editors?",
      answer: "Yes, you’ll have a dedicated manager and direct communication channels.",
    },
    {
      question: "How do I provide feedback?",
      answer: "You can leave feedback on the platform or via email/Slack for revisions.",
    },
  ],
};

export default function KnowMoreSection() {
  const [activeTab, setActiveTab] = useState("About");
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = faqsData[activeTab];

  return (
    <section className="bg-neutral dark:bg-black text-black dark:text-white ">
      <div className="mx-auto flex flex-col md:flex-row items-stretch ">
        {/* Left - Text + Tabs + Accordion */}
        <div className="w-full md:w-2/3 ">
          <div className=" pt-16  flex flex-col gap-6  px-8  max-w-3xl mx-auto ">

        <div className="flex flex-col justify-between lg:flex-row ">
          <h2 className="text-2xl font-bold mb-2">Know More!</h2>

          {/* Tabs */}
          <div className="flex flex-wrap gap-3 mb-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`custom-tabs px-6 py-1 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeTab === tab
                    ? "bg-secondary text-white shadow"
                    : "bg-gradient-to-r from-[#7c0e0e] to-[#f22929] text-white dark:bg-neutral-800 dark:text-white"
                }`}
                onClick={() => {
                  setActiveTab(tab);
                  setOpenIndex(null);
                }}
              >
                {tab}
              </button>
            ))}
          </div>
          </div>

          {/* Accordion */}
          <div className="flex flex-col gap-4 mt-4">
            {faqs.map((item, index) => (
              <div
                key={index}
                className="bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-lg overflow-hidden transition-all"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full text-left px-4 py-4 flex justify-between items-center font-semibold"
                >
                  {item.question}
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-4 pb-4 text-sm text-gray-600 dark:text-gray-300">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        </div>

        {/* Right - Image */}
        <div className="w-full md:w-1/3 h-[280px] md:h-[600px] flex items-center justify-center">
          <img
            src={FAQ}
            alt="Know More Visual"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}