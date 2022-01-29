import * as React from "react";
import { Bookmark, Edit3, Star, Calendar, Edit } from "react-native-feather";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useAppContext } from "../../contexts/appContext";
import { homeProps, ActionType } from "../../../routes";
import { LinearGradient } from "expo-linear-gradient";
import { formatTime } from "../../utils/date_tools";
import { pageStyles } from "./styles";
import Note from "../../models/Note";
import { getAllNotes } from "../../controllers/noteController";

const HomeScreen: React.FC<any> = ({ navigation, route }: homeProps) => {
  const { noteList, setNoteList } = useAppContext();

  const editNote = (note: Note) => {
    navigation.navigate("note", {
      action: ActionType.edit,
      note,
    });
  };

  const createNote = () => {
    navigation.navigate("note", {
      action: ActionType.create,
      note: Note.createEmpty(),
    });
  };

  const NoteItem = (note: Note) => {
    const { id, title, text, favorited, lastUpdate } = note;
    return (
      <TouchableOpacity
        key={id}
        style={pageStyles.noteItem}
        onPress={() => editNote(note)}
      >
        <View style={pageStyles.headerNoteItem}>
          <View style={pageStyles.itemTitleBox}>
            <Edit3 width={22} height={22} color="#b5b5b5" />
            <Text style={pageStyles.itemTitleText}>{title}</Text>
          </View>
          {favorited && <Star width={22} height={22} color={"#BC9713"} />}
        </View>
        <Text style={pageStyles.previewText} ellipsizeMode="tail">
          {text}
        </Text>
        <View style={pageStyles.creationDateBox}>
          <Text style={pageStyles.dateText}>{formatTime(lastUpdate)}</Text>
          <Calendar width={22} height={22} color={"#b5b5b5"} />
        </View>
      </TouchableOpacity>
    );
  };

  React.useEffect(() => {
    const unsubscribe = navigation.addListener("focus", async () => {
      if (navigation.isFocused()) {
        const list = await getAllNotes();
        const missing = list.filter((item) => noteList.indexOf(item) < 0);
        if (missing.length) {
          setNoteList(list);
        }
      }
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <LinearGradient
      style={pageStyles.container}
      colors={["#161616", "#383838"]}
    >
      <View style={pageStyles.headerContainer}>
        <Text style={pageStyles.pageTitle}>Notes</Text>
        <Bookmark width={30} height={30} color={"#745F5F"} />
      </View>
      <ScrollView style={pageStyles.listContainer}>
        {noteList.map((note) => NoteItem(note))}
      </ScrollView>
      <TouchableOpacity style={pageStyles.floatingButton} onPress={createNote}>
        <Edit width={"60%"} height={"60%"} color={"#b5b5b5"} />
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default HomeScreen;
