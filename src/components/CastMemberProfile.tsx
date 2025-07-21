import { useNavigate } from "react-router-dom";
import { TMDB_POSTER_200 } from "../utils/constants";
import { CastMember } from "../utils/types";
import { IoPerson } from "react-icons/io5";

export default function CastMemberProfile({ data }: { data: CastMember }) {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/person/" + data.id);
  }

  return (
    <div
      className='flex flex-col text-center items-center shrink-0 w-35 cursor-pointer'
      onClick={handleClick}
    >
      <div className='relative rounded-full w-25 h-25 overflow-hidden'>
        {data.profile_path ? <img
          src={TMDB_POSTER_200 + data.profile_path}
          alt={data.name ?? "Actor Profile"}
          className='absolute -top-3'
        /> :
          <div className="w-full h-full bg-slate-600">
            <IoPerson className="w-full h-full" />
          </div>
        }
      </div>
      <div className='font-bold text-sm'>{data.name}</div>
      <div className='text-xs opacity-60'>{data.character}</div>
    </div>
  );
}
