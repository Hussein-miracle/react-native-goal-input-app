import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  FlatList,
} from "react-native";

// import Button from "./components/button/button";
import GoalItem from "./components/GoalItem/GoalItem";
import GoalInput from "./components/GoalInput/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [show,setShow] = useState(false);

  const handleGoal = (enteredGoal) => {
    // console.log(enteredGoal, 'eg')
    const goal = {
      id: Math.random().toString() + `${enteredGoal} enteredGoal`,
      key: Math.random().toString() + `${enteredGoal}enteredGoal`,
      text: `${enteredGoal}`,
    };
    // console.log(goal);
    setCourseGoals((currentGoals) => {
      return [...currentGoals, goal];
    });
  };

  const handleDeleteGoal = (id) => {
    const goals = [...courseGoals].filter((g) => {
      return g.id !== id;
    });
    setCourseGoals([...goals]);
  };

  const handleModal = () => {
    setShow(!show);
  }
  return (
    <View style={styles.screen}>
      <Button title="ADD Goal " onPress={handleModal} />
      <GoalInput handleAddGoal={handleGoal} show={show} handleModal={handleModal}/>
      <FlatList
        keyExtractor={(item, index) => {
          return item.id || item.key;
        }}
        data={courseGoals}
        renderItem={({ item }) => {
          return (
            <GoalItem
              id={item.id}
              text={item.text}
              handleDeleteGoal={handleDeleteGoal}
            />
          );
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
