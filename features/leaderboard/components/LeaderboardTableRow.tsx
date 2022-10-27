import { Layout, Text } from "@ui-kitten/components";
import React from "react";
import { User } from "../../../types";
import { MissingData } from "./MissingData";
import { leaderboardTableStyles as styles } from "../styles";

export const Row = ({
  item,
  rank,
  highlighted,
}: {
  item: User;
  rank: number;
  highlighted: boolean;
}) => {
  return (
    <Layout style={styles.row}>
      <Layout style={styles.element} level="2">
        {item.name ? (
          <Text
            status={highlighted ? "success" : undefined}
            category={highlighted ? "h6" : "p1"}
            style={styles.text}
          >
            {item.name}
          </Text>
        ) : (
          <MissingData />
        )}
      </Layout>
      <Layout style={styles.element} level="1">
        <Text
          status={highlighted ? "success" : undefined}
          category={highlighted ? "h6" : "p1"}
          style={styles.text}
        >
          {rank}
        </Text>
      </Layout>
      <Layout style={styles.element} level="2">
        {item.bananas ? (
          <Text
            status={highlighted ? "success" : undefined}
            category={highlighted ? "h6" : "p1"}
            style={styles.text}
          >
            {item.bananas}
          </Text>
        ) : (
          <MissingData />
        )}
      </Layout>

      <Layout style={styles.element} level="1">
        <Text
          status={highlighted ? "success" : undefined}
          category={highlighted ? "h6" : "p1"}
          style={styles.text}
        >
          {String(highlighted)}
        </Text>
      </Layout>
    </Layout>
  );
};
