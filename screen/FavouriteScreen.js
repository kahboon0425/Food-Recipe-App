import { View, Text, StyleSheet } from "react-native";
import MealList from "../components/MealList";
import { useContext } from "react";
import { FavoritesContext } from "../store/redux/context/favorites-context";
import { MEALS } from "../data/dummy-data";

function FavouriteScreen() {
  const favoriteMealsCtx = useContext(FavoritesContext);

  const favoriteMeal = MEALS.filter((meal) =>
    favoriteMealsCtx.ids.includes(meal.id)
  );

  if (favoriteMeal.length === 0) {
    return (
      <View style={styles.textContainer}>
        <Text style={styles.text}>You Have No Favorites Meals Yet !</Text>
      </View>
    );
  }

  return (
    <View>
      <MealList items={favoriteMeal} />
    </View>
  );
}

export default FavouriteScreen;

const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#3894A3",
  },
});
