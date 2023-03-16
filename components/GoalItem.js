import { Pressable, StyleSheet, Text, View } from "react-native";

export default function GoalItem({ text, id, onRemoveGoal }) {
  const handleRemoveGoal = () => {
    onRemoveGoal(id);
  };

  return (
    <Pressable onPress={handleRemoveGoal}>
      <View style={styles.goalItem}>
        <Text>{text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    backgroundColor: "#ccc",
    marginBottom: 16,
    padding: 8,
    borderRadius: 8,
  },
});
