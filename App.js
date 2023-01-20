import { Alert, Button, FlatList, Image, ImageBackground, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";

import { useFonts } from "expo-font";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#444646",
    textAlign: "center",
    fontSize: 20,
    // fontWeight: "bold",
    margin: 10,
    header: {
      color: "#444646",
      fontWeight: "bold",
      fontSize: 40,
    },
  },
  image: {
    margin: 20,
    width: "90%",
    resizeMode: "contain",
  },
  dice: {
    width: 150,
    height: 100,
  },
  grid: {
    flex: 3,
    marginHorizontal: "auto",
    width: "100%",
  },
  row: {
    height: 100,
    margin: 5,
    flexDirection: "row",
    // backgroundColor: "red",
  },
  col: {
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "lightblue",
    flex: 1,
  },
  lastRolled: {
    flex: 1,
  },
  historyContainer: {
    flex: 1,
    flexDirection: "row",
    padding: 10,
  },
  history: {
    // backgroundColor: "pink",
    padding: 10,
  },
});

const Row = ({ children }) => <View style={styles.row}>{children}</View>;

const Col = ({ children }) => {
  return <View style={styles.col}>{children}</View>;
};

const images = {
  d20: require(`./assets/d20.png`),
  d12: require(`./assets/d12.png`),
  d10: require(`./assets/d10.png`),
  d8: require(`./assets/d8.png`),
  d6: require(`./assets/d6.png`),
  d4: require(`./assets/d4.png`),
};

const DiceButton = ({ onPress, value }) => (
  <TouchableOpacity onPress={onPress}>
    <ImageBackground source={images[value]} style={styles.dice} />
  </TouchableOpacity>
);

export default function App() {
  const [rollHistory, setRollHistory] = useState([]);
  const [lastDie, setLastDie] = useState();

  function rollDice(max) {
    let answer = String(1 + Math.floor(Math.random() * max));
    // Alert.alert("You rolled...", answer, [{ text: "OK" }]);
    setLastDie(max);
    setRollHistory((rollHistory) => [...rollHistory, answer]);
    if (rollHistory.length > 9) {
      rollHistory.shift();
    }
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("./assets/rollypoly.png")} />

      <View style={styles.grid}>
        <Row>
          <Col>
            <DiceButton value="d20" size="sm" onPress={() => rollDice(20)} />
          </Col>
          <Col>
            <DiceButton value="d12" size="sm" onPress={() => rollDice(12)} />
          </Col>
          <Col>
            <DiceButton value="d10" size="sm" onPress={() => rollDice(10)} />
          </Col>
        </Row>
        <Row>
          <Col>
            <DiceButton value="d8" size="sm" onPress={() => rollDice(8)} />
          </Col>
          <Col>
            <DiceButton value="d6" size="sm" onPress={() => rollDice(6)} />
          </Col>
          <Col>
            <DiceButton value="d4" size="sm" onPress={() => rollDice(4)} />
          </Col>
        </Row>
      </View>

      {lastDie ? (
        <View style={styles.lastRolled}>
          <Text style={styles.text.header}>Result: {rollHistory[rollHistory.length - 1]}</Text>
          <Text style={styles.text}>(d{lastDie})</Text>
        </View>
      ) : null}

      <Text style={styles.text}>Roll History:</Text>
      <View style={styles.historyContainer}>
        {rollHistory.map((num, index) => {
          return (
            <Text key={index} style={styles.history}>
              {num}
            </Text>
          );
        })}
      </View>

      {/* {showValue ? <Text>{rollHistory}</Text> : null} */}
    </View>
  );
}
