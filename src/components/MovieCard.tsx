import { Movie } from "../interfaces/Movie";
import { SiImdb } from "react-icons/si";
import { SiRottentomatoes } from "react-icons/si";
import { SiMetacritic } from "react-icons/si";

export default function MovieCard({ data }: { data: Movie }) {
  const genre: string[] = data?.Genre.split(", ");
  const runtime: string = `${Math.floor(parseInt(data?.Runtime, 10) / 60)}h${
    parseInt(data?.Runtime, 10) % 60
  }m`;

  if (data === null) return <div>Loading...</div>;
  return (
    <div className='bg-slate-900 p-1 shadow-md cursor-pointer my-3 text-sm md:p-3'>
      <div className='grid grid-rows-auto grid-cols-[1fr_2fr] gap-2 lg:grid-cols-[1fr_3fr]'>
        <img
          src={data.Poster}
          alt={data.Title ?? "Movie Poster"}
          className='row-span-2 row-start-3 md:row-start-1 md:row-span-6'
        />

        <div className='font-bold text-xl col-span-2 md:col-span-1'>
          {data.Title}
        </div>

        <div className='opacity-60 col-span-2 md:col-span-1'>
          {data.Year} | {data.Rated} | {data.Language} | {runtime}
        </div>

        <div>
          {genre.map((g) => (
            <BubbleButton text={g} key={g} />
          ))}
        </div>

        <p>{data.Plot}</p>

        <div className='flex flex-col gap-3 opacity-80 col-span-2 row-start-6 md:col-span-1 md:row-start-5'>
          <hr />
          <div>Directors: {data.Director}</div>
          <hr />
          <div>Writers: {data.Writer}</div>
          <hr />
          <div>Actors: {data.Actors}</div>
        </div>

        <div className='flex items-center gap-3 text-lg col-span-2 md:col-span-1 md:place-self-end'>
          {data.Ratings.map((r, i) => {
            if (r.Source === "Internet Movie Database") {
              return (
                <div key={i}>
                  <SiImdb className='size-7' />
                  {r.Value}
                </div>
              );
            } else if (r.Source === "Rotten Tomatoes") {
              return (
                <div key={i}>
                  <SiRottentomatoes className='size-7' />
                  {r.Value}
                </div>
              );
            } else if (r.Source === "Metacritic") {
              return (
                <div key={i}>
                  <SiMetacritic className='size-7' />
                  {r.Value}
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

function BubbleButton({ text }: { text: string }) {
  return <div className='inline bg-slate-700 m-1 px-3 rounded-lg'>{text}</div>;
}
