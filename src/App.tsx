import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigationType, useLocation } from "react-router-dom";
import Mind from "./pages/Mind";
import Mob from "./pages/Mob";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  const [isMobile, setIsMobile] = useState(false);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 568); // Adjust the threshold as needed
    };

    // Initial check on component mount
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleNavbar = () => {
    setIsNavbarOpen((prevState) => !prevState);
  };

  const handleClick = () => {
    // Handle click event for the hamburger icon
    toggleNavbar(); // Toggle the state of the navbar
  };

  return (
    <Routes>
      <Route
        path="/"
        element={isMobile ? <Mob /> : <Mind />}
      />
      
      {/* Render NavbarM only when isNavbarOpen is true */}
      {/* Add other routes as needed */}
    </Routes>
  );
}

export default App;
