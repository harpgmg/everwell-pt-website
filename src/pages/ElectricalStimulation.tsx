import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ElectricalStimulation() {
  const navigate = useNavigate();

  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <a 
          href="/#services"
          onClick={handleBack}
          className="inline-flex items-center text-[#B47B84] hover:text-[#9D6B73] mb-8"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Services
        </a>
        
        <h1 className="text-4xl font-bold mb-8">Electrical Stimulation (E-Stim)</h1>
        
        <img
          src="/electric-stimulation.jpg"
          alt="Electrical Stimulation Treatment"
          className="w-full h-[400px] object-cover rounded-2xl mb-8"
        />
        
        <div className="prose max-w-none">
          <h2 className="text-2xl font-semibold mb-4">What is Electrical Stimulation?</h2>
          <p className="text-gray-600 mb-4">
            Electrical Stimulation (E-Stim) is a therapeutic modality widely utilized in physical therapy to address various musculoskeletal and neurological conditions. By delivering controlled electrical impulses through the skin to targeted muscles and nerves, E-Stim aims to alleviate pain, enhance muscle strength, and promote tissue healing.
          </p>
          <p className="text-gray-600 mb-6">
            E-Stim involves placing electrodes on the skin over specific muscle groups or nerve pathways. These electrodes transmit electrical currents that mimic the body's natural neural signals, prompting muscle contractions or modulating nerve activity. The intensity, frequency, and duration of these impulses can be adjusted based on therapeutic goals and patient tolerance.
          </p>
          
          <h2 className="text-2xl font-semibold mb-4">What to Expect</h2>
          <p className="text-gray-600 mb-4">
            During your session:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-600">
            <li>Placement of electrodes on targeted areas</li>
            <li>Gentle electrical current adjusted to comfort level</li>
            <li>Treatment typically lasts 10-20 minutes</li>
            <li>You may feel a tingling or pulsing sensation</li>
            <li>No pain should be experienced during treatment</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc pl-6 mb-6 text-gray-600">
            <li>Pain relief and management</li>
            <li>Muscle re-education</li>
            <li>Prevention of muscle atrophy</li>
            <li>Increased local blood circulation</li>
            <li>Reduced muscle spasms</li>
            <li>Enhanced tissue healing</li>
          </ul>
        </div>
      </div>
    </div>
  );
}