import { NewsTitleProps } from "../../News/NewsTitle";
import TopMain from "./private/TopMain";
import News from "../../News";
import Breadcrumb from "../../Breadcrumb";
import { useWindowWindowContext } from "../../../providers/WindowWidthProvider";
import PaginationButtons from "../../Pagination";
import { Link } from "react-router-dom";

const breadcrumbProps = [
  <Link to="/" className="text-xs flex font-medium leading-6 font-worksans">
    Accueil
  </Link>,
  <text className="text-xs flex font-medium leading-6 font-worksans">Média</text>,
  <text className="text-xs flex font-medium leading-6 font-worksans">
    Communiqués de presse
  </text>,
];

const Main = () => {
  const { windowWidth } = useWindowWindowContext();

  return (
    <main>
      <section className="lg:mt-20 lg:ml-8 ml-4">
        {windowWidth > 1280 && <Breadcrumb props={breadcrumbProps} />}
      </section>
      <section className={windowWidth < 1280 ? "mt-16" : ""}>
        <TopMain />
      </section>

      <section className="mt-12 xl:ml-32 xl:mr-32 lg:ml-9 lg:mr-9 ml-4 mr-4">
        <section>
          <News news={news} />
        </section>
      </section>

      <section className="mt-8 mb-24 flex justify-center">
        <PaginationButtons />
      </section>
    </main>
  );
};
export default Main;

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
      "Communiqué de presse : Dépôt du Document d’Enregistrement Universel 2023, contenant le Rapport Financier Annuel, et du « Form 20-F » américain",
  },
  {
    date: "23 février 2024",
    title:
      "Communiqué de presse : La FDA accorde un examen prioritaire à la demande de licence de produits biologique relative à Dupixent® pour le traitement de la BPCO avec inflammation de type 2",
  },
  {
    date: "22 février 2024",
    title:
      "Communiqué de presse : Le Conseil d’administration de Sanofi propose la nomination de Clotilde Delbos, Anne-Françoise Nesmes et John Sundy en qualité d’administrateurs indépendants",
  },
  {
    date: "16 février 2024",
    title:
      "Communiqué de presse : Le Japon est le premier pays dans le monde à approuver Dupixent® pour le traitement de l’urticaire chronique spontanée",
  },
  {
    date: "15 février 2024",
    title:
      "Communiqué de presse : Des données de phase II publiées dans le NEJM illustrent le fort potentiel d’efficacité du frexalimab dans le traitement de la sclérose en plaques récurrente-rémittente",
  },
  {
    date: "9 février 2024",
    title:
      "Media Update: New data presented at AAAAI highlight Sanofi’s scientific leadership across inflammatory diseases",
  },
  {
    date: "6 février 2024",
    title:
      "Media Update: New data demonstrate clinical safety, benefit and durability of Nexviazyme® across a wide-range of Pompe disease patient groups",
  },
  {
    date: "5 février 2024",
    title:
      "Communiqué de presse : Entraide, conditions de travail flexibles, salaire pendant un an : Sanofi lance un programme mondial pour les employés touchés par un cancer ou une maladie grave",
  },
  {
    date: "1 février 2024",
    title:
      "Communique de presse - 2023 : Croissance des ventes et du bénéfice net par action à TCC, succès des lancements de produits et avancée du portefeuille R&D en Immunologie",
  },
  {
    date: "1 février 2024",
    title:
      "François-Xavier Roger nommé Directeur Financier, membre du Comité exécutif de Sanofi",
  },
  {
    date: "25 janvier 2024",
    title:
      "Communiqué de presse : Dupixent® : premier et seul médicament approuvé par la FDA pour le traitement de l’œsophagite à éosinophiles de l’enfant à partir de 12 mois",
  },
  {
    date: "23 janvier 2024",
    title:
      "Communiqué de presse : Sanofi va acquérir Inhibrx, Inc. et ajouter à son portefeuille Maladies rares un actif pour le traitement du déficit en alpha-1- antitrypsine, potentiellement le meilleur de sa classe pharmacothérapeutique",
  },
];
