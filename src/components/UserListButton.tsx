import { PiListStarBold } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

export default function UserListButton() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/my-list");
  }

  return (
    <div className='flex items-center curspo-pointer' onClick={handleClick}>
      <div className='font-bold hidden md:block'>My List</div>
      <PiListStarBold className='size-8' />
    </div>
  );
}
