import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 15,
    height: 60,
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 30,
    backgroundColor: "#4AB584",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    fontFamily: "Roboto_700Bold",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
});

export { styles };
