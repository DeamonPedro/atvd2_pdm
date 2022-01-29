import { StyleSheet } from "react-native";

export const pageStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  formContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  inputBox: {
    marginBottom: 20,
    width: "90%",
    height: 55,
    flexDirection: "row",
  },
  inputIcon: {
    backgroundColor: "#735E5E",
    padding: 12.5,
    borderBottomLeftRadius: 8,
    borderTopLeftRadius: 8,
  },
  textInput: {
    flex: 1,
    borderColor: "#735E5E",
    borderWidth: 3,
    borderTopRightRadius: 8,
    borderLeftWidth: 0,
    padding: 10,
    fontSize: 20,
  },
  loginButton: {
    backgroundColor: "#262626",
    height: 55,
    borderRadius: 8,
    minWidth: "90%",
    alignItems: "center",
    justifyContent: "center",
  },
  loginTextButton: {
    flex: 1,
    fontSize: 30,
    textAlignVertical: "center",
    color: "#616161",
  },
});
