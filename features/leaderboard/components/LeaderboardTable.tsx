import React, { useEffect, useState } from "react";
import { Divider, Layout, List, Spinner, Text } from "@ui-kitten/components";
import { User } from "../../../types";
import { Header } from "./LeaderBoardTableHeader";
import { Row } from "./LeaderboardTableRow";
import { leaderboardTableStyles as styles } from "../styles";
import { useLeaderboardStore } from "../../../store/LeaderBoardStore";
import useLeadeboardData from "../hooks/useLeadeboardData";

const LeaderboardTable = () => {
  const { data, filterText } = useLeaderboardStore();
  const { filteredData } = useLeadeboardData();

  if (!data) {
    //loading screen in case leaderboard json not loaded
    return (
      <Layout style={styles.emptyContainer}>
        <Spinner size="large" />
      </Layout>
    );
  }

  if (filteredData.length === 0) {
    return (
      <Layout style={styles.emptyContainer}>
        <Text appearance="hint" category="h6">
          Try searching for a valid user!
        </Text>
      </Layout>
    );
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
