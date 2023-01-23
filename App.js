import { Image, View } from "react-native";

import Dice from "./components/Dice.js";
import Modifier from "./components/Modifier.js";
import Roll from "./components/Roll.js";
import RollHistory from "./components/RollHistory.js";
import { useState } from "react";

const styles = require("./assets/styles.js");

export default function App() {
  const [rollHistory, setRollHistory] = useState([]);
  const [die, setDie] = useState();
  const [modifier, setModifier] = useState(0);

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("./assets/rollypoly.png")} />
      <Dice die={die} setDie={setDie} />
      <Modifier die={die} modifier={modifier} setModifier={setModifier} />
      <Roll die={die} rollHistory={rollHistory} setRollHistory={setRollHistory} modifier={modifier} />
      <RollHistory rollHistory={rollHistory} setRollHistory={setRollHistory} />
    </View>
  );
}
