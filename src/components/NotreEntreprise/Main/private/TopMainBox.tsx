import { useRef, useState, useEffect } from "react";
import { useContextBox } from "../../../../providers/BoxProvider";

const TopMainBox = () => {
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
    <div ref={divRef} className="lg:w-[590px] bg-white rounded-md">
      <section className="flex flex-col gap-4 p-8">
        <h4 className="font-bold text-5xl leading-[72px]">Notre stratégie</h4>
        <text className="text-sm leading-6">
          Nous sommes engagés à créer la médecine de demain grâce à la science
          la plus innovante et à faire une différence positive pour nos employés
          et les communautés que nous soutenons.
        </text>
      </section>
    </div>
  );
};
export default TopMainBox;
