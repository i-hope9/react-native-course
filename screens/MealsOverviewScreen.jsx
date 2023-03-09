import { useLayoutEffect } from "react";
import { StyleSheet, FlatList, View, Text } from "react-native";
import MealItem from "../components/MealItem";
import { MEALS, CATEGORIES } from "../data/dummy-data";

export default function MeasOverviewScreen({ route, navigation }) {
  const categoryId = route.params.categoryId;
  const displayedMeals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(categoryId) >= 0;
  });
  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((category) => {
      return category.id === categoryId;
    }).title;
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryId, navigation]);

  function renderMealItem(itemData) {
    const item = itemData.item;
    const mealItemProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      complexity: item.complexity,
      duration: item.duration,
      affordability: item.affordability,
    };
    function pressHander() {
      navigation.navigate("MealDetail", {
        itemId: item.id
      });
    }
    return <MealItem {...mealItemProps} onPress={pressHander} />;
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
