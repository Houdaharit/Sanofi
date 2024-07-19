import { useState, useEffect } from "react";
import LargeNavBar from "./private/LargeNavBar";
import SmallNavBar from "./private/SmallNavBar";

const NavBar = () => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const [scrollY, setScrollY] = useState<number>(0);

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

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (windowWidth < 1280)
    return (
      <div className={scrollY > 0 ? "fixed z-10" : ""}>
        <SmallNavBar />
      </div>
    );
  else
    return (
      <div className={scrollY > 0 ? "fixed z-10" : ""}>
        <LargeNavBar />
      </div>
    );
};

export default NavBar;
