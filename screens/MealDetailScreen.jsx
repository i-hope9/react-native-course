import { Text, View } from "react-native";

export default function MealDetailScreen({route}) {
    const mealId = route.params.itemId;

    return <View>
        <Text>{mealId}</Text>
    </View>
}