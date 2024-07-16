import { useState, useEffect } from "react";
import LargeNavBar from "./private/LargeNavBar";
import SmallNavBar from "./private/SmallNavBar";

const NavBar = () => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (windowWidth < 1280) return <SmallNavBar />;
  else return <LargeNavBar />;
};

export default NavBar;
