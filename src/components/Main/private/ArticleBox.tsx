import { useEffect, useRef, useState } from "react";
import { useContextBox } from "../../../providers/BoxProvider";

const ArticleBox = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const { setBoxHeight } = useContextBox();
  const [width, setWidth] = useState(divRef.current?.offsetWidth);

  useEffect(() => {
    const handleResize = () => {
      if (divRef.current) {
        setWidth(divRef.current.offsetWidth);
      }
    };

    handleResize(); // Set initial height

    const observer = new ResizeObserver(() => {
      handleResize();
    });

    if (divRef.current) {
      observer.observe(divRef.current);
    }

    return () => {
      if (divRef.current) {
        observer.unobserve(divRef.current);
      }
    };
  }, [divRef.current]);

  useEffect(() => {
    if (divRef.current) {
      if (divRef.current.offsetWidth == 590) setBoxHeight(48);
      else {
        setBoxHeight(divRef.current.offsetHeight);
      }
    }
  }, [width]);

  return (
    <div
      ref={divRef}
      className="lg:w-[590px] bg-white rounded-md shadow-xl lg:max-w-none"
    >
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
