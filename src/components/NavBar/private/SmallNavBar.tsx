import Logo from "../../Logo";

const SmallNavBar = () => {
  return (
    <nav className="h-[63px] flex items-center justify-between pl-4 pr-4 bg-white w-screen">
      <img src="/menu.png" className="h-3" />
      <Logo color="black" />
      <img src="/SearchIcon.svg" />
    </nav>
  );
};
export default SmallNavBar;
