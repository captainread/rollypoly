import { Alert, Button, Text, View } from "react-native";

const styles = require("../assets/styles.js");

export default function Roll({ die, rollHistory, setRollHistory, modifier }) {
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

  return (
    <View style={styles.roll}>
      <Button color="#37B9A0" title="    Roll    " onPress={() => rollDice()}></Button>
    </View>
  );
}
