import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

import facebookScreen from "./screens/facebookScreen";
import instaScreen from "./screens/instaScreen";

export default class App extends React.Component {
  render() {
    <text style={styles.textcontainer}>welcome to buzz app</text>
    return <AppContainer />;
  }
}

const TabNavigator = createBottomTabNavigator({
  insta: { screen: instaScreen },
  facebook: { screen: facebookScreen }
});

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center"
  },
  textcontainer: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center"
  }
});
