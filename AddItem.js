import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

export default function AddItem(props) {
  const [item, setItem] = useState("");

  return (
    <View>
      <Text style={{fontSize: 15, color: "orange"}}>Add Task to the List (Remove Later)</Text>
      <TextInput
        onChangeText={(textVal) => {
          setItem(textVal);
        }}
        style={{
          borderBottomColor: "white",
          backgroundColor: "#C0C0C0",
          margin: 4,

        }}
      ></TextInput>
      <Button
      style={{
        width: 10
      }}
        onPress={() => {
          props.addItem(item);
        }}
        title="Add Task"
      ></Button>
    </View>
  );
}
