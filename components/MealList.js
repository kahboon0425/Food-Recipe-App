import { FlatList, View } from "react-native";
import MealItem from "./MealItem";

function renderMealItem(itemData) {
  const item = itemData.item;

  const mealItemProps = {
    id: item.id,
    title: item.title,
    imageUrl: item.imageUrl,
    affordability: item.affordability,
    complexity: item.complexity,
    duration: item.duration,
  };

  return (
    // <MealItem title={itemData.item.title} imageUrl={itemData.item.imageUrl} />
    <MealItem {...mealItemProps} />
  );
}

function MealList({ items }) {
  return (
    <View>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealList;
