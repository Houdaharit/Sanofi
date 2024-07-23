/* eslint-disable react-refresh/only-export-components */
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

interface WindowWidthContextType {
  windowWidth: number;
  setWindowWidth: Dispatch<SetStateAction<number>>;
}
const WindowWidthContext = createContext<WindowWidthContextType | undefined>(
  undefined
);

const WindowWidthProvider = ({ children }: { children: ReactNode }) => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <WindowWidthContext.Provider value={{ windowWidth, setWindowWidth }}>
      {children}
    </WindowWidthContext.Provider>
  );
};

const useWindowWindowContext = () => {
  const context = useContext(WindowWidthContext);
  if (context == undefined)
    throw new Error("Context must be used within the WindowWidthProvider");
  return context;
};

export { WindowWidthProvider, useWindowWindowContext };
