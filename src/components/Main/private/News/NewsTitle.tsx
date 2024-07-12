export interface NewsProps {
  title: string;
  date: string;
}

const NewsTitle = (props: NewsProps) => {
  return (
    <div className="font-semibold flex flex-col gap-4">
      <div className="text-sm leading-5">{props.date}</div>
      <div className="text-2xl leading-9">{props.title}</div>
      <div className="flex items-center gap-2">
        <span className="text-base leading-5">Lire le communiqué</span>
        <img src="/fleche.svg" className="h-[14px]" />
      </div>
    </div>
  );
};
export default NewsTitle;