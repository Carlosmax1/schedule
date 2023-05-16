import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    padding: 25,
    gap: 40,
    paddingBottom: 90,
  },
  header: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  textContainer: {
    gap: 1,
  },
  textHello: {
    fontFamily: "Roboto_400Regular",
    color: "#AEAEAE",
    fontSize: 15,
  },
  textYou: {
    fontFamily: "Roboto_700Bold",
    color: "black",
    fontSize: 20,
  },
  textTasks: {
    fontFamily: "Roboto_700Bold",
    color: "#4AB584",
    fontSize: 20,
  },
  dateContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  dateText: {
    fontFamily: "Roboto_700Bold",
    fontSize: 28,
  },
  cardsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export { styles };
