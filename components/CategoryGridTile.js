import { View, Text, Pressable, StyleSheet, Platform } from "react-native";

function CategoryGridTile({ title, color, onPress }) {
  return (
    <View style={styles.gridItemContainer}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        android_ripple={{ color: "#ccc" }}
        onPress={onPress}
      >
        <View style={[styles.itemContainer, { backgroundColor: color }]}>
          <Text style={styles.gridItem}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItemContainer: {
    flex: 1,
    height: 150,
    margin: 18,
    elevation: 8,
    borderRadius: 8,
    // borderWidth:2,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
  },
  button: {
    flex: 1,
  },

  buttonPressed: {
    opacity: 0.5,
  },

  itemContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  gridItem: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
