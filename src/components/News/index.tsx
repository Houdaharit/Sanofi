import NewsTitle, { NewsTitleProps } from "./NewsTitle";

const News = ({ news }: { news: NewsTitleProps[] }) => {
  const NewsList = news.map((news, index) => (
    <div key={index}>
      <NewsTitle {...news} />
      <div className="border border-gray-300 mt-12"></div>
    </div>
  ));

  return (
    <>
      <h2 className="font-semibold text-4xl mb-8">
        Nos dernières informations
      </h2>
      <div className="border border-gray-300 mb-12" />
      <section className="flex flex-col gap-12">{NewsList}</section>
    </>
  );
};
export default News;
