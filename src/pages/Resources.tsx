import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Resources() {
  const resources = [
    {
      title: "Dry Needling",
      description: "Learn about this specialized technique that uses thin needles to target muscle trigger points, providing pain relief and improved mobility.",
      link: "/dry-needling"
    },
    {
      title: "Cupping Therapy",
      description: "Discover how cupping therapy uses specialized cups to create suction on the skin, helping to improve blood flow and reduce muscle tension.",
      link: "/cupping-therapy"
    },
    {
      title: "Electrical Stimulation",
      description: "Understand how electrical stimulation (E-Stim) therapy can help with pain management and muscle rehabilitation.",
      link: "/electrical-stimulation"
    },
    {
      title: "Massage Therapy",
      description: "Explore our therapeutic massage services that help reduce muscle tension, improve circulation, and promote healing.",
      link: "/massage-therapy"
    },
    {
      title: "Running Analysis",
      description: "Learn about our comprehensive running form analysis service that helps improve performance and prevent injuries.",
      link: "/running-analysis"
    },
    {
      title: "Cash Pay & Pricing",
      description: "Understand our cash-pay model and view our transparent pricing structure for all services.",
      link: "/cash-pay"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <Link 
          to="/"
          className="inline-flex items-center text-[#B47B84] hover:text-[#9D6B73] mb-8"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Home
        </Link>
        
        <h1 className="text-4xl font-bold mb-8">Resources</h1>
        
        <div className="grid gap-6">
          {resources.map((resource, index) => (
            <Link
              key={index}
              to={resource.link}
              className="group bg-white p-6 rounded-xl border border-gray-200 hover:border-[#B47B84] transition-colors"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-semibold mb-2 group-hover:text-[#B47B84] transition-colors">
                    {resource.title}
                  </h2>
                  <p className="text-gray-600">{resource.description}</p>
                </div>
                <ArrowRight className="h-5 w-5 text-[#B47B84] group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}