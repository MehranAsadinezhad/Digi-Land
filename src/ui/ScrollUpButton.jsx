import React, { useEffect, useState } from "react";
import { FaCircleArrowUp } from "react-icons/fa6";
export default function ScrollUpButton() {
  const [showButton, setShowButton] = useState(false);

  //   useEffect(() => {
  //     window.addEventListener("scroll", () => {
  //       if (window.scrollY > 300) {
  //         setShowButton(true);
  //       } else {
  //         setShowButton(false);
  //       }
  //     });
  //   }, []);

  //   // This function will scroll the window to the top
  //   const scrollToTop = () => {
  //     window.scrollTo({
  //       top: 0,
  //       behavior: "smooth", // for smoothly scrolling
  //     });
  //   };
  return (
        <button
          onClick={() => setShowButton(true)}
          className="fixed bottom-5 left-10 z-50 rounded-full bg-primary p-2 text-4xl text-medium transition-all duration-200 hover:bg-sky-600"
        >
          <FaCircleArrowUp />
        </button>

  );
}
