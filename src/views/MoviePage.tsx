import { useParams } from "react-router-dom";
import { TMDB_POSTER_500 } from "../utils/constants";
import { useMovieDetails } from "../hooks/useMovieDetails";
import { SiImdb } from "react-icons/si";
import { SiRottentomatoes } from "react-icons/si";
import { SiMetacritic } from "react-icons/si";
import { getMainProducers, getMainWriters } from "../utils/sort";
import CastMemberProfile from "../components/CastMemberProfile";
import Carousel from "../components/Carousel";
import RoundedButton from "../components/RoundedButton";
import { TbMovie } from "react-icons/tb";

export default function MoviePage() {
  const { id } = useParams();
  const movie = useMovieDetails(Number(id));

  if (!movie) return <div>Loading...</div>;

  const mainProducers = getMainProducers(movie.credits.crew!)
    .map((p) => p.name)
    .join(", ");
  const mainWriters = getMainWriters(movie.credits.crew!)
    .map((p) => p.name)
    .join(", ");
  const mainCast = movie.credits.cast
    .slice(0, 3)
    .map((p) => p.name)
    .join(", ");

  return (
    <div className='xl:w-2/3 xl:mx-auto'>
      <div className='p-1 my-3 text-sm md:p-3 '>
        <div className='grid grid-rows-[auto_1rem_2rem_auto] grid-cols-[1fr_2fr] items-start gap-2 lg:grid-cols-[1fr_3fr]'>
          <img
            src={TMDB_POSTER_500 + movie.poster_path}
            alt={movie.title ?? "Movie Poster"}
            className='row-span-2 row-start-3 rounded-lg md:row-start-1 md:row-span-6'
          />

          <div className='font-bold text-2xl col-span-2 md:col-span-1'>
            {movie.title}
          </div>

          <div className='opacity-60 col-span-2 md:col-span-1'>
            {movie.release_date} ★ {movie.omdbData.Rated} ★{" "}
            {movie.spoken_languages.map((s) => s.english_name).join(", ")} ★{" "}
            {Math.floor(movie.runtime / 60)}h{movie.runtime % 60}m
          </div>

          <div className='flex gap-2'>
            {movie.genres.map((g) => (
              <RoundedButton text={g.name} />
            ))}
          </div>

          <p>{movie.overview}</p>

          <div className='flex flex-col gap-3 opacity-80 col-span-2 row-start-6 md:col-span-1 md:row-start-5'>
            <hr />
            <div>Producers: {mainProducers}</div>
            <hr />
            <div>Writers: {mainWriters}</div>
            <hr />
            <div>Stars: {mainCast}</div>
          </div>

          <div className='flex items-center gap-3 text-lg col-span-2 md:col-span-1 md:place-self-end'>
            {movie.omdbData.Ratings.map((r, i) => {
              return (
                <>
                  {r.Source === "Internet Movie Database" && (
                    <SiImdb className='size-7' />
                  )}
                  {r.Source === "Rotten Tomatoes" && (
                    <SiRottentomatoes className='size-7' />
                  )}
                  {r.Source === "Metacritic" && (
                    <SiMetacritic className='size-7' />
                  )}
                  {r.Value}
                </>
              );
            })}
          </div>
        </div>
      </div>
      <div className='grid xl:grid-cols-[2fr_1fr]'>
        <div className='w-full max-w-full overflow-hidden'>
          <div className='font-bold text-xl m-5'>Cast</div>
          <Carousel>
            {movie.credits.cast.map((c) => (
              <CastMemberProfile data={c} />
            ))}
          </Carousel>
        </div>
        <div className='w-full'>
          <div className='font-bold text-xl m-5'>Similar Titles</div>
          <div className='flex flex-col gap-2 p-5'>
            <div className='bg-slate-500 rounded-md p-2 flex'>
              <div className='bg-slate-400 rounded-md'>
                <TbMovie className='size-15' />
              </div>
            </div>
            <div className='bg-slate-500 rounded-md p-2 flex'>
              <div className='bg-slate-400 rounded-md'>
                <TbMovie className='size-15' />
              </div>
            </div>
            <div className='bg-slate-500 rounded-md p-2 flex'>
              <div className='bg-slate-400 rounded-md'>
                <TbMovie className='size-15' />
              </div>
            </div>
            <div className='bg-slate-500 rounded-md p-2 flex'>
              <div className='bg-slate-400 rounded-md'>
                <TbMovie className='size-15' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
