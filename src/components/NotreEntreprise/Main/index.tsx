import { Link } from "react-router-dom";
import { BoxProvider } from "../../../providers/BoxProvider";
import Breadcrumb from "../../Breadcrumb";
import { CardProps } from "../../Card";
import CardHorizontal from "../../Card/private/ArticleHorizontal";
import TopMain from "./private/TopMain";
import { useWindowWindowContext } from "../../../providers/WindowWidthProvider";

const breadcrumbProps = [
  <Link to="/" className="flex font-medium text-xs font-worksans leading-6">
    Accueil
  </Link>,
  <text className="flex font-medium text-xs font-worksans leading-6">Notre Entreprise</text>,
];
const Main = () => {
  const {windowWidth} = useWindowWindowContext();

  const Cards = cardsHorizontal.map((card, index) => (
    <CardHorizontal key={index} {...card} />
  ));

  return (
    <BoxProvider>
      <section className="lg:mt-20 lg:ml-8 ml-4 mb-1">
        {windowWidth > 1280 && <Breadcrumb props={breadcrumbProps} />}
      </section>

      <section className={windowWidth < 1280 ? "mt-16" : ""}>
        <TopMain />
      </section>

      <section className="xl:ml-32 xl:mr-32 lg:ml-9 lg:mr-9 ml-4 mr-4">
        <section className="flex flex-col lg:gap-32 gap-16 mb-32">
          {Cards}
        </section>
      </section>
    </BoxProvider>
  );
};
export default Main;

const cardsHorizontal: CardProps[] = [
  {
    img: "/doctor.png",
    title: "Les Voix derrière notre Raison d’être",
    text: [
      "Nous poursuivons les miracles de la science pour améliorer la vie des gens, et parfois cela signifie recommencer à zéro avec un plan B, un plan C, ou même un plan Z. Ce film rassemble les pensées personnelles et les ambitions des personnes chez Sanofi, qui trouvent leur inspiration auprès de leurs proches, leur motivation auprès de leur famille, et une force unie pour se dépasser et avancer.",
    ],
    order: "first",
  },
  {
    img: "/transforming-the-practice-of-medicine.png",
    title: "Transformer la pratique de la médecine",
    text: [
      "Prioriser et concentrer nos efforts nous permet de libérer et de maximiser le potentiel de nos médicaments, vaccins et solutions de santé pour les gens, et ce au sein de nos quatre entités commerciales globales : Médecine de Spécialités, Vaccins, Médecine Générale et Santé Grand Public.",
      "Nous souhaitons devenir un leader en immunologie et avoir un impact positif pour des millions de patients souffrant de maladies dermatologiques, respiratoires, gastroentérologiques et d’autres maladies déclenchées par le système immunitaire.",
      "Nous travaillons chaque jour à conserver notre leadership dans la prévention en protégeant un demi-milliard de personnes tous les ans grâce à notre portefeuille de vaccins et en explorant le potentiel de nos plateformes technologiques et de production, notamment l’ARN messager.",
    ],
    order: "last",
  },
  {
    img: "/advancing-breakthrough-science.png",
    title: "Faire avancer la science la plus innovante",
    text: [
      "Nous renforçons notre pipeline avec un flot constant de potentielles thérapies innovantes qui pourraient radicalement changer les choses dans le traitement et la prévention de maladies à travers le monde.",
      "Nous possédons une large variété de plateformes de recherche qui nous permettent de faire avancer la science dans six aires thérapeutiques : Immunologie et Inflammation, Oncologie, Maladies Rares, Maladies Rares du Sang, Neurologie et Vaccins.",
    ],
    order: "first",
  },
  {
    img: "/social-impact-banner.png",
    title: "Avoir un impact sociétal",
    text: [
      "Les défis auxquels la société et la planète doivent faire face sont de plus en plus complexe. Les évolutions démographiques, les inégalités persistantes dans l’accès aux soins de santé et les menaces liées au changement climatique nous motivent à étendre nos engagements pour la société.  ",
      "Notre stratégie d’impact sociétal se différencie de celles de nos pairs et est intégrée à tous les niveaux de notre organisation. Nous souhaitons avoir un impact fort et durable sur la santé, le bien-être des gens, des communautés vulnérables, de nos employés, et de la planète.",
    ],
    order: "last",
  },
  {
    img: "/raimunda-rosario.png",
    title: "Aller plus loin pour la Diversité, l’Équité et l’Inclusion",
    text: [
      "Nous prenons des initiatives pour construire un leadership représentatif de la société et créer un environnement de travail ou les gens peuvent présenter la meilleure et la plus authentique version d’eux-mêmes.",
      "Au-delà de l’environnement de travail, nous améliorons la diversité au sein de nos essais cliniques et avec nos fournisseurs. Notre Conseil Diversité, Equité et Inclusion, composé de leaders externes reconnus et de dirigeants, s’assure que nous implémentons avec diligence nos engagements.  ",
    ],
    order: "first",
  },
];
