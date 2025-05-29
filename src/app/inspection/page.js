import { FiCheckCircle, FiAlertTriangle } from 'react-icons/fi'
import { VscDebugBreakpointLog } from "react-icons/vsc";
import Head from 'next/head'
import { SecondNavbar } from '@/component/SecondNav';

export default function Inspection() {
  const categories = [
    {
      name: "Exterior",
      items: ["Body Panels", "Paint Condition", "Glass", "Lights", "Tires/Wheels", "Suspension"]
    },
    {
      name: "Interior",
      items: ["Seats", "Dashboard", "Controls", "Electronics", "Climate Control", "Safety Features"]
    },
    {
      name: "Mechanical",
      items: ["Engine", "Transmission", "Drivetrain", "Brakes", "Exhaust", "Fluid Levels"]
    },
    {
      name: "Test Drive",
      items: ["Acceleration", "Braking", "Steering", "Noises", "Alignment", "Transmission Shift"]
    }
  ]

  return (
    <>
      <Head>
        <title>Inspection Checklist | MEM INSPECTION </title>
      </Head>
      <SecondNavbar />
      <section className="bg-dark-600 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">150-POINT INSPECTION CHECKLIST</h1>
          <div className="w-24 h-0.5 bg-white mb-8"></div>
          <p className="text-2xl text-gray-300 max-w-3xl">
            Comprehensive examination performed by certified technicians
          </p>
        </div>
      </section>

      <section className="py-20 bg-dark-500">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">WHAT WE INSPECT</h2>
              <p className="text-xl text-gray-300 mb-6">
                Our certified technicians perform a thorough 150-point inspection covering all major vehicle systems.
              </p>
              <div className="flex items-start mb-4">
                <FiCheckCircle className="text-green-400 mt-1 mr-3 flex-shrink-0" />
                <p className="text-gray-300">Each item is marked as Pass, Fail, or Needs Attention</p>
              </div>
              <div className="flex items-start">
                <FiAlertTriangle className="text-yellow-400 mt-1 mr-3 flex-shrink-0" />
                <p className="text-gray-300">Critical findings are flagged for immediate attention</p>
              </div>
            </div>
            <div className="border border-white p-8 self-start">
              <h3 className="text-2xl text-white mb-4">Inspection Includes:</h3>
              <ul className="space-y-3">
                {["Digital report with photos", "OBD-II scan", "Test drive evaluation", "Fluid condition check", "Tire tread depth measurement", "Frame damage assessment"].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <FiCheckCircle className="text-green-400 mr-3" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-12">
            {categories.map((category, index) => (
              <div key={index} className="border border-white p-8">
                <h3 className="text-3xl font-bold text-white mb-6">{category.name}</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.items.map((item, i) => (
                    <div key={i} className="flex items-center">
                      <div className="w-5 h-5 border border-white mr-3"></div>
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}