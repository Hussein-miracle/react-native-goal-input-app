import React from "react";
import { View, StyleSheet, Text, Touchable,TouchableOpacity } from "react-native";

const GoalItem = ({ text, id ,handleDeleteGoal}) => {
  const handlePress = () => {
    handleDeleteGoal(id);
  }
  return (
    <TouchableOpacity activeOpacity={0.8} onLongPress={handlePress}>
      <View style={styles.listItem}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    padding: 10,
    borderColor: "black",
    borderWidth: 1,
    backgroundColor: "#212121",
    color: "yellow",
    marginVertical: 10,
  },
  text:{
    color: "mediumspringgreen",

  }
});
