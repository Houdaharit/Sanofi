import CardHorizontal from "./private/ArticleHorizontal";
import CardVertical from "./private/ArticleVertical";

export interface CardProps {
  img: string;
  title: string;
  text: string;
  order?: string;
  vertical?: boolean;
}

const Card = (props: CardProps) => {
  if (props.vertical) return <CardVertical {...props} />;
  return <CardHorizontal {...props} />;
};

export default Card;
