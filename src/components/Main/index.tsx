import Article from "../Article";
import MainTop from "./private/MainTop";
//import ArticleBox from "./private/ArticleBox";

const Main = () => {
  return (
    <div className="flex flex-col gap-12">
      <MainTop />
      <Article />
    </div>
  );
};
export default Main;
