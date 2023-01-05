import { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const GoalInput = ({ handleAddGoal,show,handleModal }) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const handleInput = (value) => {
    // console.log("goal INput:>", value);
    setEnteredGoal(value);
    // console.log(enteredGoal, 'eg src')
  };

  const handlePress = () => {
    handleAddGoal(enteredGoal);
    handleModal();
    setEnteredGoal("");
  };

  return (
    <Modal visible={show} animationType='slide' style={styles.modal} >
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Add Course Goal"
          style={styles.input}
          onChangeText={handleInput}
          value={enteredGoal}
        />
        <Button title="ADD" onPress={handlePress} />
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  modal:{
    paddingHorizontal:8,
    paddingTop:10,
  },
  inputContainer: {
    alignSelf:'center',
    // flexDirection: "column",
    flex:1,
    justifyContent: "center",
    width: "85%",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginBottom:5,
  },
});
