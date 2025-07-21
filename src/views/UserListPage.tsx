import { useMemo, useState } from "react";
import WatchlistMovie from "../components/userlist/WatchlistMovie";
import { useUserList } from "../context/UserListContext";

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
            className={`px-2 cursor-pointer capitalize ${currentTab === tab ? "underline" : ""
              }`}
            key={tab}
            onClick={() => setCurrentTab(tab)}
          >
            {tab === "all" ? "All Movies" : tab}
          </div>
        ))}
      </div>
      <div className="grid divide-y xl:w-2/3 xl:mx-auto">
        {filteredData.map((m) => (
          <WatchlistMovie data={m} key={m.id} />
        ))}
      </div>
    </div>
  );
}
