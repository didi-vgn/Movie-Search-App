import { TbMovie } from "react-icons/tb";
import { TMDB_POSTER_500 } from "../utils/constants";

type Props = {
  path: string;
  title: string;
};

export default function Poster({ path, title }: Props) {
  return (
    <>
      {path ? (
        <img
          src={TMDB_POSTER_500 + path}
          alt={title ?? "Movie Poster"}
          className='rounded-md'
        />
      ) : (
        <div className='h-full w-full rounded-md bg-slate-600 flex justify-center items-center'>
          <TbMovie className='size-16' />
        </div>
      )}
    </>
  );
}
