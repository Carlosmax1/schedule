import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 5,
  },
  circle: {
    width: 20,
    height: 20,
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "#8ACAFF",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
  },
  row: {
    width: 2,
    height: 130,
    backgroundColor: "#8ACAFF",
    borderRadius: 3,
  },
  active: {
    width: 10,
    height: 10,
    backgroundColor: "#8ACAFF",
    borderRadius: 10,
  },
});

export { styles };
