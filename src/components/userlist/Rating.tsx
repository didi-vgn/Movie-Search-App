import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { useUserList } from "../../context/UserListContext";

export default function Rating({ rating, id }: { rating: number; id: number }) {
  const { updateRating } = useUserList();

  return (
    <div className='flex gap-1 items-center font-bold text-2xl gap-1'>
      {[...Array(5)].map((_, i) => (
        <div className='relative size-9' key={i}>
          <button
            onClick={() => updateRating(id, i + 0.5)}
            className='absolute left-0 w-1/2 h-full'
          ></button>
          <button
            onClick={() => updateRating(id, i + 1)}
            className='absolute right-0 w-1/2 h-full'
          ></button>
          <Star val={rating - i} />
        </div>
      ))}
      {rating}
    </div>
  );
}

function Star({ val }: { val: number }) {
  return (
    <>
      {val >= 1 ? (
        <FaStar className='size-9' />
      ) : val === 0.5 ? (
        <FaStarHalfAlt className='size-9' />
      ) : (
        <FaRegStar className='size-9' />
      )}
    </>
  );
}
