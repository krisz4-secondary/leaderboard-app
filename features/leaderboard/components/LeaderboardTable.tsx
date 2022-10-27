import { StyleSheet } from "react-native";
import React, { useEffect, useMemo, useState } from "react";
import { Divider, Layout, List, Spinner, Text } from "@ui-kitten/components";
import { User } from "../../../types";
import { Header } from "./LeaderBoardTableHeader";
import { Row } from "./LeaderboardTableRow";
import { leaderboardTableStyles as styles } from "../styles";
import { useLeaderboardStore } from "../../../store/LeaderBoardStore";

type LeaderboardTableProps = {};

const LeaderboardTable = (props: LeaderboardTableProps) => {
  const [filteredData, setFilteredData] = useState<User[]>([]);
  const { setData, data, filterText } = useLeaderboardStore();

  useEffect(() => {
    if (!data) {
      //no cached data
      const leaderboardData = require("../../../assets/leaderboard.json");
      const leaderboardDataArray: User[] = Object.values(leaderboardData);
      setData(
        leaderboardDataArray.sort((a, b) =>
          a.bananas < b.bananas ? 1 : a.bananas === b.bananas ? 0 : -1
        )
      );
    }
  }, []);

  useEffect(() => {
    if (filterText) {
      const userIndex = data.findIndex((user) => user.name === filterText);
      if (userIndex === -1) {
        alert("User not found");
      }
      if (userIndex > 9) {
        setFilteredData([...data.slice(0, 8), data[userIndex]]);
        return;
      }
    }
    setFilteredData(data.slice(0, 9));
  }, [filterText]);

  if (!data) {
    <Layout style={styles.emptyContainer}>
      <Spinner size="large" />
    </Layout>;
  }

  return (
    <Layout style={styles.container} level="2">
      <Header />
      <List
        data={filteredData}
        renderItem={({ item }) =>
          Row({
            item,
            rank: data.findIndex((user) => item.uid === user.uid) + 1,
            highlighted: filterText === item.name,
          })
        }
        ItemSeparatorComponent={Divider}
        keyExtractor={(item) => item.uid}
      />
    </Layout>
  );
};

export default LeaderboardTable;
