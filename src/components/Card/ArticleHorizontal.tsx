import { CardProps } from ".";

const CardHorizontal = (props: CardProps) => {
  return (
    <div className="flex lg:gap-12 gap-6 overflow-hidden flex-wrap lg:flex-nowrap">
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

      <section className={props.order === "first" ? "order-first" : "lg:order-last order-first"}>
      <img src={props.img} className="lg:w-[684px] lg:max-w-none" />
      </section>
    </div>
  );
};
export default CardHorizontal;