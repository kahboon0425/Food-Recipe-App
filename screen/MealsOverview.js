import { useLayoutEffect } from "react";
import { Text, View, FlatList } from "react-native";
import MealItem from "../components/MealItem";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealsDetails from "./MealsDetails";
import MealList from "../components/MealList";

function MealsOverview({ route, navigation }) {
  const categoryId = route.params.categoryId;

  // return true for all the meals that belongs to the category
  // true to keep the meal, false to drop the meal
  // if the category is found match, will return index eqal or greater than zero otherwise will return -1
  const displayMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryId, navigation]);

  return (
    <View>
      {/* <Text>Meals Overview screen-{categoryId}</Text> */}
      <MealList items={displayMeals} />
    </View>
  );
}

export default MealsOverview;
