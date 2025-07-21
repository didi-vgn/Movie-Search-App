import { useNavigate } from "react-router-dom";
import { MovieList } from "../utils/types";
import Poster from "./Poster";
import Section from "./Section";

export default function MovieListItem({ data }: { data: MovieList }) {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/movie/" + data.id);
  }

  return (
    <Section>
      <div
        className='cursor-pointer grid grid-cols-[64px_1fr] gap-2 items-center xl:bg-slate-700 xl:grid-cols-[128px_1fr] xl:gap-5 xl:p-2 xl:items-start'
        onClick={handleClick}
      >
        <Poster path={data.poster_path} title={data.title} />
        <div className='grid grid-rows-[auto_1fr] gap-2 xl:gap-5'>
          <div className='text-lg font-bold'>
            {data.title}{" "}
            {data.release_date ? ` (${data.release_date.split("-")[0]})` : ""}
          </div>
          <p className='line-clamp-3 opacity-70'>{data.overview}</p>
        </div>
      </div>
    </Section>
  );
}
