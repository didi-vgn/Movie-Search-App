import { useParams } from "react-router-dom";
import usePersonDetails from "../hooks/usePersonDetails";
import { TMDB_POSTER_500 } from "../utils/constants";
import Carousel from "../components/Carousel";
import { useState } from "react";
import { FaCaretDown } from "react-icons/fa6";
import { FaCaretUp } from "react-icons/fa6";
import {
  MovieCarouselItemCast,
  MovieCarouselItemCrew,
} from "../components/MovieCarouselItem";

export default function PersonPage() {
  const { id } = useParams();
  const person = usePersonDetails(Number(id));
  const [biography, setBiography] = useState(false);

  if (!person) return <div>Loading...</div>;

  return (
    <div className='xl:w-2/3 xl:mx-auto'>
      <div className='p-1 my-3 text-sm md:p-3 '>
        <div className='grid grid-rows-[1.5rem_1rem_auto] grid-cols-[1fr_3fr] items-start gap-2 lg:grid-cols-[1fr_4fr]'>
          <img
            src={TMDB_POSTER_500 + person.profile_path}
            alt={person.name ?? "Profile Picture"}
            className='row-span-3 rounded-lg md:row-start-1 md:row-span-4'
          />

          <div className='font-bold text-2xl'>{person.name}</div>

          <div className='flex gap-2 opacity-60'>{person.place_of_birth}</div>

          <div className='opacity-60'>
            Best known for: {person.known_for_department}
          </div>

          <div className='col-span-2 relative pb-7'>
            <p className={`${!biography && "line-clamp-3"}`}>
              {person.biography}
            </p>
            <button
              className='absolute right-3 bottom-1'
              onClick={() => setBiography((prev) => !prev)}
            >
              {!biography ? (
                <FaCaretDown className='size-5' />
              ) : (
                <FaCaretUp className='size-5' />
              )}
            </button>
          </div>

          <div className='flex flex-col gap-3 opacity-80 col-span-2 row-start-6 md:col-span-1 md:row-start-4'>
            <hr />
            <div>some details 1</div>
            <hr />
            <div>some details 2</div>
            <hr />
            <div>some details 3</div>
          </div>
        </div>
      </div>
      <hr />
      <div className='flex flex-col'>
        <div className='w-full max-w-full overflow-hidden'>
          <div className='font-bold text-xl m-5'>Starred in:</div>
          <Carousel>
            {person.credits.cast.map((m) => (
              <MovieCarouselItemCast data={m} />
            ))}
          </Carousel>
        </div>
        <hr />
        <div className='w-full max-w-full overflow-hidden'>
          <div className='font-bold text-xl m-5'>Worked on:</div>
          <Carousel>
            {person.credits.crew.map((m) => (
              <MovieCarouselItemCrew data={m} />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
