import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import MealsList from "../components/MealsList/MealsList";
import { MEALS } from "../data/dummy-data";
import { FavoritesContext } from "../store/context/favorites-context";

export default function FavoritesScreen() {
  const favoriteMealsCtx = useContext(FavoritesContext);
  const favoriteMeals = MEALS.filter(meal =>
    favoriteMealsCtx.ids.includes(meal.id)
  );
  if (favoriteMeals.length === 0) {
    return <View style={styles.rootContainer}>
        <Text style={styles.text}>🥹 Give me your favorites!</Text>    
        </View>
  }
  return <MealsList displayedMeals={favoriteMeals} />;
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 18,
        fontWeight: '700',
        color: 'whitesmoke'
    }
})
