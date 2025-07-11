import { useMemo, useState } from "react";
import WatchlistMovie from "../components/userlist/WatchlistMovie";
import { UserListMovie } from "../utils/types";
import { useUserList } from "../context/UserListContext";

const mockData = [
  {
    id: 123,
    title: "Movie Title",
    release_date: "03-07-2025",
    poster_path: "/some_path",
    watched: true,
    notes: "ascascascascbnbggfcsdsd",
  },
  {
    id: 1234,
    title: "Movie Title",
    release_date: "03-07-2025",
    poster_path: "/some_path",
    watched: false,
    notes: "sdfdshykukkukyu",
  },
  {
    id: 1233,
    title: "Movie Title",
    release_date: "03-07-2025",
    poster_path: "/some_path",
    watched: true,
    notes:
      "fwefwefhtrsjbdsfbdfsbkjdfskbjbkjdfsbksk dfskjhksdf slknflsdf sdlfnlsdflsdf sldfjlsjdflsjdlf sdkfjsljdflksdf sdklfjosdjfosjdf sdlkfjsldjfosdf sdflkjsdjfoisjdf s dflsdflsjldfs hhrrtrt",
  },
  {
    id: 1253,
    title: "Movie Title",
    release_date: "03-07-2025",
    poster_path: "/some_path",
    watched: false,
    notes: "",
  },
];

export default function UserListPage() {
  const [currentTab, setCurrentTab] = useState("all");
  const { list } = useUserList();

  const filteredData = useMemo(() => {
    if (currentTab === "all") return list;
    return list.filter((d) =>
      currentTab === "history" ? d.watched : !d.watched
    );
  }, [currentTab, list]);

  return (
    <div>
      <div className='w-full flex items-center justify-end divide-x p-2 bg-slate-900'>
        {["all", "watchlist", "history"].map((tab) => (
          <div
            className={`px-2 cursor-pointer capitalize ${
              currentTab === tab ? "underline" : ""
            }`}
            key={tab}
            onClick={() => setCurrentTab(tab)}
          >
            {tab === "all" ? "All Movies" : tab}
          </div>
        ))}
      </div>
      <div className='divide-y mx-auto xl:w-2/3 '>
        {filteredData.map((m) => (
          <WatchlistMovie data={m} key={m.id} />
        ))}
      </div>
    </div>
  );
}
