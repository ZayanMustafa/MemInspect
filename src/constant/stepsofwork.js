


import { FiSearch, FiCalendar, FiUser, FiFileText, FiArrowRight } from 'react-icons/fi'

export  const steps = [
    {
      icon: <FiSearch size={40} className="text-white" />,
      title: "1. SCHEDULE INSPECTION",
      description: "Book an appointment online or via phone at your convenience.",
      action: " BOOK NOW",
      path: "/schedule"
    },
    {
      icon: <FiCalendar size={40} className="text-white" />,
      title: "2. VEHICLE INSPECTION",
      description: "150-point examination performed by certified inspectors.",
      action: " SEE CHECKLIST",
      path: "/inspection"
    },
    {
      icon: <FiUser size={40} className="text-white" />,
      title: "3. DETAILED REPORT",
      description: "Comprehensive digital report with findings and photos.",
      action: " SAMPLE REPORT",
      path: "/reports"
    },
    {
      icon: <FiFileText size={40} className="text-white" />,
      title: "4. EXPERT CONSULTATION",
      description: "Discuss results and get maintenance recommendations.",
      action: " LEARN MORE",
      path: "/consultation"
    },
  ]