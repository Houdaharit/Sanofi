import Logo from "../../Logo";

const SmallNavBar = ({ scrollY }: { scrollY: number }) => {
  return (
    <nav
      className={
        scrollY > 0
          ? "h-[73px] flex items-center justify-between pl-4 pr-4 bg-white w-full fixed z-10 top-0 shadow-lg"
          : "h-[73px] flex items-center justify-between pl-4 pr-4 bg-white w-full fixed z-10 top-0"
      }
    >
      <img src="/menu.png" className="h-3" />
      <Logo color="black" />
      <img src="/SearchIcon.svg" />
    </nav>
  );
};
export default SmallNavBar;
