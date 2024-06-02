import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "react-native";

const CategorySection = () => {
  return (
    <View style={styles.thirdCointainer}>
      <Text style={{ fontSize: 20, fontWeight: "700", lineHeight: 24 }}>
        Categories
      </Text>
      <View style={styles.sectionBoxContainer}>
        <View style={styles.sectionBox}>
          <Text style={{ fontSize: 16, fontWeight: "700", lineHeight: 19 }}>
            Exercise
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "400",
              lineHeight: 14,
              marginBottom: 5,
            }}
          >
            12 tasks
          </Text>
          <Image source={require("../assets/woman1.png")} />
        </View>

        <View style={styles.sectionBox}>
          <Text style={{ fontSize: 16, fontWeight: "700", lineHeight: 19 }}>
            Study
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "400",
              lineHeight: 14,
              marginBottom: 5,
            }}
          >
            12 tasks
          </Text>
          <Image source={require("../assets/woman2.png")} />
        </View>

        <View></View>
      </View>
    </View>
  );
};

export default CategorySection;

const styles = StyleSheet.create({
  thirdCointainer: {
    marginTop: 30,
    marginHorizontal: 20,
  },
  sectionBox: {
    marginTop: 10,
    width: 175,
    borderRadius: 15,
    height: 192,
    padding: 16,
    backgroundColor: "white",
  },
  sectionBoxContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
