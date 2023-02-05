import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealsInfo from "./MealsInfo";

function MealItem({
  id,
  title,
  imageUrl,
  affordability,
  complexity,
  duration,
}) {
  const navigation = useNavigation();

  function goToMealDetail() {
    navigation.navigate("MealDetails", { mealId: id });
  }

  return (
    <View style={styles.imageContainer}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        android_ripple={{ color: "#ccc" }}
        onPress={goToMealDetail}
      >
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <Text style={styles.mealTitle}>{title}</Text>

        <MealsInfo
          duration={duration}
          complexity={complexity}
          affordability={affordability}
        />
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  imageContainer: {
    marginHorizontal: 30,
    marginVertical: 20,
    borderRadius: 10,
    elevation: 8,
    backgroundColor: "#3894A3",
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
  },
  image: {
    width: "100%",
    height: 200,
    // borderRadius: 10,
    elevation: 8,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  button: {
    flex: 1,
  },

  mealTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    margin: 10,
    color: "white",
  },
  descContainer: {
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  descContainerItem: {
    paddingHorizontal: 10,
  },
});
