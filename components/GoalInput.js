import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

export default function GoalInput({ onAddGoal }) {
  const [inputValue, setInputValue] = useState("");

  const handleInput = (e) => {
    setInputValue(e);
  };

  const handleAddGoal = () => {
    onAddGoal(inputValue);
    setInputValue("");
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Your goals"
        style={styles.textInput}
        onChangeText={handleInput}
        value={inputValue}
      />
      <Button title="Add Goal" onPress={handleAddGoal} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    height: 100,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginBottom: 24,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    flexGrow: 1,
    marginRight: 8,
    padding: 8,
  },
});
