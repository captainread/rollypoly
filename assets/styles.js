import { StyleSheet } from "react-native";

module.exports = StyleSheet.create({
  container: {
    paddingVertical: 80,
    flex: 1,
    backgroundColor: "#f0f0f0",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    color: "#444646",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    margin: 10,
    header: {
      color: "#444646",
      fontWeight: "bold",
      fontSize: 40,
    },
  },
  image: {
    height: 120,
    resizeMode: "contain",
    marginVertical: 20,
  },
  dice: {
    flex: 2,
    width: 150,
    height: 100,
  },
  grid: {
    flex: 4,
    marginHorizontal: "auto",
    width: "100%",
  },
  row: {
    flex: 1,
    flexDirection: "row",
  },
  col: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  dieWrapper: {
    marginHorizontal: "auto",
    width: "100%",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 10,
  },
  selectedDie: {
    width: "50%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  modifier: {
    width: "50%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  roll: {
    marginVertical: 20,
    padding: 10,
    flexDirection: "column",
  },
  historyWrapper: {
    borderColor: "#fff",
    borderWidth: 5,
    borderRadius: 20,
    flex: 2,
    color: "white",
    alignItems: "center",
    width: "90%",
  },
  historyContainer: {
    flexDirection: "row",
    width: "90%",
    padding: 10,
  },
  history: {
    color: "#444646",
    fontSize: 20,
    paddingHorizontal: 10,
  },
});
