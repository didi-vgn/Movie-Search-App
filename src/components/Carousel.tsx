import { ReactElement, useRef } from "react";
import { FaCaretLeft } from "react-icons/fa6";
import { FaCaretRight } from "react-icons/fa6";

type Props = {
  children: ReactElement[];
};

export default function Carousel({ children }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  function scrollLeft() {
    containerRef.current?.scrollBy({ left: -840, behavior: "smooth" });
  }

  function scrollRight() {
    containerRef.current?.scrollBy({ left: 840, behavior: "smooth" });
  }

  return (
    <div className='relative w-full'>
      <button
        className='absolute left-0 top-1/4 z-10 hidden md:block xl:hidden'
        onClick={scrollLeft}
      >
        <FaCaretLeft className='size-15 opacity-70 cursor-pointer' />
      </button>
      <div
        className='overflow-x-auto flex scroll-smooth no-scrollbar w-full xl:grid xl:grid-auto-rows xl:grid-cols-4 xl:gap-2'
        ref={containerRef}
      >
        {children}
      </div>
      <button
        className='absolute right-0 top-1/4 z-10 hidden md:block xl:hidden'
        onClick={scrollRight}
      >
        <FaCaretRight className='size-15 opacity-70 cursor-pointer' />
      </button>
    </div>
  );
}
