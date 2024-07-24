import Card, { CardProps } from "../../Card";
import MainTop from "./private/MainTop";
import News from "../../News";
import { NewsTitleProps } from "../../News/NewsTitle";

const Main = () => {
  const CardsHorizontal = cardsHorizontal.map((card, index) => (
    <Card {...card} key={index} />
  ));
  const CardsVertical = cardsVertical.map((card, index) => (
    <Card {...card} key={index} />
  ));
  return (
    <main>
      <section className="mt-[73px]">
        <MainTop />
      </section>
      <section className="xl:ml-32 xl:mr-32 lg:ml-9 lg:mr-9 ml-4 mr-4">
        <section className="flex flex-col lg:gap-32 gap-16 mb-32">
          {CardsHorizontal}
        </section>
        <section className="flex gap-4 flex-col lg:flex-row mb-32">
          {CardsVertical}
        </section>
        <section>
          <News news={news} />
        </section>
      </section>
    </main>
  );
};
export default Main;

const cardsHorizontal: CardProps[] = [
  {
    img: "/the-meningitis-flag-new_20240209150428.png",
    title: "Le drapeau de la lutte contre les méningites",
    text: ["Créé en collaboration avec trois para-athlètes, Ellie Challis, Théo Curin, Davide Morana et plusieurs membres de la Meningitis Research Foundation / Confederation of Meningitis Organisations, le drapeau de la lutte contre les méningites vise à sensibiliser le public à une maladie qui reste encore, à ce jour, un problème majeur de santé publique à l’échelle mondiale"],
    order: "last",
  },
  {
    img: "/thumbnail-youtube-women-at-sanofi_20240209151008.png",
    title: "Les femmes au sein de Entreprise - Cristina",
    text: ["Rencontrez Cristina Zamora, notre cheffe de projet pour les opérations de R&D en Amérique du Nord et l'une des nombreuses scientifiques inspirantes qui contribuent à renforcer la prochaine génération de femmes leaders dans le domaine de la santé et au-delà."],
    order: "first",
  },
  {
    img: "thumbnail-meningitis-vaskange-video_20240207161339.png",
    title: "200 jours avant les Jeux Paralympiques",
    text: ["Si vous n'avez pas encore entendu parler du #DrapeauMéningites, regardez la vidéo de Vaskange et découvrez la signification de chaque couleur."],
    order: "last",
  },
];

const cardsVertical: CardProps[] = [
  {
    img: "/thumbnail-youtube-virus-vs-bacteria_20240205091358.png",
    title: "Virus VS Bacteria",
    text: ["Ils font partie de votre vie, mais les connaissez-vous vraiment ? Nos scientifiques vous expliquent les principales différences entre un virus et une bactérie."],
    vertical: true,
  },
  {
    img: "/b-corp-multi-country_20240201094252.png",
    title: "Le parcours B Corp de Notre Santé Grand Public",
    text: ["En obtenant la certification B Corp pour Entreprise Santé Grand Public en Amérique du Nord, en Allemagne, en Italie et en Amérique latine, nous faisons partie d'une communauté mondiale qui transforme le monde des affaires en une force pour le bien."],
    vertical: true,
  },
  {
    img: "/ngd-sleeping-sickness-thumbnail-youtube_20240130143837.png",
    title: "Maladie du sommeil : Ne laisser personne de côté",
    text:["Maladie tropicale négligée, la maladie du sommeil est généralement mortelle en l'absence de traitement. Les patients infectés par la variante la plus aiguë de la maladie, le T.b rhodesiense, n'ont malheureusement bénéficié que de peu d'innovations en matière de traitement. Mais l'espoir pointe à l'horizon. Pour ces patients, nous voyons le potentiel du premier traitement oral pour cette variante de la maladie, soutenant ainsi l'objectif d'élimination de la maladie du sommeil chez l’humain d'ici 2030."],
    vertical: true,
  },
];

const news: NewsTitleProps[] = [
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
