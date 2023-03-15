import { StyleSheet, Text, View } from "react-native";

export default function GoalItem({ text }) {
  return (
    <View style={styles.goalItem}>
      <Text>{text}</Text>
    </View>
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
