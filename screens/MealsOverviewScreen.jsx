import { StyleSheet, FlatList, View, Text } from "react-native";
import MealItem from "../components/MealItem";
import { MEALS } from "../data/dummy-data";
export default function MeasOverviewScreen({ route }) {
  const categoryId = route.params.categoryId;
  const displayedMeals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(categoryId) >= 0;
  });
  function renderMealItem(itemData) {
    return <MealItem title={itemData.item.title}/>
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
  },
});
