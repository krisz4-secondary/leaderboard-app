import { StyleSheet } from "react-native";
import React, { useState } from "react";
import { Input, Layout } from "@ui-kitten/components";
import { SafeAreaView } from "react-native-safe-area-context";
import Searchbar from "./components/Searchbar";

type Props = {};

const Leaderboard = (props: Props) => {
  return (
    <SafeAreaView>
      <Layout style={styles.container}>
        <Searchbar />
      </Layout>
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
