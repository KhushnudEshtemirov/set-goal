import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
} from "react-native";

export default function App() {
  const [text, setText] = useState("");
  const [listGoals, setListGoals] = useState([]);

  const handleChange = (enteredText) => {
    setText(enteredText);
  };

  const handlePress = () => {
    setListGoals((currentGoal) => [...currentGoal, text]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.addContainer}>
        <TextInput
          style={styles.inputText}
          placeholder="Enter your goal!"
          onChangeText={handleChange}
        />
        <Button title="Add goal" onPress={handlePress} />
      </View>
      <View style={styles.goalsContainer}>
        <ScrollView alwaysBounceVertical={false}>
          {listGoals.map((goal, idx) => (
            <View style={styles.goalItem} key={idx}>
              <Text style={styles.goalText}>{goal}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  addContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  inputText: {
    width: "70%",
    padding: 8,
    borderWidth: 1,
    borderColor: "#cccccc",
  },
  goalsContainer: {
    flex: 5,
  },
  goalItem: {
    marginVertical: 8,
    padding: 8,
    borderRadius: 5,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
  },
});
