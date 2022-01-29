import { StyleSheet } from "react-native";

export const pageStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  headerContainer: {
    flex: 1,
    width: "100%",
    maxHeight: 80,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  pageTitle: {
    color: "#745F5F",
    fontSize: 30,
    textAlignVertical: "center",
  },
  listContainer: {
    flex: 1,
    width: "100%",
  },
  noteItem: {
    flex: 1,
    backgroundColor: "#616161",
    height: 150,
    borderBottomLeftRadius: 15,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    marginBottom: 15,
    padding: 10,
  },
  headerNoteItem: {
    flexDirection: "row",
    marginBottom: 5,
  },
  itemTitleBox: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
  },
  itemTitleText: {
    flex: 1,
    color: "#EBEBEB",
    fontSize: 22,
    textAlignVertical: "center",
    marginLeft: 10,
  },
  previewText: {
    flex: 1,
    color: "#b5b5b5",
    fontSize: 15,
  },
  creationDateBox: {
    color: "#ebebeb",
    alignItems: "center",
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  dateText: { color: "#EBEBEB", fontSize: 12, marginRight: 5 },
  floatingButton: {
    position: "absolute",
    right: 20,
    bottom: 20,
    width: "18%",
    aspectRatio: 1,
    borderBottomLeftRadius: 12,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    backgroundColor: "#735E5E",
    alignItems: "center",
    justifyContent: "center",
  },
});
