import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import CategoriesScreen from "./screen/CategoriesScreen";
import MealsOverview from "./screen/MealsOverview";
import MealsDetails from "./screen/MealsDetails";
import FavouriteScreen from "./screen/FavouriteScreen";
import FavoritesContextProvider from "./store/redux/context/favorites-context";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  function DrawerNavigator() {
    return (
      <Drawer.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#1c5e69" },
          headerTintColor: "white",
          sceneContainerStyle: { backgroundColor: "#ccc" },
          drawerContentStyle: { backgroundColor: "#C7DAD4" },
          drawerInactiveTintColor: "#3894A3",
          drawerActiveTintColor: "white",
          drawerActiveBackgroundColor: "#3894A3",
        }}
      >
        <Drawer.Screen
          name="Categories"
          component={CategoriesScreen}
          options={{
            title: "All Categories",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="list" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="Favorites"
          component={FavouriteScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="star" color={color} size={size} />
            ),
          }}
        />
      </Drawer.Navigator>
    );
  }
  return (
    <>
      <StatusBar style="light" />
      <FavoritesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#1c5e69" },
              headerTintColor: "white",
              contentStyle: { backgroundColor: "white" },
            }}
          >
            <Stack.Screen
              name="MealsCategories"
              component={DrawerNavigator}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MealOverview"
              component={MealsOverview}
              options={({ route, navigation }) => {
                const catId = route.params.categoryId;
                return {
                  title: catId,
                };
              }}
            />

            <Stack.Screen
              name="MealDetails"
              component={MealsDetails}
            ></Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </FavoritesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 40,
    // paddingHorizontal: 10,
  },
});
