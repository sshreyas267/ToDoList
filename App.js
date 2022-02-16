import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import AddItem from "./AddItem";
import ListItems from "./ListItem";
import { v4 as uuidv4 } from "uuid";
import { StyleSheet, Text, SafeAreaView, ImageBackground, ScrollView } from "react-native";

export default function App() {
  const [list, setList] = useState([]);
  const addItem = (text) => {
    const newItem = {
      id: uuidv4(),
      task: text,
    };
    setList([newItem, ...list]);
  };

  const DeleteItem = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  };

  const Image= { uri: "https://w0.peakpx.com/wallpaper/784/284/HD-wallpaper-red-grey-abstract-background-black-colors-fade-gradient-oneplus-oneplus-6t-texture-ultra.jpg" };
 
  return (
    <ImageBackground source={Image} resizeMode="cover" style={styles.image}>
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}> 
      <Text style={{color: "red", fontSize: 25, paddingLeft: 66}}>To-Do-List</Text>
      <AddItem addItem={addItem}></AddItem>
      <ListItems deleteItem={DeleteItem} listItems={list}></ListItems>
      <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 260,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    flex: 1,
    justifyContent: "center",
  },

  scrollView: {
    marginHorizontal: 20
  }


});
