import { Text } from "@ui-kitten/components";
import { leaderboardTableStyles as styles } from "../styles";

export const MissingData = () => (
  <Text style={styles.text} status="warning">
    Missing data
  </Text>
);
