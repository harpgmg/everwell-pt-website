import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useLocation, useNavigate, Link } from 'react-router-dom';

export default function RunningAnalysis() {
  const location = useLocation();
  const navigate = useNavigate();
  const fromFAQ = location.state?.from === 'faq';

  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <a 
          href={fromFAQ ? "/faq" : "/#services"}
          onClick={handleBack}
          className="inline-flex items-center text-[#B47B84] hover:text-[#9D6B73] mb-8"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to {fromFAQ ? "FAQ" : "Services"}
        </a>
        
        <h1 className="text-4xl font-bold mb-8">Running Analysis</h1>
        
        <img
          src="/running-analysis.jpg"
          alt="Running Analysis Session"
          className="w-full h-[400px] object-cover rounded-2xl mb-8"
        />
        
        <div className="prose max-w-none">
          <h2 className="text-2xl font-semibold mb-4">What is Running Analysis?</h2>
          <p className="text-gray-600 mb-4">
            Running analysis is a comprehensive evaluation of your running form and mechanics using advanced observational techniques. This detailed assessment helps identify movement patterns, biomechanical inefficiencies, and potential injury risks that may be affecting your running performance or causing discomfort.
          </p>
          <p className="text-gray-600 mb-6">
            During the analysis, we examine multiple aspects of your running gait, including foot strike patterns, joint alignment, muscle activation, and overall body mechanics. This information is used to develop targeted interventions and recommendations to improve your running efficiency and reduce injury risk.
          </p>
          
          <h2 className="text-2xl font-semibold mb-4">What to Expect</h2>
          <p className="text-gray-600 mb-4">
            During your session:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-600">
            <li>Initial discussion of running history and goals</li>
            <li>Assessment of running shoes and gear</li>
            <li>Static postural analysis</li>
            <li>Dynamic movement screening</li>
            <li>Running observation and video analysis</li>
            <li>Detailed feedback and recommendations</li>
            <li>Customized exercise program</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc pl-6 mb-6 text-gray-600">
            <li>Identify and correct form issues</li>
            <li>Improve running efficiency</li>
            <li>Prevent common running injuries</li>
            <li>Enhance performance</li>
            <li>Personalized training recommendations</li>
            <li>Evidence-based technique modifications</li>
          </ul>

          <div className="mt-12 flex flex-col items-center space-y-4">
            <a
              href="sms:8015109888?body=Hi, I'm interested in scheduling a running analysis with Everwell PT."
              className="inline-block px-8 py-3.5 bg-[#B47B84] text-white text-center rounded-full hover:bg-[#9D6B73] transition shadow-sm"
            >
              Schedule Running Analysis
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}