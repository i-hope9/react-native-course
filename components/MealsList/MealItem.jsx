import { Text, View, Image, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealDetails from "../MealDetails";

export default function MealItem({
  id,
  title,
  imageUrl,
  complexity,
  duration,
  affordability
}) {
  const navigation = useNavigation();

  function selectMealItemHandler() {
    navigation.navigate("MealDetail", {
      itemId: id
    });
  }

  return (
    <View>
      <Pressable
        style={({ pressed }) => [
          styles.container,
          pressed ? styles.buttonPressed : null,
        ]}
        android_ripple={{ color: "#ccc" }}
        onPress={selectMealItemHandler}
      >
        <View>
          <Image style={styles.itemImage} source={{ uri: imageUrl }} />
          <Text style={styles.titleText}>{title}</Text>
        </View>
        <MealDetails duration={duration} complexity={complexity} affordability={affordability}/>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 15,
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "white",
    elevation: 2,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
  },
  itemImage: {
    width: "100%",
    height: 200,
  },
  titleText: {
    fontWeight: "800",
    textAlign: "center",
    fontSize: 18,
    margin: 9,
  },
  buttonPressed: {
    opacity: 0.5,
  },
});
