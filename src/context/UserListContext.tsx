import React, { createContext, useContext, useEffect, useState } from "react";
import { UserListMovie } from "../utils/types";

type UserListContextType = {
  list: UserListMovie[];
  addMovie: (movie: UserListMovie) => void;
  removeMovie: (id: number) => void;
  isInList: (id: number) => boolean;
  updateRating: (id: number, val: number) => void;
  updateNotes: (id: number, val: string) => void;
  updateWatched: (id: number, val: boolean) => void;
};

const UserListContext = createContext<UserListContextType | undefined>(
  undefined
);

export function useUserList() {
  const context = useContext(UserListContext);
  if (!context) {
    throw new Error("no context");
  }
  return context;
}

export function UserListProvider({ children }: { children: React.ReactNode }) {
  const [list, setList] = useState<UserListMovie[]>(() => {
    const stored = localStorage.getItem("userList");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    const stored = localStorage.getItem("userList");
    if (stored) setList(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("userList", JSON.stringify(list));
  }, [list]);

  function addMovie(movie: UserListMovie) {
    if (list.some((m) => m.id === movie.id)) return;
    setList((prev) => [...prev, movie]);
  }

  function removeMovie(id: number) {
    setList((prev) => prev.filter((m) => m.id !== id));
  }

  function isInList(id: number) {
    return list.some((m) => m.id === id);
  }

  function updateRating(id: number, val: number) {
    const newList = list.map((m) =>
      m.id === id ? { ...m, rating: val, watched: true } : m
    );
    setList(newList);
  }

  function updateNotes(id: number, val: string) {
    const newList = list.map((m) => (m.id === id ? { ...m, notes: val } : m));
    setList(newList);
  }

  function updateWatched(id: number, val: boolean) {
    const newList = list.map((m) =>
      m.id === id ? { ...m, watched: val, rating: 0 } : m
    );
    setList(newList);
  }

  return (
    <UserListContext.Provider
      value={{
        list,
        addMovie,
        removeMovie,
        isInList,
        updateRating,
        updateNotes,
        updateWatched,
      }}
    >
      {children}
    </UserListContext.Provider>
  );
}
