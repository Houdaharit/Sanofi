const Logo = ({ color }: { color: string }) => {
  return (
  <>
  {color === "black" && <img src="/sanofi-black.svg" />}
  {color === "white" && <img src="/sanofi-white.svg" />}
  </>
  );
};
export default Logo;
