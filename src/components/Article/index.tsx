const Article = () => {
  return (
    <div className="flex pl-32 pr-32 gap-12">
      <div className="flex flex-col gap-3">
        <h3 className="text-3xl leading-[54px] font-bold">Le drapeau de la lutte contre les méningites</h3>
        <p className="text-base leading-6">
          Créé en collaboration avec trois para-athlètes, Ellie Challis, Théo
          Curin, Davide Morana et plusieurs membres de la Meningitis Research
          Foundation / Confederation of Meningitis Organisations, le drapeau de
          la lutte contre les méningites vise à sensibiliser le public à une
          maladie qui reste encore, à ce jour, un problème majeur de santé
          publique à l’échelle mondiale.
        </p>
        <section className="flex gap-3 items-center">
        <div className="font-bold text-base">En Savoir plus </div>
        <img src="/link.svg" className="h-4"/>
        </section>
      </div>
      <img src="/the-meningitis-flag-new_20240209150428.png"/>
    </div>
  );
};
export default Article;
