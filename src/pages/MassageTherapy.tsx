import React from 'react';
import { ArrowLeft } from 'lucide-react';

export default function MassageTherapy() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <a 
          href="/#services" 
          className="inline-flex items-center text-[#B47B84] hover:text-[#9D6B73] mb-8"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Services
        </a>
        
        <h1 className="text-4xl font-bold mb-8">Massage Therapy</h1>
        
        <img
          src="/massage-therapy.jpg"
          alt="Massage Therapy Treatment"
          className="w-full h-[400px] object-cover rounded-2xl mb-8"
        />
        
        <div className="prose max-w-none">
          <h2 className="text-2xl font-semibold mb-4">What is Massage Therapy?</h2>
          <p className="text-gray-600 mb-4">
            Massage therapy is a therapeutic practice involving the manual manipulation of the body's soft tissues, including muscles, tendons, ligaments, and fascia. In the context of physical therapy, it serves as an integral modality aimed at enhancing bodily function, facilitating the healing process, and promoting overall relaxation.
          </p>
          <p className="text-gray-600 mb-6">
            Usually integrated into comprehensive physical therapy programs to complement other treatments such as exercise therapy, manual therapy, and modalities like heat or cold therapy. This holistic approach ensures that patients receive personalized care aimed at achieving optimal recovery and functional independence.
          </p>
          
          <h2 className="text-2xl font-semibold mb-4">What to Expect</h2>
          <p className="text-gray-600 mb-4">
            During your session:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-600">
            <li>Initial assessment of problem areas</li>
            <li>Targeted manual therapy techniques</li>
            <li>Treatment duration varies based on needs</li>
            <li>Pressure adjusted to your comfort level</li>
            <li>Integration with other therapy techniques as needed</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc pl-6 mb-6 text-gray-600">
            <li>Reduces muscle tension and stiffness</li>
            <li>Improves circulation</li>
            <li>Promotes relaxation</li>
            <li>Enhances range of motion</li>
            <li>Helps manage chronic pain</li>
            <li>Accelerates recovery from injury</li>
          </ul>
        </div>
      </div>
    </div>
  );
}