import CardHorizontal from "./ArticleHorizontal";
import CardVertical from "./ArticleVertical";

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
