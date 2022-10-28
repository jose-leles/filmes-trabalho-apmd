import { Text, StyleSheet, View } from "react-native";

export default function Title(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: "#f06",
    borderStyle: "solid",
    borderLeftWidth: 6,
    borderRadius: 1,
    marginVertical: 10
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    paddingLeft: 4
  }
});
