const Logo = ({ color }: { color: string }) => {
  return (
    <div
      className={
        color === "white"
          ? "text-3xl text-white font-bold"
          : "text-3xl font-bold"
      }
    >
      Sanofi
    </div>
  );
};
export default Logo;
