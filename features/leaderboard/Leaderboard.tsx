import { StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Searchbar from "./components/Searchbar";
import LeaderboardTable from "./components/LeaderboardTable";
import Spacer from "./components/Spacer";

const Leaderboard = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Searchbar />
      <LeaderboardTable />
    </SafeAreaView>
  );
};

export default Leaderboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
});
