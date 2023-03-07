import { Text, View, Image, StyleSheet, Pressable } from "react-native";

export default function MealItem({
  title,
  imageUrl,
  complexity,
  duration,
  affordability,
}) {
  return (
    <View>
      <Pressable
        style={({ pressed }) => [
          styles.container,
          pressed ? styles.buttonPressed : null,
        ]}
        android_ripple={{ color: "#ccc" }}
      >
        <View>
          <Image style={styles.itemImage} source={{ uri: imageUrl }} />
          <Text style={styles.titleText}>{title}</Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionText}>{duration}M</Text>
          <Text style={styles.descriptionText}>{complexity.toUpperCase()}</Text>
          <Text style={styles.descriptionText}>
            {affordability.toUpperCase()}
          </Text>
        </View>
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
  descriptionContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  descriptionText: {
    margin: 5,
    fontSize: 12,
  },
  buttonPressed: {
    opacity: 0.5,
  },
});
