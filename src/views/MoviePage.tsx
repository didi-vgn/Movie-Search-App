import { useNavigate, useParams } from "react-router-dom";
import { useMovieDetails } from "../hooks/useMovieDetails";
import { SiImdb } from "react-icons/si";
import { SiRottentomatoes } from "react-icons/si";
import { SiMetacritic } from "react-icons/si";
import { getMainProducers, getMainWriters } from "../utils/sort";
import CastMemberProfile from "../components/CastMemberProfile";
import Carousel from "../components/Carousel";
import RoundedButton from "../components/RoundedButton";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { useUserList } from "../context/UserListContext";
import Poster from "../components/Poster";
import Container from "../components/Container";
import Section from "../components/Section";
import { MovieList } from "../utils/types";

export default function MoviePage() {
  const { id } = useParams();
  const movie = useMovieDetails(Number(id));
  const { isInList, addMovie } = useUserList();

  if (!movie) return <div>Loading...</div>;

  const mainProducers = getMainProducers(movie.credits.crew!)
    .map((p) => p.name)
    .join(", ");
  const mainWriters = getMainWriters(movie.credits.crew!)
    .map((p) => p.name)
    .join(", ");
  const mainCast = movie.credits.cast
    .slice(0, 3)
    .map((p) => p.name)
    .join(", ");

  function handleClick() {
    if (!movie) return;
    const data = {
      id: movie.id,
      title: movie.title,
      release_date: movie.release_date,
      poster_path: movie.poster_path,
      watched: false,
      notes: "",
      genres: movie.genres.map((g) => g.name),
      runtime: movie.runtime,
      rating: 0,
    };
    addMovie(data);
  }

  return (
    <Container>
      <div className='p-1 my-3 text-sm md:p-3 '>
        <div className='grid grid-rows-[auto_1rem_2rem_auto] grid-cols-[1fr_2fr] items-start gap-2 lg:grid-cols-[1fr_3fr]'>
          <div className='row-span-2 row-start-3 rounded-lg md:row-start-1 md:row-span-6'>
            <Poster path={movie.poster_path} title={movie.title} />
          </div>

          <div className='flex justify-between items-center col-span-2 md:col-span-1'>
            <div className='font-bold text-2xl '>{movie.title}</div>
            <button className='cursor-pointer' onClick={handleClick}>
              {!isInList(movie.id) ? (
                <FaRegHeart className='size-8' />
              ) : (
                <FaHeart className='size-8' />
              )}
            </button>
          </div>

          <div className='opacity-60 col-span-2 md:col-span-1'>
            {movie.release_date} ★ {movie.omdbData.Rated} ★{" "}
            {movie.spoken_languages.map((s) => s.english_name).join(", ")} ★{" "}
            {Math.floor(movie.runtime / 60)}h{movie.runtime % 60}m
          </div>

          <div className='flex gap-2'>
            {movie.genres.map((g) => (
              <RoundedButton text={g.name} key={g.name} />
            ))}
          </div>

          <p>{movie.overview}</p>

          <div className='flex flex-col gap-3 opacity-80 col-span-2 row-start-6 md:col-span-1 md:row-start-5'>
            <hr />
            <div>Producers: {mainProducers}</div>
            <hr />
            <div>Writers: {mainWriters}</div>
            <hr />
            <div>Stars: {mainCast}</div>
          </div>

          <div className='flex items-center gap-3 text-lg col-span-2 md:col-span-1 md:place-self-end'>
            {movie.omdbData.Ratings?.map((r, i) => {
              return (
                <div key={r.Source} className='flex gap-1'>
                  {r.Source === "Internet Movie Database" && (
                    <SiImdb className='size-7' />
                  )}
                  {r.Source === "Rotten Tomatoes" && (
                    <SiRottentomatoes className='size-7' />
                  )}
                  {r.Source === "Metacritic" && (
                    <SiMetacritic className='size-7' />
                  )}
                  {r.Value}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className='grid xl:grid-cols-[2fr_1fr]'>
        <div className='w-full overflow-hidden'>
          <Section>
            <div className='font-bold text-xl m-5'>Cast</div>
            <Carousel>
              {movie.credits.cast.map((c) => (
                <CastMemberProfile data={c} key={c.id} />
              ))}
            </Carousel>
          </Section>
        </div>
        <Section>
          <div className='font-bold text-xl m-5'>Similar Titles</div>
          <div className="grid gap-2 p-2">
            {movie.similar.map((m) =>
              <SimilarTitle data={m} />
            )}
          </div>
        </Section>
      </div>
    </Container>
  );
}

function SimilarTitle({ data }: { data: MovieList }) {
  const navigate = useNavigate();

  function scrollToTop() {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }

  function handleClick() {
    navigate("/movie/" + data.id);
    scrollToTop();
  }

  return <div className="grid grid-cols-[1fr_4fr] gap-2"
    onClick={handleClick}
  >
    <Poster path={data.poster_path} title={data.title} />
    <div className="font-bold">{data.title} {data.release_date ? `(${data.release_date.split("-")[0]})` : ""}</div>
  </div>
}