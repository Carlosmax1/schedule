import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "80%",
    height: 140,
    backgroundColor: "#8086FF",
    borderRadius: 15,
    padding: 20,
    justifyContent: "space-between",
  },
  title: {
    fontFamily: "Roboto_700Bold",
    color: "#f9f9f9",
    fontSize: 20,
  },
  infoContainer: {
    gap: 10,
  },
  time: {
    fontFamily: "Roboto_400Regular",
    color: "#f9f9f9",
    fontSize: 15,
  },
  info: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  buttonContainer: {
    gap: 5,
    position: "absolute",
    top: 10,
    right: 10,
  },
  circle: {
    width: 5,
    height: 5,
    backgroundColor: "#f9f9f9",
    borderRadius: 5,
  },
});

export { styles };
