import { StyleSheet } from "react-native";
import React, { useEffect, useMemo, useState } from "react";
import { Divider, Layout, List, Spinner, Text } from "@ui-kitten/components";
import { User } from "../../../types";
import { Header } from "./LeaderBoardTableHeader";
import { Row } from "./LeaderboardTableRow";
import { leaderboardTableStyles as styles } from "../styles";

type LeaderboardTableProps = {};

const LeaderboardTable = (props: LeaderboardTableProps) => {
  const [data, setData] = useState<User[] | null>(null);

  useEffect(() => {
    const leaderboardData = require("../../../assets/leaderboard.json");
    const leaderboardDataArray: User[] = Object.values(leaderboardData);

    setData(leaderboardDataArray);
  }, []);

  if (!data) {
    <Layout style={styles.emptyContainer}>
      <Spinner size="large" />
    </Layout>;
  }

  return (
    <Layout style={styles.container} level="2">
      <Header />
      <List
        data={data}
        renderItem={Row}
        ItemSeparatorComponent={Divider}
        keyExtractor={(item) => item.uid}
      />
    </Layout>
  );
};

export default LeaderboardTable;
