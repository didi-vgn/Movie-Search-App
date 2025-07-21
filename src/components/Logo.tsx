import { TbMovie } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

export default function Logo() {
  const navigate = useNavigate();
  return (
    <div className='flex items-center'
      onClick={() => navigate("/")}
    >
      <TbMovie className='size-13' />
      <div className='text-2xl font-extrabold hidden md:block'>
        Movie Library
      </div>
    </div>
  );
}
