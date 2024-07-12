const ArticleBox = () => {
  return (
    <div className="lg:w-[590px] bg-white rounded-md">
      <section className="p-8 flex flex-col gap-4">
        <h3 className="font-bold text-[44px] leading-[72px]">
          Journée des maladies rares 2024 : L'équité en action
        </h3>

        <section>
          <div className="text-[14.5px]">
            À l'occasion de la Journée des maladies rares, il est plus important
            que jamais de continuer à rechercher un diagnostic, une innovation,
            un soutien et un accès équitables pour les personnes atteintes de
            maladies rares.
          </div>
        </section>

        <section>
          <button className="text-sm leading-4 bg-purple-900 rounded-md py-4 px-6 text-white">
            En savoir plus
          </button>
        </section>
      </section>
    </div>
  );
};
export default ArticleBox;
