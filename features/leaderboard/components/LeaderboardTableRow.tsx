import { Layout, Text } from "@ui-kitten/components";
import React from "react";
import { User } from "../../../types";
import { MissingData } from "./MissingData";
import { leaderboardTableStyles as styles } from "../styles";

export const Row = ({ item }: { item: User }) => {
  return (
    <Layout style={styles.row}>
      <Layout style={styles.element} level="1">
        {item.name ? (
          <Text style={styles.text}>{item.name}</Text>
        ) : (
          <MissingData />
        )}
      </Layout>
      <Layout style={styles.element} level="2">
        {item.bananas ? (
          <Text style={styles.text}>{item.bananas}</Text>
        ) : (
          <MissingData />
        )}
      </Layout>
      <Layout style={styles.element} level="1">
        {item.stars ? (
          <Text style={styles.text}>{item.stars}</Text>
        ) : (
          <MissingData />
        )}
      </Layout>
    </Layout>
  );
};
