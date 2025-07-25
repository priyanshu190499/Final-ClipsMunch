import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import FAQ from "../assets/bg-1.webp"

const tabs = ["About", "Subscription", "Service", "Process"];

const faqs = [
  {
    question: "How to get an extension on a payment?",
    answer:
      "Killing it ladder up / ladder back to the strategy yet groom the backlog. Programmatically golden goose...",
  },
  {
    question: "What are your store hours?",
    answer:
      "We are open from Monday to Friday 9am to 5pm. Saturday open till 2pm.",
  },
  {
    question: "How would I be able to get my money back from a fraudulent claim?",
    answer:
      "You can file a support ticket and our billing team will help you initiate the refund.",
  },
  {
    question: "What kind of warrantee comes with all of your products?",
    answer:
      "All products come with a 6-month warranty unless mentioned otherwise.",
  },
];

export default function KnowMoreSection() {
  const [activeTab, setActiveTab] = useState("About");
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-neutral dark:bg-black text-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch">
        {/* Left - Text + Tabs + Accordion */}
        <div className="w-full md:w-1/2 px-6 py-16 flex flex-col gap-6">
          <h2 className="text-3xl font-bold">Know More!</h2>

          {/* Tabs */}
          <div className="flex flex-wrap gap-4">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeTab === tab
                    ? "bg-secondary text-white shadow"
                    : "bg-neutral-200 text-black"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Accordion */}
          <div className="flex flex-col gap-4 mt-6">
            {faqs.map((item, index) => (
              <div
                key={index}
                className="bg-neutral-100 border border-neutral-200 rounded-lg overflow-hidden transition-all"
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
                  <div className="px-4 pb-4 text-sm text-gray-600">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right - Image */}
        <div className="w-full md:w-1/2 h-[600px] ">
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
