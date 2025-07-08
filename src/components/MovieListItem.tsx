import { useNavigate } from "react-router-dom";
import { TMDB_POSTER_200 } from "../utils/constants";
import { TbMovie } from "react-icons/tb";
import { MovieList } from "../utils/types";

export default function MovieListItem({ data }: { data: MovieList }) {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/movie/" + data.id);
  }

  return (
    <div
      className='cursor-pointer grid grid-cols-[64px_1fr] gap-2 p-2 items-center xl:grid-cols-[128px_1fr] xl:gap-5 xl:p-5 xl:items-start'
      onClick={handleClick}
    >
      {data.poster_path ? (
        <img
          src={TMDB_POSTER_200 + data.poster_path}
          alt={data.title}
          className='rounded-md'
        />
      ) : (
        <div className='rounded-md bg-slate-600 h-[96px] w-[64px] flex justify-center items-center xl:h-[184px] xl:w-[128px]'>
          <TbMovie className='size-15' />
        </div>
      )}
      <div className='grid grid-rows-[auto_1fr] gap-2 xl:gap-5'>
        <div className='text-lg font-bold'>
          {data.title}{" "}
          {data.release_date ? ` (${data.release_date.split("-")[0]})` : ""}
        </div>
        <p className='line-clamp-3 opacity-70'>{data.overview}</p>
      </div>
    </div>
  );
}
