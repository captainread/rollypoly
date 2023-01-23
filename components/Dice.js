import { ImageBackground, TouchableOpacity, View } from "react-native";
const styles = require("../assets/styles.js");

const Row = ({ children }) => <View style={styles.row}>{children}</View>;

const Col = ({ children }) => {
  return <View style={styles.col}>{children}</View>;
};

const DiceButton = ({ onPress, value }) => (
  <TouchableOpacity onPress={onPress}>
    <ImageBackground source={images[value]} style={styles.dice} />
  </TouchableOpacity>
);

const images = {
  d20: require(`../assets/d20.png`),
  d12: require(`../assets/d12.png`),
  d10: require(`../assets/d10.png`),
  d8: require(`../assets/d8.png`),
  d6: require(`../assets/d6.png`),
  d4: require(`../assets/d4.png`),
};

export default function Dice({ die, setDie }) {
  function selectDie(value) {
    setDie(value);
  }

  return (
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
  );
}
