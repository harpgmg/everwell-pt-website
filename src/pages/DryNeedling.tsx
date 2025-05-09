import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';

export default function DryNeedling() {
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
        
        <h1 className="text-4xl font-bold mb-8">Dry Needling Therapy</h1>
        
        <img
          src="/dry-needling.jpg"
          alt="Dry Needling Treatment"
          className="w-full h-[400px] object-cover rounded-2xl mb-8"
        />
        
        <div className="prose max-w-none">
          <h2 className="text-2xl font-semibold mb-4">What is Dry Needling?</h2>
          <p className="text-gray-600 mb-4">
            Dry Needling is a therapeutic technique employed by physical therapists to alleviate musculoskeletal pain and dysfunction. It involves the insertion of thin, sterile, monofilament needles into specific points within the muscles, known as trigger points, without the injection of any substances. The primary goal is to release muscle tension, improve blood flow, and promote the body's natural healing processes. This technique is often utilized to address conditions such as muscle tightness, spasms, and pain patterns, thereby enhancing overall functional movement and reducing discomfort.
          </p>
          <p className="text-gray-600 mb-4">
            To enhance the effectiveness of dry needling, electrical stimulation (e-stim) can be applied. In this combined approach, mild electrical currents are delivered through the inserted needles directly into the targeted muscle tissue. This integration amplifies the therapeutic effects by promoting deeper muscle relaxation, increasing local blood circulation, and facilitating the release of endorphins—natural pain-relieving chemicals in the body. The addition of e-stim can also help in reducing muscle spasms and improving range of motion, leading to more sustained relief and accelerated recovery.
          </p>
          <p className="text-gray-600 mb-6">
            By combining dry needling with electrical stimulation, patients may experience enhanced outcomes in pain reduction, muscle function, and overall mobility. This integrative approach allows for a more comprehensive treatment strategy, addressing both the mechanical and neurological aspects of musculoskeletal conditions.
          </p>
          
          <h2 className="text-2xl font-semibold mb-4">What to Expect</h2>
          <p className="text-gray-600 mb-4">
            During your session:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-600">
            <li>Initial assessment to identify problem areas</li>
            <li>Careful insertion of sterile needles into specific trigger points</li>
            <li>Treatment typically lasts 15-30 minutes</li>
            <li>You may experience a slight pinch or muscle twitch</li>
            <li>Post-treatment soreness is normal and usually resolves within 24-48 hours</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc pl-6 mb-6 text-gray-600">
            <li>Releases muscle tension and trigger points</li>
            <li>Improves blood flow and promotes healing</li>
            <li>Reduces pain and inflammation</li>
            <li>Increases range of motion</li>
            <li>Accelerates recovery from injury</li>
            <li>Can provide immediate pain relief</li>
          </ul>

          <div className="mt-12 flex flex-col items-center space-y-4">
            <a
              href="sms:8015109888?body=Hi, I'm interested in scheduling a dry needling appointment with Everwell PT."
              className="inline-block px-8 py-3.5 bg-[#B47B84] text-white text-center rounded-full hover:bg-[#9D6B73] transition shadow-sm"
            >
              Schedule Dry Needling Session
            </a>
            <a
              href="/forms/dry-needling-waiver.pdf"
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