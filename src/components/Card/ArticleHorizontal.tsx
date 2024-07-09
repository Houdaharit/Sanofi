import { CardProps } from ".";

const CardHorizontal = (props: CardProps) => {
  return (
    <div className="flex gap-12 overflow-hidden">
      <section className="flex flex-col gap-3">
        <h3 className="text-3xl leading-[54px] font-bold">{props.title}</h3>
        
        <section>
        <p className="text-base leading-6">{props.text}</p>
        </section>

        <section className="flex gap-3 items-center">
          <div className="font-bold text-base">En Savoir plus </div>
          <img src="/link.svg" className="h-4" />
        </section>

      </section>

      <section className={props.order === "first" ? "order-first" : "order-last"}>
      <img src={props.img} className="w-[684px] max-w-none" />
      </section>
    </div>
  );
};
export default CardHorizontal;