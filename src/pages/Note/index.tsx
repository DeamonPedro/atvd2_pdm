import * as React from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from "react-native";
import { Trash, Edit3, Save, ChevronLeft, Star } from "react-native-feather";
import { pageStyles } from "./styles";
import { ActionType, noteProps } from "../../../routes";
import Note from "../../models/Note";
import { useAppContext } from "../../contexts/appContext";
import { deleteNote, saveNote } from "../../controllers/noteController";

const NoteScreen: React.FC<any> = ({ navigation, route }: noteProps) => {
  const { action, note } = route.params;

  const actionText = {
    [ActionType.create]: "New",
    [ActionType.edit]: "Edit",
  };

  const [title, setTitle] = React.useState(note.title);
  const [text, setText] = React.useState(note.text);
  const [isFavorited, setFavorited] = React.useState(note.favorited);
  const [enableSave, setEnableSave] = React.useState(false);
  const [isSaving, setSaving] = React.useState(false);
  const { noteList, setNoteList } = useAppContext();

  const onChangeTitle = (newTitle: string) => {
    setTitle(newTitle);
  };

  const onChangeText = (newText: string) => {
    setText(newText);
  };

  const toggleFavorited = async () => {
    note.favorited = !isFavorited;
    await saveNote(note);
    setFavorited(!isFavorited);
  };

  const onSaveNote = async () => {
    note.title = title;
    note.text = text;
    note.lastUpdate = Date.now();
    setSaving(true);
    await saveNote(note);
    setSaving(false);
    setNoteList((notes) => {
      if (notes.indexOf(note) == -1) {
        notes.push(note);
        notes.sort((a, b) => (a.lastUpdate < b.lastUpdate ? 1 : -1));
      }
      return notes.slice();
    });
  };

  const onDeleteNote = async () => {
    await deleteNote(note.id);
    const noteIndex = noteList.indexOf(note);
    if (noteIndex != -1) {
      setNoteList((notes) => {
        notes.splice(noteIndex, 1);
        notes.sort((a, b) => (a.lastUpdate < b.lastUpdate ? 1 : -1));
        return notes.slice();
      });
    }
    navigation.goBack();
  };

  React.useEffect(() => {
    setEnableSave(note.title != title || note.text != text);
  }, [title, text, noteList]);

  return (
    <LinearGradient
      style={pageStyles.container}
      colors={["#161616", "#383838"]}
    >
      <View style={pageStyles.headerContainer}>
        <ChevronLeft
          width={35}
          height={35}
          color={"#745F5F"}
          onPress={() => navigation.goBack()}
        />
        <Text style={pageStyles.pageTitle}>{actionText[action] + " note"}</Text>
      </View>
      <View style={pageStyles.noteContainer}>
        <View style={pageStyles.headerNoteItem}>
          <Edit3 width={22} height={22} color="#b5b5b5" />
          <TextInput
            value={title}
            style={pageStyles.itemTitleText}
            onChangeText={(text) => onChangeTitle(text)}
          />
        </View>
        <TextInput
          multiline
          value={text}
          style={pageStyles.bodyText}
          onChangeText={(text) => onChangeText(text)}
        />
      </View>
      <View style={pageStyles.optionsContainer}>
        <TouchableOpacity
          style={[pageStyles.option, { backgroundColor: "#735E5E" }]}
          onPress={onDeleteNote}
        >
          <Trash width={40} height={40} color={"#b5b5b5"} />
        </TouchableOpacity>
        <TouchableOpacity style={pageStyles.option} onPress={toggleFavorited}>
          <Star
            fill={isFavorited ? "#b5b5b5" : undefined}
            width={40}
            height={40}
            color={"#b5b5b5"}
          />
        </TouchableOpacity>
        <TouchableOpacity
          disabled={!enableSave}
          style={[
            pageStyles.option,
            { backgroundColor: enableSave ? "#616161" : "#3f3f3f" },
          ]}
          onPress={onSaveNote}
        >
          {isSaving ? (
            <ActivityIndicator color={"#616161"} size={"large"} />
          ) : (
            <Save
              width={40}
              height={40}
              color={enableSave ? "#b5b5b5" : "#616161"}
            />
          )}
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default NoteScreen;
