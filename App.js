import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import firebase from "firebase";

//importing screens
import Lang from "./screens/Lang";
import Login from "./screens/Login";
import Home from "./screens/Home";
import SignUp from "./screens/SignUp";
import Search from "./screens/Search";
import NewPost from "./screens/NewPost";
import Settings from "./screens/Settings";
import Recovery from "./screens/Recovery";
import DetailedView from "./screens/DetailedView";

export default function App() {
  const Stack = createStackNavigator();

  if (firebase.apps.length === 0) {
    firebase.initializeApp({});
    console.log("if ran");
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: Platform.OS === "android" ? false : true,
        }}
      >
        <Stack.Screen name="Language" component={Lang}></Stack.Screen>
        <Stack.Screen name="Login" component={Login}></Stack.Screen>
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
        <Stack.Screen name="Sign Up" component={SignUp}></Stack.Screen>
        <Stack.Screen name="Search" component={Search}></Stack.Screen>
        <Stack.Screen name="New Post" component={NewPost}></Stack.Screen>
        <Stack.Screen name="Settings" component={Settings}></Stack.Screen>
        <Stack.Screen
          name="Account Recovery"
          component={Recovery}
        ></Stack.Screen>
        <Stack.Screen
          name="Detailed View"
          component={DetailedView}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
