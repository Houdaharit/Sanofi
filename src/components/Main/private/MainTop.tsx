import ArticleBox from "./ArticleBox";

const MainTop = () => {
  return (
    <div className="relative">
      <section className="absolute lg:m-16 mt-[200px] m-4">
      <ArticleBox />
      </section>
      <img src="/andrea-pompe-patient_20240222140549.png" className="lg:h-[576px] h-[296px] object-cover w-full"/>
    </div>
  );
};
export default MainTop;
