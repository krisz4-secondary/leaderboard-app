import { ImageProps, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Button, Icon, Input, Layout, Text } from "@ui-kitten/components";
import { RenderFCProp } from "@ui-kitten/components/devsupport";

type Props = {};

const SearchIcon = (props: Partial<ImageProps> | undefined) => (
  <Icon {...props} name="search" />
);

const Searchbar = (props: Props) => {
  const [value, setValue] = useState("");

  return (
    <Layout level="2" style={styles.container}>
      <Input
        accessoryLeft={SearchIcon}
        style={styles.input}
        placeholder="Search for username..."
        value={value}
        onChangeText={(nextValue) => setValue(nextValue)}
      />
      <Button appearance="outline">Search</Button>
    </Layout>
  );
};

export default Searchbar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  input: {
    flexGrow: 1,
    marginRight: 2,
  },
});
