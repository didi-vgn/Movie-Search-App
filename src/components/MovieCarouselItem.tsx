import { useNavigate } from "react-router-dom";
import { TMDB_POSTER_200 } from "../utils/constants";
import { PersonCast, PersonCrew } from "../utils/types";
import { TbMovie } from "react-icons/tb";

function MovieCarouselItemCast({ data }: { data: PersonCast }) {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/movie/" + data.id);
  }

  return (
    <div
      className='flex flex-col p-2 min-w-25 max-w-25 cursor-pointer xl:min-w-50 xl:grid xl:grid-cols-2 xl:gap-2'
      onClick={handleClick}
    >
      <div className='relative overflow-hidden h-25 rounded-md '>
        {data.poster_path ? (
          <img
            src={TMDB_POSTER_200 + data.poster_path}
            alt={data.title ?? data.name}
            className='absolute min-w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '
          />
        ) : (
          <div className='h-full bg-slate-600 flex justify-center items-center'>
            <TbMovie className='size-15' />
          </div>
        )}
      </div>
      <div className='text-center xl:text-left'>
        <div className='text-xs font-bold'>{data.title ?? data.name}</div>
        <div className='text-xs opacity-70'>{data.character}</div>
      </div>
    </div>
  );
}

function MovieCarouselItemCrew({ data }: { data: PersonCrew }) {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/movie/" + data.id);
  }
  return (
    <div
      className='flex flex-col p-2 min-w-25 max-w-25 cursor-pointer xl:min-w-50 xl:grid xl:grid-cols-2 xl:gap-2'
      onClick={handleClick}
    >
      <div className='relative overflow-hidden h-25 rounded-md '>
        {data.poster_path ? (
          <img
            src={TMDB_POSTER_200 + data.poster_path}
            alt={data.title ?? data.name}
            className='absolute min-w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '
          />
        ) : (
          <div className='h-full bg-slate-600 flex justify-center items-center'>
            <TbMovie className='size-15' />
          </div>
        )}
      </div>
      <div className='text-center'>
        <div className='text-xs font-bold'>{data.title ?? data.name}</div>
        <div className='text-xs opacity-70'>{data.job}</div>
      </div>
    </div>
  );
}

export { MovieCarouselItemCast, MovieCarouselItemCrew };
