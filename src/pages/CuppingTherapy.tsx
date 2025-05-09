import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';

export default function CuppingTherapy() {
  const location = useLocation();
  const fromFAQ = location.state?.from === 'faq';

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <Link 
          to={fromFAQ ? "/faq" : "/#services"}
          className="inline-flex items-center text-[#B47B84] hover:text-[#9D6B73] mb-8"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to {fromFAQ ? "FAQ" : "Services"}
        </Link>
        
        <h1 className="text-4xl font-bold mb-8">Cupping Therapy</h1>
        
        <img
          src="/cupping-therapy.jpg"
          alt="Cupping Therapy Treatment"
          className="w-full h-[400px] object-cover rounded-2xl mb-8"
        />
        
        <div className="prose max-w-none">
          <h2 className="text-2xl font-semibold mb-4">What is Cupping Therapy?</h2>
          <p className="text-gray-600 mb-4">
            Cupping therapy is a time-honored healing practice that dates back thousands of years, with roots in ancient Chinese, Middle Eastern, and Egyptian medicine. This technique involves placing specialized cups—commonly made of glass, silicone, or bamboo—on the skin to create a vacuum effect. The suction gently lifts the skin and underlying tissues, promoting increased blood flow, reducing muscle tension, and stimulating the body's natural healing processes.
          </p>
          <p className="text-gray-600 mb-6">
            The suction created by the cups draws blood to the targeted area, enhancing circulation and facilitating the removal of metabolic waste products. This process can help to loosen tight muscles, encourage the flow of lymphatic fluid, and reduce inflammation. By mobilizing blood and lymph, cupping supports the body's detoxification pathways and promotes tissue repair.
          </p>
          
          <h2 className="text-2xl font-semibold mb-4">What to Expect</h2>
          <p className="text-gray-600 mb-4">
            During your session:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-600">
            <li>Assessment of areas requiring treatment</li>
            <li>Application of cups to targeted areas</li>
            <li>Cups may be left in place or moved along the skin</li>
            <li>Treatment typically lasts 10-15 minutes</li>
            <li>Temporary skin discoloration is normal and fades within days</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc pl-6 mb-6 text-gray-600">
            <li>Reduces muscle tension and pain</li>
            <li>Promotes blood circulation</li>
            <li>Aids in recovery from physical exertion</li>
            <li>Helps reduce inflammation</li>
            <li>Can improve range of motion</li>
            <li>May help with chronic pain conditions</li>
          </ul>

          <div className="mt-12 flex flex-col items-center space-y-4">
            <a
              href="sms:8015109888?body=Hi, I'm interested in scheduling a cupping therapy appointment with Everwell PT."
              className="inline-block px-8 py-3.5 bg-[#B47B84] text-white text-center rounded-full hover:bg-[#9D6B73] transition shadow-sm"
            >
              Schedule Cupping Session
            </a>
            <a
              href="/forms/cupping-waiver.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3.5 border-2 border-[#B47B84] text-[#B47B84] text-center rounded-full hover:bg-[#B47B84] hover:text-white transition shadow-sm"
            >
              View Waiver Form
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}