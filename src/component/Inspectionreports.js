


import { inspections } from "@/constant/inspection.js"
import InspectionCard from "./InspectionCard"

const InspectionReports = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mt-7 font-bold mb-4">Sample Inspection Reports</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See what our detailed reports look like and what they include.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {inspections.map((inspection) => (
            <InspectionCard key={inspection.id} inspection={inspection} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default InspectionReports