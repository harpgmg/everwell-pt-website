import React from 'react';
import { ArrowLeft, CheckCircle, AlertCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function CashPay() {
  const navigate = useNavigate();

  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <a 
          href="/"
          onClick={handleBack}
          className="inline-flex items-center text-[#B47B84] hover:text-[#9D6B73] mb-8"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Home
        </a>
        
        <h1 className="text-4xl font-bold mb-8">Cash-Pay</h1>
        
        <div className="prose max-w-none">
          <h2 className="text-2xl font-semibold mb-4">What is Cash-Pay Physical Therapy?</h2>
          <p className="text-gray-600 mb-6">
            Cash-pay physical therapy is a direct payment model where patients pay for services directly rather than going through insurance. This model eliminates the middleman, allowing for a more personalized and unrestricted approach to your care. At Everwell PT, we believe this approach enables us to provide the highest quality of care focused entirely on your needs and goals.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Benefits of Cash-Pay Physical Therapy</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl border border-[#B47B84]/20">
              <h3 className="text-xl font-semibold mb-4 text-[#B47B84]">For Patients</h3>
              <ul className="space-y-3">
                {[
                  'Longer, one-on-one sessions',
                  'No insurance restrictions or limitations',
                  'Direct access to your therapist',
                  'Flexible scheduling options',
                  'Personalized treatment plans',
                  'No referral requirements',
                  'Transparent pricing'
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#B47B84] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl border border-[#B47B84]/20">
              <h3 className="text-xl font-semibold mb-4 text-[#B47B84]">Insurance Limitations</h3>
              <ul className="space-y-3">
                {[
                  'Visit restrictions and caps',
                  'Required physician referrals',
                  'Limited treatment time',
                  'Restricted treatment options',
                  'Multiple patients per therapist',
                  'Complex paperwork and approvals',
                  'Unexpected costs and denials'
                ].map((limitation, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <AlertCircle className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{limitation}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mb-4">Using Your Insurance (Out-of-Network Benefits)</h2>
          <p className="text-gray-600 mb-4">
            While we don't bill insurance directly, many of our patients successfully use their out-of-network benefits for reimbursement. We provide detailed superbills (medical receipts) that you can submit to your insurance company for potential reimbursement.
          </p>
          
          <div className="bg-[#B47B84]/5 p-6 rounded-xl mb-8">
            <h3 className="text-xl font-semibold mb-4">How to Use Your Out-of-Network Benefits</h3>
            <ol className="list-decimal pl-6 space-y-3 text-gray-600">
              <li>Contact your insurance provider to understand your out-of-network physical therapy benefits</li>
              <li>Request a superbill from us after each session</li>
              <li>Submit the superbill to your insurance company</li>
              <li>Receive reimbursement based on your plan's out-of-network coverage</li>
            </ol>
          </div>

          <h2 className="text-2xl font-semibold mb-4">Our Pricing</h2>
          <div className="space-y-6 mb-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl border border-[#B47B84]/20">
                <h3 className="text-xl font-semibold mb-2">Initial Evaluation</h3>
                <p className="text-3xl font-bold text-[#B47B84] mb-2">$150</p>
                <p className="text-gray-600">60-90 minute comprehensive assessment</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-[#B47B84]/20">
                <h3 className="text-xl font-semibold mb-2">Follow-up Sessions</h3>
                <p className="text-3xl font-bold text-[#B47B84] mb-2">$100</p>
                <p className="text-gray-600">45-60 minute treatment sessions</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-[#B47B84]/20">
              <h3 className="text-xl font-semibold mb-4">Specialized Services</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Dry Needling</h4>
                  <p className="text-2xl font-bold text-[#B47B84] mb-1">$45</p>
                  <p className="text-gray-600">15-30 minutes</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Cupping Therapy</h4>
                  <p className="text-2xl font-bold text-[#B47B84] mb-1">$45</p>
                  <p className="text-gray-600">15-30 minutes</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Running Analysis</h4>
                  <p className="text-2xl font-bold text-[#B47B84] mb-1">$100</p>
                  <p className="text-gray-600">45-60 minutes</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center space-y-4">
            <a
              href="sms:8015109888?body=Hi, I'm interested in learning more about cash-pay physical therapy at Everwell PT."
              className="inline-block px-8 py-3.5 bg-[#B47B84] text-white text-center rounded-full hover:bg-[#9D6B73] transition shadow-sm"
            >
              Contact Us to Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}