import React from "react";
import { View, Text, TouchableOpacity, FlatList, Button } from "react-native";

export default function ListItems(props) {
  return (
    <View>
      <FlatList
        data={props.listItems}
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity
              style={{
                padding: 15,
                backgroundColor: "#C0C0C0",
                borderBottomWidth: 2,
                borderColor: "#404040",
                width: 265,
                marginTop: 6,
                justifyContent: "space-between",
                flexDirection: "row",
                display: "flex",
                flexBasis: 200
              }}
            >
              <Text style={{fontSize: 15}}> {item.task}</Text>
              <Button
                title="Remove"
                onPress={() => {
                  props.deleteItem(item.id);
                }}
              ></Button>
            </TouchableOpacity>
          </View>
        )}
      ></FlatList>
    </View>
  );
}
