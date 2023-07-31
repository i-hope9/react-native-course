import { NavigationContainer } from "@react-navigation/native";
import AllPlaces from "./screens/AllPlaces";
import AddPlace from "./screens/AddPlace";
import { StatusBar } from "expo-status-bar";
import IconButton from "./components/UI/IconButton";
import { Colors } from "./constants/Colors";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Map from "./screens/Map";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: Colors.primary500 },
            headerTintColor: Colors.gray700,
            contentStyle: { backgroundColor: Colors.gray700 },
          }}
        >
          <Stack.Screen
            name="AllPlaces"
            component={AllPlaces}
            options={({ navigation }) => ({
              title: "나의 최애 공간",
              headerRight: ({ tintedColor }) => (
                <IconButton
                  icon="add"
                  color={tintedColor}
                  size={24}
                  onPress={() => navigation.navigate("AddPlace")}
                />
              ),
            })}
          />
          <Stack.Screen
            name="AddPlace"
            component={AddPlace}
            options={{ title: "최애 공간 추가" }}
          />
          <Stack.Screen
            name="Map"
            component={Map}
            options={{ title: "지도" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
