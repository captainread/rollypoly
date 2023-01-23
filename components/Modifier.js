import { Button, Text, View } from "react-native";

const styles = require("../assets/styles.js");

export default function Modifier({ die, modifier, setModifier }) {
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
  );
}
