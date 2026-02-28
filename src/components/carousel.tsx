import { ReactNode, useLayoutEffect, useRef, useState } from "react";

interface CarouselProps {
  children: ReactNode[];
}

export const Carousel = ({ children }: CarouselProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const blockRef = useRef<HTMLDivElement | null>(null);
  const [repetitions, setRepetitions] = useState<number>(1);

  useLayoutEffect(() => {
    const calculate = () => {
      if (!containerRef.current || !blockRef.current) return;

      const containerWidth = containerRef.current.offsetWidth;
      const blockWidth = blockRef.current.offsetWidth;

      if (!blockWidth) return;

      const blocksNeeded = Math.ceil(containerWidth / blockWidth) + 1;

      setRepetitions(blocksNeeded);
    };

    calculate();

    const resizeObserver = new ResizeObserver(calculate);

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    if (blockRef.current) {
      resizeObserver.observe(blockRef.current);
    }

    window.addEventListener("resize", calculate);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", calculate);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="group w-fit flex overflow-x-hidden scrollbar-hide"
    >
      {Array.from({ length: repetitions }).map((_, i) => (
        <div
          key={i}
          ref={i === 0 ? blockRef : null}
          className="flex items-center justify-center gap-1 pr-1 animate-infinite-scroll group-hover:[animation-play-state:paused]"
        >
          {children.map((item, index) => (
            <div
              key={`${i}-${index}`}
              className="card h-[5em] p-1 bg-amber-400 text-large rounded-small text-center
            content-center grow-0 shrink-0 basis-20"
            >
              {item}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
