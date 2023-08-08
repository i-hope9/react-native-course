import { NavigationContainer } from "@react-navigation/native";
import AllPlaces from "./screens/AllPlaces";
import AddPlace from "./screens/AddPlace";
import { StatusBar } from "expo-status-bar";
import IconButton from "./components/UI/IconButton";
import { Colors } from "./constants/Colors";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Map from "./screens/Map";
import { useCallback, useEffect, useState } from "react";
import { init } from "./util/database";
import AppLoading from "expo-app-loading";
import * as SplashScreen from "expo-splash-screen";

const Stack = createNativeStackNavigator();

// Keep the splash screen visible while we fetch resources
// SplashScreen.preventAutoHideAsync();

export default function App() {
  const [dbInitialized, setDbInitialized] = useState(false);

  useEffect(() => {
    init()
      .then(() => {
        setDbInitialized(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // const onLayoutRootView = useCallback(async () => {
  //   if (dbInitialized) {
  //     // This tells the splash screen to hide immediately! If we call this after
  //     // `setAppIsReady`, then we may see a blank screen while the app is
  //     // loading its initial state and rendering its first pixels. So instead,
  //     // we hide the splash screen once we know the root view has already
  //     // performed layout.
  //     await SplashScreen.hideAsync();
  //   }
  // }, [dbInitialized]);

  // if (!dbInitialized) {
  //   return null;
  // }

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
