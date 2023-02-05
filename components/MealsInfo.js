import { View, Text, StyleSheet } from "react-native";

function MealsInfo({ duration, complexity, affordability, style, textStyle }) {
  return (
    <View style={[styles.descContainer, style]}>
      <Text style={[styles.descContainerItem, textStyle]}>{duration}m</Text>
      <Text style={[styles.descContainerItem, textStyle]}>
        {complexity.toUpperCase()}
      </Text>
      <Text style={[styles.descContainerItem, textStyle]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
}

export default MealsInfo;

const styles = StyleSheet.create({
  descContainer: {
    paddingBottom: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  descContainerItem: {
    paddingHorizontal: 10,
    color: "white",
  },
});
