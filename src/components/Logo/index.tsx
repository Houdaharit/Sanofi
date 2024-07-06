const Logo = ({color}: {color: string}) => {
  return <div className={color === "white" ? "text-3xl mr-3 text-white font-bold" : "text-3xl mr-3 font-bold"}>Sanofi</div>;
};
export default Logo;
