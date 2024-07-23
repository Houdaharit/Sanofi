import NavBar from "../NavBar";
import Footer from "../Footer";
import { ReactNode } from "react";
import { WindowWidthProvider } from "../../providers/WindowWidthProvider";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <WindowWidthProvider>
        <NavBar />
        {children}
        <Footer />
      </WindowWidthProvider>
    </>
  );
};
export default Layout;
