import { StyleSheet, Text, View } from "react-native";
import HeaderSection from "./Components/HeaderSection";
import SearchSection from "./Components/SearchSection";
import CategorySection from "./Components/CategorySection";
import CourseSection from "./Components/CourseSection";

export default function App() {
  return (
    <View style={styles.container}>
      <HeaderSection />
      <SearchSection />
      <CategorySection />
      <CourseSection text="Mobile" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F0E0",
  },
});
