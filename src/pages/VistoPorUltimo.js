import React, { useContext } from "react";
import { VistoPorUltimoProvider } from "../contexts/VistoPorUltimoProvider";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Card from "../components/Card";
import Constants from "expo-constants";
import Title from "../components/TextTitle";

export default function LastSeen() {
  const { filmes, series } = useContext(VistoPorUltimoProvider);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Últimos catálogos acessados..</Text>
      <View
        style={filmes.length >= 0 ? { display: "block" } : { display: "none" }}
      >
        <Title text="Filmes"></Title>
        <FlatList
          data={filmes}
          renderItem={({ item }) => <Card media={item}></Card>}
          horizontal
        ></FlatList>
      </View>
      <View
        style={series.length >= 0 ? { display: "block" } : { display: "none" }}
      >
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
    fontSize: 25,
    textAlign: "center"
  },
  text: {
    color: "#fff",
    fontSize: 20,
    marginVertical: 10,
    textAlign: "center"
  }
});
