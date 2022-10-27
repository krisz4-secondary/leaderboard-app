import { StyleSheet } from "react-native";

export const leaderboardTableStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
  },
  element: {
    flexGrow: 1,
    flexBasis: 1,
    flexShrink: 1,
    alignContent: "center",
    justifyContent: "center",
  },
  headerElement: {
    borderBottomColor: "gray",
    borderBottomWidth: 2,
  },
  text: {
    textAlign: "center",
  },
});
