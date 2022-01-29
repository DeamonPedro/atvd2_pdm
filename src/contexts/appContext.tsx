import React, { useState, useContext, createContext } from "react";
import Note from "../models/Note";

interface AppContextInterface {
  noteList: Note[];
  setNoteList: React.Dispatch<React.SetStateAction<Note[]>>;
}

export const AppContext = createContext({} as AppContextInterface);

export const AppProvider = ({ children }: any) => {
  const [noteList, setNoteList] = useState([] as Note[]);

  return (
    <AppContext.Provider
      value={{
        noteList,
        setNoteList,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
