import { StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
export default function MeasOverviewScreen({ route }) {
  const categoryId = route.params.categoryId;
  return (
    <View style={styles.container}>
      <Text>Meals Overview - {categoryId} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
  },
});
