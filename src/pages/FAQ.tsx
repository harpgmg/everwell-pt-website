import React from 'react';
import { ArrowLeft, Plus } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export default function FAQ() {
  const [openItems, setOpenItems] = useState<Record<string, number | null>>({});

  const faqs: FAQItem[] = [
    {
      category: "General",
      question: "What should I wear to my appointment?",
      answer: "Wear comfortable, loose-fitting clothing that allows easy access to the area being treated. For example, shorts for knee treatment or a tank top for shoulder work. We prioritize your comfort and modesty throughout treatment."
    },
    {
      category: "General",
      question: "How long are the sessions?",
      answer: "Initial evaluations are typically 60-90 minutes, while follow-up treatment sessions are 45-60 minutes. This allows adequate time for thorough treatment and ensures you receive the attention and care you need."
    },
    {
      category: "General",
      question: "What should I expect during my first visit?",
      answer: "Your first visit includes a comprehensive evaluation of your condition, medical history review, and physical assessment. We'll discuss your goals, develop a personalized treatment plan, and begin initial treatment. Please arrive 10-15 minutes early to complete any necessary paperwork."
    },
    {
      category: "General",
      question: "Do you offer virtual sessions?",
      answer: "Yes, we offer telehealth services for appropriate cases. Virtual sessions are great for follow-ups, exercise progression, and quick consultations. They're particularly useful for patients with busy schedules or those who live far from our clinic."
    },
    {
      category: "Treatments",
      question: "What conditions do you treat?",
      answer: "We specialize in a wide range of musculoskeletal and neurological conditions, including but not limited to back and neck pain, sports injuries, post-surgical rehabilitation, arthritis, and balance disorders."
    },
    {
      category: "Treatments",
      question: "How many sessions will I need?",
      answer: "The number of sessions varies based on individual needs and treatment goals. Your therapist will discuss an estimated timeline during your initial evaluation."
    },
    {
      category: "Treatments",
      question: "What is Dry Needling?",
      answer: "Dry Needling is a specialized technique that uses thin needles to target muscle trigger points, providing pain relief and improved mobility. Visit our dedicated dry needling page to learn more about this treatment and its benefits: " + 
      "\n\n" +
      "→ Learn more about Dry Needling"
    },
    {
      category: "Treatments",
      question: "What is Cupping Therapy?",
      answer: "Cupping therapy is a therapeutic technique that uses specialized cups to create suction on the skin, helping to improve blood flow, reduce muscle tension, and promote healing. Visit our dedicated cupping therapy page to learn more about this treatment and its benefits: " +
      "\n\n" +
      "→ Learn more about Cupping Therapy"
    },
    {
      category: "Treatments",
      question: "What is a Running Analysis?",
      answer: "A Running Analysis is a comprehensive evaluation of your running form and mechanics to identify areas for improvement and prevent injuries. Our detailed assessment helps optimize your running technique and performance. Visit our dedicated running analysis page to learn more about this service: " +
      "\n\n" +
      "→ Learn more about Running Analysis"
    },
    {
      category: "Payments",
      question: "Why are you a cash-pay practice?",
      answer: "As a cash-pay practice, we can focus entirely on providing the best possible care without insurance restrictions. This means more one-on-one time, flexibility in treatment approaches, and better overall outcomes. We believe this model allows us to deliver higher quality, personalized care."
    },
    {
      category: "Payments",
      question: "What are your rates?",
      answer: "We offer transparent pricing for all our services, including evaluations, follow-up sessions, and specialized treatments. Visit our Cash Pay page for detailed information about our rates and payment options: " +
      "\n\n" +
      "→ View our rates and payment information"
    },
    {
      category: "Insurance",
      question: "What is a superbill?",
      answer: "A superbill is a detailed receipt that includes all the information insurance companies need for reimbursement, including diagnosis codes, treatment codes, and provider information. We provide superbills upon request for you to submit to your insurance for potential out-of-network reimbursement."
    },
    {
      category: "Insurance",
      question: "How do I submit a superbill to my insurance?",
      answer: "1. Request a superbill from us after your session\n2. Contact your insurance provider about out-of-network benefits\n3. Submit the superbill through your insurance's claims portal or by mail\n4. Keep copies of all submitted documentation\n\nReimbursement amounts vary by insurance plan and provider."
    },
    {
      category: "Insurance",
      question: "Will my insurance reimburse me?",
      answer: "Reimbursement depends on your specific insurance plan and out-of-network benefits. We recommend contacting your insurance provider before treatment to understand your coverage. Many PPO plans offer some out-of-network coverage, but amounts vary. We're happy to provide guidance on asking the right questions."
    },
    {
      category: "Payments",
      question: "What payment methods do you accept?",
      answer: "We accept cash, credit cards (Visa, MasterCard, American Express, Discover), HSA/FSA cards, Venmo, and Zelle."
    }
  ];

  const categories = Array.from(new Set(faqs.map(faq => faq.category)));

  const toggleItem = (category: string, index: number) => {
    setOpenItems(prev => ({
      ...prev,
      [category]: prev[category] === index ? null : index
    }));
  };

  const renderAnswer = (answer: string, question: string) => {
    if (question === "What is Dry Needling?") {
      const [description, link] = answer.split("→");
      return (
        <>
          <p className="text-gray-600 whitespace-pre-line">{description}</p>
          <Link 
            to="/dry-needling"
            state={{ from: 'faq' }}
            className="inline-block mt-2 text-[#B47B84] hover:text-[#9D6B73] font-medium"
          >
            → Learn more about Dry Needling
          </Link>
        </>
      );
    }
    if (question === "What is Cupping Therapy?") {
      const [description, link] = answer.split("→");
      return (
        <>
          <p className="text-gray-600 whitespace-pre-line">{description}</p>
          <Link 
            to="/cupping-therapy"
            state={{ from: 'faq' }}
            className="inline-block mt-2 text-[#B47B84] hover:text-[#9D6B73] font-medium"
          >
            → Learn more about Cupping Therapy
          </Link>
        </>
      );
    }
    if (question === "What is a Running Analysis?") {
      const [description, link] = answer.split("→");
      return (
        <>
          <p className="text-gray-600 whitespace-pre-line">{description}</p>
          <Link 
            to="/running-analysis"
            state={{ from: 'faq' }}
            className="inline-block mt-2 text-[#B47B84] hover:text-[#9D6B73] font-medium"
          >
            → Learn more about Running Analysis
          </Link>
        </>
      );
    }
    if (question === "What are your rates?") {
      const [description, link] = answer.split("→");
      return (
        <>
          <p className="text-gray-600 whitespace-pre-line">{description}</p>
          <Link 
            to="/cash-pay"
            state={{ from: 'faq' }}
            className="inline-block mt-2 text-[#B47B84] hover:text-[#9D6B73] font-medium"
          >
            → View our rates and payment information
          </Link>
        </>
      );
    }
    return <p className="text-gray-600 whitespace-pre-line">{answer}</p>;
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <a 
          href="/" 
          className="inline-flex items-center text-[#B47B84] hover:text-[#9D6B73] mb-8"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Home
        </a>
        
        <h1 className="text-4xl font-bold mb-8">Frequently Asked Questions</h1>
        
        <div className="space-y-8">
          {categories.map((category) => (
            <div key={category}>
              <h2 className="text-2xl font-semibold mb-4 text-[#B47B84]">{category}</h2>
              <div className="space-y-4">
                {faqs
                  .filter(faq => faq.category === category)
                  .map((faq, index) => (
                    <div 
                      key={`${category}-${index}`}
                      className="border border-gray-200 rounded-lg overflow-hidden"
                    >
                      <button
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50"
                        onClick={() => toggleItem(category, index)}
                      >
                        <span className="font-medium text-gray-900">{faq.question}</span>
                        <Plus 
                          className={`h-5 w-5 text-[#B47B84] transition-transform ${
                            openItems[category] === index ? 'rotate-45' : ''
                          }`}
                        />
                      </button>
                      {openItems[category] === index && (
                        <div className="px-6 py-4 bg-gray-50">
                          {renderAnswer(faq.answer, faq.question)}
                        </div>
                      )}
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">Still have questions? We're here to help!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="sms:8015109888"
              className="inline-block px-8 py-3.5 bg-[#B47B84] text-white text-center rounded-full hover:bg-[#9D6B73] transition shadow-sm"
            >
              Text Us
            </a>
            <a
              href="mailto:jen@everwellpt.com"
              className="inline-block px-8 py-3.5 border-2 border-[#B47B84] text-[#B47B84] text-center rounded-full hover:bg-[#B47B84] hover:text-white transition shadow-sm"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}