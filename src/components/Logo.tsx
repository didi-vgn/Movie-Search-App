import { TbMovie } from "react-icons/tb";

export default function Logo() {
  return (
    <div className='flex items-center'>
      <TbMovie className='size-15' />
      <div className='text-2xl font-extrabold hidden md:block'>
        Movie Library
      </div>
    </div>
  );
}
