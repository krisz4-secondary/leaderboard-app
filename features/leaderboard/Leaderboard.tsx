import { StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Searchbar from "./components/Searchbar";
import LeaderboardTable from "./components/LeaderboardTable";
import { useLeaderboardStore } from "../../store/LeaderBoardStore";
import { User } from "../../types";

const Leaderboard = () => {
  const { setData, data } = useLeaderboardStore();

  useEffect(() => {
    // load leaderboard.json
    if (!data) {
      //no cached data, load from local json
      const leaderboardData = require("../../assets/leaderboard.json");
      const leaderboardDataArray: User[] = Object.values(leaderboardData);
      setData(
        leaderboardDataArray.sort((a, b) =>
          a.bananas < b.bananas ? 1 : a.bananas === b.bananas ? 0 : -1
        )
      );
    }
  }, []);

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
