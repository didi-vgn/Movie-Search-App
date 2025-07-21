import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getMovieList } from "../services/getMovieList";
import MovieListItem from "../components/MovieListItem";
import { FaCaretLeft } from "react-icons/fa6";
import { FaCaretRight } from "react-icons/fa6";
import { MovieList } from "../utils/types";

export default function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const page = parseInt(searchParams.get("page")!);
  const [results, setResults] = useState<MovieList[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getMovieList(query!, page);
        setResults(data.results);
        setTotalPages(data.total_pages);
      } catch (err) {
        console.error(err);
      }
    }

    fetchData();
  }, [query, page]);

  function prevPage() {
    if (page <= 1) return;

    navigate(`/search?query=${query}&page=${page - 1}`);
    scrollToTop();
  }

  function nextPage() {
    if (page >= totalPages) return;

    navigate(`/search?query=${query}&page=${page + 1}`);
    scrollToTop();
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }

  return (
    <div className='p-1 mx-auto md:p-5 md:px-12 xl:w-2/3'>
      <div className='text-2xl'>Search results for "{query}"</div>
      <div className='grid divide-y items-center justify-center'>
        {results?.map((m) => (
          <MovieListItem data={m} key={m.id} />
        ))}
      </div>
      <div className='grid grid-cols-[1fr_4rem_1fr] justify-items-center gap-5 mt-4'>
        <button
          className={`justify-self-end cursor-pointer ${page <= 1 ? "hidden" : ""}`}
          disabled={page <= 1}
          onClick={prevPage}
        >
          <FaCaretLeft className='size-7 ' onClick={prevPage} />
        </button>
        <div className='text-2xl font-bold col-start-2'>{page}</div>
        <button
          className={`justify-self-start cursor-pointer ${page >= totalPages ? "hidden" : ""}`}
          disabled={page >= totalPages}
          onClick={nextPage}
        >
          <FaCaretRight className='size-7 ' onClick={nextPage} />
        </button>
      </div>
    </div>
  );
}
