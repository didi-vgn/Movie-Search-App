import { useState } from "react";
import { UserListMovie } from "../../utils/types";
import { TbEdit, TbCheckbox } from "react-icons/tb";
import Rating from "./Rating";
import { TbDeviceTv } from "react-icons/tb";
import { TbDeviceTvOff } from "react-icons/tb";
import { useUserList } from "../../context/UserListContext";
import RoundedButton from "../RoundedButton";
import Poster from "../Poster";
import { useNavigate } from "react-router-dom";
import Section from "../Section";

export default function WatchlistMovie({ data }: { data: UserListMovie }) {
  const [edit, setEdit] = useState(false);
  const [notes, setNotes] = useState(data.notes);
  const { removeMovie, updateNotes, updateWatched } = useUserList();
  const navigate = useNavigate();

  function openNotes() {
    setEdit(true);
  }

  function closeNotes() {
    setEdit(false);
    updateNotes(data.id, notes);
  }

  return (
    <Section>
      <div className="p-2 xl:p-0 xl:bg-slate-700">
        <div className='grid grid-cols-[1fr_4fr] gap-2 md:grid-cols-[10rem_1fr] xl:gap-5 xl:p-2'>
          <div className='row-span-2'>
            <Poster path={data.poster_path} title={data.title} />
          </div>

          <div className='p-1 flex flex-col gap-1'>
            <div className='flex justify-between'>
              <div className='text-lg font-bold'>{data.title}</div>
              <button
                onClick={() =>
                  updateWatched(data.id, data.watched ? false : true)
                }
              >
                {data.watched ? (
                  <TbDeviceTv className='size-9' title='Mark as not watched' />
                ) : (
                  <TbDeviceTvOff className='size-9' title='Mark as watched' />
                )}
              </button>
            </div>

            <div className='text-sm opacity-70'>
              {data.release_date} ★ {Math.floor(data.runtime / 60)}h
              {data.runtime % 60}m{" "}
            </div>

            <div className='flex gap-2'>
              {data.genres.map((g) => (
                <RoundedButton text={g} key={g} />
              ))}
            </div>
          </div>

          <div className='flex'>
            <Rating rating={data.rating} id={data.id} />
          </div>
        </div>

        <div className='flex bg-slate-600 min-h-8 m-1 xl:m-3 p-1 rounded-md'>
          {edit ? (
            <textarea
              name='notes'
              id='notes'
              className='w-full'
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            ></textarea>
          ) : (
            <div className='grow-1 w-full'>{notes}</div>
          )}

          <button
            className='self-start '
            onClick={() => {
              edit ? closeNotes() : openNotes();
            }}
          >
            {edit ? (
              <TbCheckbox className='size-7' />
            ) : (
              <TbEdit className='size-7' />
            )}
          </button>
        </div>

        <div className='flex justify-end divide-x'>
          <button
            className='cursor-pointer px-2 hover:underline'
            onClick={() => navigate("/movie/" + data.id)}
          >
            More info
          </button>
          <button
            className='cursor-pointer px-2 hover:underline'
            onClick={() => removeMovie(data.id)}
          >
            Remove from list
          </button>
        </div>
      </div>
    </Section>
  );
}
