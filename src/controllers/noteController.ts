import firebase from "firebase/compat";
import Note, { NoteMap } from "../models/Note";
import { firestore, auth } from "../services/firebase";

const usersCollection = firestore.collection("users");

export const saveNote = async (note: Note) => {
  const userDoc = usersCollection.doc(auth.currentUser?.uid);
  await userDoc.set({ notes: { [note.id]: note.toMap() } }, { merge: true });
};

export const deleteNote = async (noteID: string) => {
  const userDoc = usersCollection.doc(auth.currentUser?.uid);
  await userDoc.set(
    { notes: { [noteID]: firebase.firestore.FieldValue.delete() } },
    { merge: true }
  );
};

type UserData = {
  notes: Record<string, NoteMap>;
};

export const getAllNotes = async (): Promise<Note[]> => {
  console.log("oi");
  const userDoc = await usersCollection.doc(auth.currentUser?.uid).get();
  const { notes } = (userDoc.data() ?? {}) as UserData;
  const noteList = [];
  for (const id in notes) {
    const { title, text, favorited, lastUpdate } = notes[id];
    noteList.push(new Note(id, title, text, favorited, new Date(lastUpdate)));
  }
  noteList.sort((a, b) => (a.lastUpdate < b.lastUpdate ? 1 : -1));
  return noteList;
};
