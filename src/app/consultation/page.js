

import { SecondNavbar } from "@/component/SecondNav";
import { ConsultationForm } from "@/section/consultation/consultionform";
// import { ConsultationForm } from "@/section/consultation/consultationform";
import { EmergencyContact } from "@/section/consultation/emergencycontact";
import { FeatureCard } from "@/section/consultation/featurecard";
import { ConsultationHero } from "@/section/consultation/hero";
import Head from "next/head";

import { 
  FiPhone, 
  FiMail, 
  FiMessageSquare,
  FiAlertTriangle,
  FiDollarSign,
} from 'react-icons/fi'

export default function Consultation() {

  const formFields = [
    { name: "name", label: "Full Name", type: "text", placeholder: "Your name" },
    { name: "email", label: "Email Address", type: "email", placeholder: "your@email.com" },
    { name: "phone", label: "Phone Number", type: "tel", placeholder: "(123) 456-7890" },
    { name: "reportId", label: "Inspection Report ID", type: "text", placeholder: "MEM-XXXX-XX-XX" }
  ];

  const contactMethods = ["Phone Call", "Video Call", "Email"];

  const features = [
    {
      icon: FiMessageSquare,
      title: "Report Walkthrough",
      description: "We&apors;ll explain each section of your inspection report in plain language"
    },
    {
      icon: FiAlertTriangle,
      title: "Critical Findings",
      description: "Highlight urgent issues that need attention"
    },
    {
      icon: FiDollarSign,
      title: "Repair Estimates",
      description: "Get rough cost estimates for recommended repairs"
    }
  ];

  const emergencyContacts = [
    { icon: FiPhone, text: "CALL: (311) 25128 21", href: "tel:+9231125128721" },
    { icon: FiMail, text: "EMAIL: support@memvehicle.com", href: "mailto:support@memvehicle.com" }
  ];

  return (
    <>
      <SecondNavbar/>
      
      <ConsultationHero
        title="EXPERT CONSULTATION" 
        description="Discuss your inspection results with our certified technicians" 
      />

      <section className="py-20 bg-dark-500">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold text-white mb-8">UNDERSTAND YOUR REPORT</h2>
            <p className="text-xl text-gray-300 mb-6">
              Our post-inspection consultations help you make informed decisions.
            </p>
            
            <div className="space-y-6 mb-12">
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}

            </div>
          </div>

          <ConsultationForm
            fields={formFields}
            contactMethods={contactMethods}
          />
        </div>
      </section>

      <EmergencyContact contacts={emergencyContacts} />
    </>
  );
}



