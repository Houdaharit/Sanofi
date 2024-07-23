import TopMainBox from "./TopMainBox";

const TopMain = () => {
  return (
    <div className="relative">
      <section className="absolute m-40">
      <TopMainBox />
      </section>
      <img src="herobanner-strategy.png" className="object-cover lg:h-[576px]" />
    </div>
  );
};
export default TopMain;
