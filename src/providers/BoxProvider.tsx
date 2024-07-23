/* eslint-disable react-refresh/only-export-components */
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface BoxContextType {
  boxHeight: number;
  setBoxHeight: Dispatch<SetStateAction<number>>;
}
const BoxContext = createContext<BoxContextType | undefined>(undefined);

const BoxProvider = ({ children }: { children: ReactNode }) => {
  const [boxHeight, setBoxHeight] = useState<number>(0);
  return (
    <BoxContext.Provider value={{ boxHeight, setBoxHeight }}>
      {children}
    </BoxContext.Provider>
  );
};

const useContextBox = () => {
  const context = useContext(BoxContext);
  if (context == undefined)
    throw new Error("context must be used within an BoxProvider");
  return context;
};

export { BoxProvider, useContextBox };
