import { CardProps } from ".";

const CardVertical = (props: CardProps) => {
  return (
    <div className="flex-col w-[383px] border rounded-md shadow-xl overflow-hidden">

      <section>

        <img src={props.img} />

      </section>
      <section className="flex flex-col gap-3 m-6">
        <h3 className="text-3xl leading-[54px] font-bold">{props.title}</h3>

        <section>
          <p className="text-base leading-6">{props.text}</p>
        </section>

        <section className="flex gap-3 items-center">
          <div className="font-bold text-base">En Savoir plus </div>
          <img src="/link.svg" className="h-4" />
        </section>

      </section>
    </div>
  );
};
export default CardVertical;
