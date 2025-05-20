import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Bio() {
  const navigate = useNavigate();

  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <a 
          href="/#about"
          onClick={handleBack}
          className="inline-flex items-center text-[#B47B84] hover:text-[#9D6B73] mb-8"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to About
        </a>
        
        <h1 className="text-4xl font-bold mb-8">About Jen</h1>
        
        <img
          src="/headshot.jpg"
          alt="Jen - Physical Therapist"
          className="w-full h-[400px] object-cover rounded-2xl mb-8"
        />
        
        <div className="prose max-w-none">
          <h2 className="text-2xl font-semibold mb-4">My Journey in Physical Therapy</h2>
          <p className="text-gray-600 mb-6">
            My passion for physical therapy began during my own journey of recovery from sports injuries as a young athlete. This personal experience shaped my understanding of both the physical and emotional aspects of rehabilitation, driving my commitment to provide compassionate, personalized care to every patient I serve.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Education & Certifications</h2>
          <ul className="list-disc pl-6 mb-6 text-gray-600">
            <li>Doctor of Physical Therapy (DPT)</li>
            <li>Certified in Dry Needling</li>
            <li>Advanced Training in Manual Therapy</li>
            <li>Sports Rehabilitation Specialist</li>
            <li>Certified Running Analysis Expert</li>
            <li>Therapeutic Cupping Practitioner</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">My Approach to Care</h2>
          <p className="text-gray-600 mb-6">
            I believe in treating the whole person, not just the symptoms. My approach combines evidence-based practices with individualized attention to help you achieve your goals. Whether you're recovering from an injury, managing chronic pain, or working to improve your athletic performance, I'm committed to providing the highest quality care in a comfortable, encouraging environment.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Why I Love What I Do</h2>
          <p className="text-gray-600 mb-6">
            There's nothing more rewarding than helping people regain their mobility, confidence, and quality of life. Every patient's journey is unique, and I'm privileged to be part of that journey, celebrating each milestone and success along the way. The relationships I build with my patients and the joy of seeing them return to the activities they love make every day meaningful.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Beyond the Clinic</h2>
          <p className="text-gray-600 mb-6">
            When I'm not treating patients, you'll find me staying active in the beautiful Utah outdoors. I enjoy working out, swimming, boating, and spending time with my family. I'm also committed to continuous learning and regularly attend professional development courses to bring the latest therapeutic techniques to my practice.
          </p>

          <div className="mt-12 flex flex-col items-center space-y-4">
            <a
              href="sms:8015109888?body=Hi Jen, I'd like to learn more about your physical therapy services."
              className="inline-block px-8 py-3.5 bg-[#B47B84] text-white text-center rounded-full hover:bg-[#9D6B73] transition shadow-sm"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}