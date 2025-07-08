import { TMDB_POSTER_200 } from "../utils/constants";
import { CastMember } from "../utils/types";

export default function CastMemberProfile({ data }: { data: CastMember }) {
  return (
    <div className='flex flex-col text-center items-center shrink-0 w-45 cursor-pointer'>
      <div className='relative rounded-full w-30 h-30 overflow-hidden'>
        <img
          src={TMDB_POSTER_200 + data.profile_path}
          alt={data.name ?? "Actor Profile"}
          className='absolute -top-3'
        />
      </div>
      <div className='font-bold'>{data.name}</div>
      <div className='text-sm opacity-60'>{data.character}</div>
    </div>
  );
}
