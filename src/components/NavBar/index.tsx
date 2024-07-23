import { useState, useEffect } from "react";
import LargeNavBar from "./private/LargeNavBar";
import SmallNavBar from "./private/SmallNavBar";
import { useWindowWindowContext } from "../../providers/WindowWidthProvider";

const NavBar = () => {
  const { windowWidth } = useWindowWindowContext();
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (windowWidth < 1280) return <SmallNavBar scrollY={scrollY} />;
  else return <LargeNavBar scrollY={scrollY} />;
};

export default NavBar;
