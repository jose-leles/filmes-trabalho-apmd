import React, { useContext } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Card from "../components/Card";
import { FavoritosContext } from "../contexts/FavoritosProvider";
import Constants from "expo-constants";
import Title from "../components/TextTitle";

export default function Bookmarked() {
  const { favoritos } = useContext(FavoritosContext);

  if (favoritos.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Seus Filmes e series adicionados em favoritos irão aparecer aqui.
        </Text>
      </View>
    );
  }

  const filmes = favoritos.filter((media) => media.media_type === "movie");
  const series = favoritos.filter((media) => media.media_type === "tv");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favoritos</Text>
      <Text style={styles.text}>
        {"Quantidade de favoritados: " + quantity}
      </Text>
      <View style={filmes.length ? { display: "block" } : { display: "none" }}>
        <Title text="Filmes"></Title>
        <FlatList
          data={filmes}
          renderItem={({ item }) => <Card media={item}></Card>}
          horizontal
        ></FlatList>
      </View>
      <View style={series.length ? { display: "block" } : { display: "none" }}>
        <Title text="Series"></Title>
        <FlatList
          data={series}
          renderItem={({ item }) => <Card media={item}></Card>}
          horizontal
        ></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2d2d2d",
    padding: 15,
    paddingTop: Constants.statusBarHeight + 15
  },
  title: {
    color: "#fff",
    fontSize: 30,
    textAlign: "center"
  },
  text: {
    color: "#fff",
    fontSize: 20,
    marginVertical: 10,
    textAlign: "center"
  }
});
