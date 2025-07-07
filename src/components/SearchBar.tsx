import { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(query);
    if (query.trim()) {
      navigate(`/search?query=${query.trim()}&page=1`);
    }
  }
  return (
    <form onSubmit={handleSubmit} className='flex items-center gap-1'>
      <input
        type='text'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className='bg-slate-700 border rounded-md justify-self-end px-2'
      />
      <button>
        <IoMdSearch className='size-7 cursor-pointer' />
      </button>
    </form>
  );
}
