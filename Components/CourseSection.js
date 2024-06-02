import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

const CourseSection = () => {
  const ongoingTasksData = [
    "Mobile App Development",
    "Web Development",
    "Push Ups",
    "React Native Project",
    "Grocery Shopping",
    "Cooking Dinner",
  ];
  return (
    <View style={styles.container}>
      <FlatList
        data={ongoingTasksData}
        renderItem={({ item }) => (
          <View style={styles.flatListBox}>
            <Text>{item}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default CourseSection;

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  flatListBox: {
    color: "black",
    marginVertical: 20,
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: "#E8D1BA",
    borderRadius: 15,
    fontSize: 120,
    height: 100,
    padding: 40,
    backgroundColor: "#fff",
  },
});
