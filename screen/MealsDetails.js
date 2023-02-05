import { View, Text, Image, StyleSheet, Button } from "react-native";
import { useLayoutEffect, useContext } from "react";
import { MEALS } from "../data/dummy-data";
import MealsInfo from "../components/MealsInfo";
import { ScrollView } from "react-native-gesture-handler";
import IconButton from "../components/IconButton";
import { FavoritesContext } from "../store/redux/context/favorites-context";

function MealsDetails({ route, navigation }) {
  const favoriteMeals = useContext(FavoritesContext);

  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  const mealIsFavorite = favoriteMeals.ids.includes(mealId);

  // add navigation header button
  function changeFavoritesStatusHandler() {
    if (mealIsFavorite) {
      favoriteMeals.removeFavorite(mealId);
    } else {
      favoriteMeals.addFavorite(mealId);
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={mealIsFavorite ? "star" : "star-outline"}
            color="white"
            onPress={changeFavoritesStatusHandler}
          />
        );
      },
    });
  }, [navigation, changeFavoritesStatusHandler]);

  return (
    <ScrollView style={styles.imageContainer}>
      <View style={styles.imageInnerContainer}>
        <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <MealsInfo
          duration={selectedMeal.duration}
          complexity={selectedMeal.complexity}
          affordability={selectedMeal.affordability}
          textStyle={styles.textStyle}
        />
      </View>
      <View style={styles.cookingDetails}>
        <Text style={styles.subtitle}>Ingredients</Text>
      </View>
      {selectedMeal.ingredients.map((ingredient) => {
        return (
          <Text style={styles.steps} key={ingredient}>
            {ingredient}
          </Text>
        );
      })}

      <View style={styles.cookingDetails}>
        <Text style={styles.subtitle}>Steps</Text>
      </View>
      {selectedMeal.steps.map((step) => {
        return (
          <Text style={styles.steps} key={step}>
            {step}
          </Text>
        );
      })}
    </ScrollView>
  );
}

export default MealsDetails;

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 10,
    // borderRadius: 10,
    // elevation: 8,
    // backgroundColor: "white",
    // overflow: Platform.OS === "android" ? "hidden" : "visible",
    // shadowColor: "black",
    // shadowOpacity: 0.25,
    // shadowOffset: { width: 0, height: 2 },
    // alignItems: "center",
    padding: 10,
    marginBottom: 40,
  },

  imageInnerContainer: {
    backgroundColor: "white",
    borderRadius: 8,
    elevation: 8,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    alignItems: "center",
    paddingHorizontal: 20,
    margin: 10,
  },

  image: {
    width: "100%",
    height: 230,
    marginTop: 20,
    marginBottom: 10,
    borderRadius: 5,
    elevation: 8,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
  },

  textStyle: {
    color: "#3894A3",
    fontSize: 15,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#3894A3",
    paddingBottom: 10,
    textAlign: "center",
  },

  cookingDetails: {
    // margin:10,
    color: "#3894A3",
    fontWeight: "bold",
    borderBottomWidth: 2,
    borderBottomColor: "#3894A3",
    alignItems: "center",
    padding: 10,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 24,
    // fontWeight:"bold",
    color: "#3894A3",
    marginTop: 10,
  },

  steps: {
    backgroundColor: "#3894A3",
    borderRadius: 10,
    textAlign: "center",
    padding: 10,
    margin: 5,
    color: "#C7DAD4",
    fontSize: 16,
  },
});
