import { useState, useEffect } from "react";

export default function DynamicSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of contents to display
  const contentArray = [
    "Shri Nath Ji Jewellers is now LIVE!!",
    "Trendiest Silver Collection !",
    "10% off Site-wide !!",
    "Shop for Affordable Jewellery Online",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % contentArray.length);
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="dynamic-section">
      <h3>{contentArray[currentIndex]}</h3>
    </div>
  );
}
