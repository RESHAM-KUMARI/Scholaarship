"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Who can participate?",
    answer: "Any eligible player who completes registration can participate, subject to platform rules and terms.",
  },
  {
    question: "How do I register?",
    answer: "You can register using the Join Now button and complete the required details on the registration form.",
  },
  {
    question: "How will winners be announced?",
    answer: "Winners will be announced through the platform or official communication channels after tournament completion.",
  },
  {
    question: "Can I track my progress?",
    answer: "Yes, players can follow tournament updates and match progress through the platform dashboard.",
  },
  {
    question: "Is there a support team?",
    answer: "Yes, support is available for player queries, registration help, and tournament guidance.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about the tournament
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="mb-4 rounded-lg overflow-hidden bg-white shadow-md hover:shadow-lg transition-shadow"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-lg text-gray-900">
                  {faq.question}
                </span>
                <ChevronDown
                  className={cn(
                    "w-5 h-5 text-yellow-500 transition-transform duration-300",
                    openIndex === index && "rotate-180"
                  )}
                />
              </button>
              
              <div
                className={cn(
                  "px-6 overflow-hidden transition-all duration-300 ease-in-out",
                  openIndex === index ? "max-h-40 pb-4" : "max-h-0"
                )}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}