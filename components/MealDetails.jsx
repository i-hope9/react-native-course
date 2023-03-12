import { View, Text, StyleSheet } from "react-native";

export default function MealDetails({duration, complexity, affordability, style, textStyle}) {
  return (
    <View style={[styles.descriptionContainer, style]}>
      <Text style={[styles.descriptionText, textStyle]}>{duration}M</Text>
      <Text style={[styles.descriptionText, textStyle]}>{complexity.toUpperCase()}</Text>
      <Text style={[styles.descriptionText, textStyle]}>{affordability.toUpperCase()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    descriptionContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
    descriptionText: {
      margin: 5,
      fontSize: 12,
    },
  });