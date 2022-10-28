import { StatusBar } from "expo-status-bar";
import React, { useContext } from "react";
import { StyleSheet, TextInput, View, Text, FlatList } from "react-native";
import Title from "../components/TextTitle";
import Movies from "../components/ListaFilmes";
import Constants from "expo-constants";
import TvShows from "../components/ListaSeries";

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Title text="Filmes em alta"></Title>
        <Movies />
        <Title text="Séries em alta"></Title>
        <TvShows />
      </View>
      {/* <StatusBar style='auto' hidden /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2d2d2d",
    paddingTop: Constants.statusBarHeight + 15
  },
  content: {
    padding: 8
  }
});
