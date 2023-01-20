import { Alert, Button, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { useState } from "react";

const styles = StyleSheet.create({
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
  clear: {
    // flex: 1,
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
  const [die, setDie] = useState();
  let [modifier, setModifier] = useState(0);

  function rollDice() {
    let result = 1 + Math.floor(Math.random() * die);
    let answer = result + modifier;

    if (!die) {
      Alert.alert(`Hold your horses!`, "\nYou need to select a die first.\n\nTap your icon of choice, add a modifier if needed, then hit roll.", [
        { text: "OK" },
      ]);
    } else {
      if (modifier) {
        let message = `\nYou rolled ${result}\n\nModified by ${modifier ? (modifier > 0 ? "+" : "") : ""}${
          modifier ? modifier : ""
        }\n\nFor a final result of ${answer}`;
        Alert.alert(`Here goes your d${die}!`, message, [{ text: "OK" }]);
      } else if (modifier === 0) {
        let message = `\nYou rolled ${answer}`;
        Alert.alert(`Here goes your d${die}!`, message, [{ text: "OK" }]);
      }
      setRollHistory((rollHistory) => [...rollHistory, answer]);
      if (rollHistory.length > 7) {
        rollHistory.shift();
      }
    }
  }

  function selectDie(value) {
    setDie(value);
  }

  function changeMod(x) {
    if (x === "+") {
      setModifier(modifier + 1);
    } else if (x === "-") {
      setModifier(modifier - 1);
    } else {
      setModifier(0);
    }
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("./assets/rollypoly.png")} />

      <View style={styles.grid}>
        <Row>
          <Col>
            <DiceButton value="d20" size="sm" onPress={() => selectDie(20)} />
          </Col>
          <Col>
            <DiceButton value="d12" size="sm" onPress={() => selectDie(12)} />
          </Col>
          <Col>
            <DiceButton value="d10" size="sm" onPress={() => selectDie(10)} />
          </Col>
        </Row>
        <Row>
          <Col>
            <DiceButton value="d8" size="sm" onPress={() => selectDie(8)} />
          </Col>
          <Col>
            <DiceButton value="d6" size="sm" onPress={() => selectDie(6)} />
          </Col>
          <Col>
            <DiceButton value="d4" size="sm" onPress={() => selectDie(4)} />
          </Col>
        </Row>
      </View>

      <View style={styles.dieWrapper}>
        {die ? (
          <View style={styles.selectedDie}>
            <Text style={styles.text.header}>
              d{die}
              {modifier ? modifier > 0 ? <Text> +{modifier}</Text> : <Text> {modifier}</Text> : null}
            </Text>
          </View>
        ) : null}

        <View style={styles.modifier}>
          <Button color="#444646" title="+ 1" onPress={() => changeMod("+")} />
          <Button color="#444646" title="- 1" onPress={() => changeMod("-")} />
          <Button color="#444646" title="Reset" onPress={() => changeMod(0)} />
        </View>
      </View>

      <View style={styles.roll}>
        <Button color="#37B9A0" title="    Roll    " onPress={() => rollDice()}></Button>
      </View>

      <View style={styles.historyWrapper}>
        <Text style={styles.text}>
          <Text style={{ fontStyle: "italic", fontWeight: "bold" }}>Previous rolls:</Text>
        </Text>
        <View style={styles.historyContainer}>
          {rollHistory.map((num, index) => {
            return (
              <Text key={index} style={styles.history}>
                {num}
              </Text>
            );
          })}
        </View>
        <View style={styles.roll}></View>
        <View style={styles.clear}>
          <Button color="#37B9A0" title="Clear history" onPress={() => setRollHistory([])}></Button>
        </View>
      </View>
    </View>
  );
}
