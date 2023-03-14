import { useState } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [goals, setGoals] = useState([]);

  const handleInput = (e) => {
    setInputValue(e);
  };

  const handleAddClick = () => {
    if (inputValue.length > 0) {
      setGoals((currentGoals) => [...currentGoals, inputValue]);
    }
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Your goals"
          style={styles.textInput}
          onChangeText={handleInput}
        />
        <Button title="Add Goal" onPress={handleAddClick} />
      </View>
      <View style={styles.listContainer}>
        <ScrollView alwaysBounceVertical={false}>
          {goals.map((goal, i) => (
            <View key={goal + i} style={styles.listItem}>
              <Text>{goal}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 16,
  },
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
  listContainer: {
    flex: 1,
  },
  listItem: {
    backgroundColor: "#ccc",
    marginBottom: 16,
    padding: 8,
    borderRadius: 8,
  },
});
