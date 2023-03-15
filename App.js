import { useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [goals, setGoals] = useState([]);

  const onAddGoal = (inputValue) => {
    if (inputValue.length > 0) {
      setGoals((currentGoals) => [
        ...currentGoals,
        { text: inputValue, id: Math.random().toString() },
      ]);
    }
  };

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={onAddGoal} />
      <View style={styles.listContainer}>
        <FlatList
          data={goals}
          renderItem={(itemData) => <GoalItem text={itemData.item.text} />}
          keyExtractor={(item, i) => item.id}
          alwaysBounceVertical={false}
        />
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
  listContainer: {
    flex: 1,
  },
});
