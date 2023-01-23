import { Button, Text, View } from "react-native";

const styles = require("../assets/styles.js");

export default function RollHistory({ rollHistory, setRollHistory }) {
  return (
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
      <View>
        <Button color="#37B9A0" title="Clear history" onPress={() => setRollHistory([])}></Button>
      </View>
    </View>
  );
}
