import { Layout, Text } from "@ui-kitten/components";
import { leaderboardTableStyles as styles } from "../styles";

export const Header = () => (
  <Layout style={styles.row}>
    <Layout style={[styles.element, styles.headerElement]}>
      <Text category="h5" style={styles.text}>
        Name
      </Text>
    </Layout>
    <Layout style={[styles.element, styles.headerElement]}>
      <Text category="h5" style={styles.text}>
        Number of banana
      </Text>
    </Layout>
    <Layout style={[styles.element, styles.headerElement]}>
      <Text category="h5" style={styles.text}>
        Rank (stars)
      </Text>
    </Layout>
  </Layout>
);
