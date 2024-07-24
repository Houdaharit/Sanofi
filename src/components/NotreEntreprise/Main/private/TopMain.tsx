import { useContextBox } from "../../../../providers/BoxProvider";
import TopMainBox from "./TopMainBox";

const TopMain = () => {
  const { boxHeight } = useContextBox();

  return (
    <div className="relative" style={{ marginBottom: boxHeight }}>
      <section className="absolute lg:m-40 m-4 mt-[250px] lg:max-w-none">
        <TopMainBox />
      </section>
      <img
        src="herobanner-strategy.png"
        className="object-cover lg:h-[576px] h-[296px]"
      />
    </div>
  );
};
export default TopMain;
