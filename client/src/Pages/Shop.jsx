import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Swipeboard from "../Components/subcomponents/SwipeBoards";
import ProductRings from "../Components/subcomponents/ProductRings";
import PromisesBanner from "../Components/Assets/PromisesBanner.png";
import Testimonials from "../Components/subcomponents/Testimonials";
import MenWomenDisplay from "../Components/subcomponents/MenWomenDisplay";
import About from "../Components/AboutUs/About";
import toast from 'react-hot-toast';
import "../Styles/Shop.css";

export default function Shop() {
  const location = useLocation();
  const [paymentStatus, setPaymentStatus] = useState(null);

  useEffect(() => {
    // Get session_id from URL params
    const searchParams = new URLSearchParams(location.search);
    const sessionId = searchParams.get('session_id');

    if (sessionId) {
      const pollPaymentStatus = async () => {
        try {
          const response = await fetch(`${import.meta.env.VITE_APP_BASE_URL}/api/order-status/${sessionId}`);
          const data = await response.json();

          if (data.status === 'paid' || data.status === 'failed') {
            setPaymentStatus(data.status);
            toast.success(`Payment ${data.status}`, { duration: 5000 });
            // Optionally, you can clear the URL params after successful polling
            window.history.replaceState({}, document.title, "/");
            clearInterval(interval); // Stop polling when payment is resolved
          }
        } catch (error) {
          toast.error("Error fetching payment status. Please try again.");
          console.error("Error fetching payment status:", error);
        }
      };

      // Poll every 3 seconds until payment status is resolved
      const interval = setInterval(pollPaymentStatus, 3000);

      // Cleanup the polling on component unmount
      return () => clearInterval(interval);
    }
  }, [location.search]);

  return (
    <div className="shop-page">
      <div style={{ zIndex: "1" }}>
        <Swipeboard />
      </div>
      <hr />
      <ProductRings />
      <MenWomenDisplay />
      <hr />
      <Testimonials />
      <img className="PromisesBanner" src={PromisesBanner} alt="Our Promises Banner" />
    </div>
  );
}