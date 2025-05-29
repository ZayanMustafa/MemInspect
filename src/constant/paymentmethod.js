
export const paymentMethods = [
  {
    id: 'google_pay',
    name: 'Google Pay',
    icon: '/googlepay.png',
    alt: 'Google Pay'
  },
  {
    id: 'apple_pay',
    name: 'Apple Pay',
    icon: '/applepay.png',
    alt: 'Apple Pay'
  },
  {
    id: 'paypal',
    name: 'PayPal',
    icon: '/paypal.png',
    alt: 'PayPal'
  },
  {
    id: 'credit_card',
    name: 'Credit/Debit Card',
    icon: '/creditcard.png',
    alt: 'Credit Card'
  }
];


export const paymentplans = [
  {
    name: "Basic Inspection",
    price: "$99",
    description: "Essential vehicle check for budget-conscious buyers",
    popular: false,
    features: [
      "100-point inspection",
      "Exterior condition report",
      "Basic mechanical check",
      "Digital report with photos"
    ]
  },
  {
    name: "Standard Inspection",
    price: "$199",
    description: "Comprehensive check for most vehicles",
    popular: true,
    features: [
      "150-point inspection",
      "Interior & exterior evaluation",
      "Advanced mechanical check",
      "Test drive included",
      "Digital report with photos"
    ]
  },
  {
    name: "Premium Inspection",
    price: "$299",
    description: "Complete evaluation for luxury/performance vehicles",
    popular: false,
    features: [
      "200-point inspection",
      "Full diagnostic scan",
      "Performance evaluation",
      "Test drive included",
      "Priority scheduling",
      "Detailed digital report"
    ]
  }
];

