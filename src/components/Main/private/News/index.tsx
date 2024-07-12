import NewsTitle, { NewsProps } from "./NewsTitle";

const News = () => {
  const NewsList = news.map((news, index) => (
    <div key={index}>
    <NewsTitle {...news} />
    <div className="border border-gray-300 mt-12"></div>
    </div>
  ));

  return (
    <>
      <h2 className="font-semibold text-4xl mb-8">Nos dernières informations</h2>
      <div className="border border-gray-300 mb-12" />
      <section className="flex flex-col gap-12">{NewsList}</section>
    </>
  );
};
export default News;

const news: NewsProps[] = [
  {
    date: "24 février 2024",
    title:
      "Communiqué : Résultats de phase II montrent que le rilzabrutinib permet de réduire rapidement la sévérité des démangeaisons causées par l’urticaire chronique spontanée et d’améliorer significativement l’activité de la maladie chez l’adulte",
  },
  {
    date: "24 février 2024",
    title:
      "Media Update: Dupixent® continues scientific leadership with late-breaking results showing reduced airway inflammation and mucus plugging in adults with uncontrolled moderate-to-severe asthma",
  },
  {
    date: "23 février 2024",
    title:
      "Communiqué de presse : La FDA accorde un examen prioritaire à la demande de licence de produits biologique relative à Dupixent® pour le traitement de la BPCO avec inflammation de type 2",
  },
];
