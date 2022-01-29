import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import LoginScreen from "./src/pages/Login";
import HomeScreen from "./src/pages/Home";
import NoteScreen from "./src/pages/Note";
import Note from "./src/models/Note";

export enum ActionType {
  edit,
  create,
}

type RootStackParamList = {
  login: undefined;
  home: undefined;
  note: { action: ActionType; note: Note };
};

export type loginProps = NativeStackScreenProps<RootStackParamList, "login">;
export type homeProps = NativeStackScreenProps<RootStackParamList, "home">;
export type noteProps = NativeStackScreenProps<RootStackParamList, "note">;

const RootStack = createStackNavigator<RootStackParamList>();

export default function Routes() {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="login">
        <RootStack.Screen
          name="login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />

        <RootStack.Screen
          name="home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />

        <RootStack.Screen
          name="note"
          component={NoteScreen}
          options={{ headerShown: false }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
