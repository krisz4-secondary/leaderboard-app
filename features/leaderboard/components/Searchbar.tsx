import { ImageProps, StatusBar, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import {
  Autocomplete,
  AutocompleteItem,
  Button,
  Icon,
  Input,
  Layout,
  Text,
} from "@ui-kitten/components";
import { RenderFCProp } from "@ui-kitten/components/devsupport";
import { useLeaderboardStore } from "../../../store/LeaderBoardStore";

const SearchIcon = (props: Partial<ImageProps> | undefined) => (
  <Icon {...props} name="search" />
);

const Searchbar = () => {
  const [value, setValue] = useState("");
  const { setFilterText, data } = useLeaderboardStore();
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    setFilteredData(data.filter((user) => user.name?.includes(value)));
  }, [value]);

  return (
    <Layout level="2" style={styles.container}>
      <View style={{ flex: 1 }}>
        <Autocomplete
          accessoryLeft={SearchIcon}
          style={styles.input}
          placeholder="Search for username..."
          value={value}
          size="medium"
          placement="bottom"
          onSelect={(index) => setValue(filteredData[index].name)}
          onChangeText={(nextValue) => setValue(nextValue)}
        >
          {filteredData.map((user) => (
            <AutocompleteItem key={user.uid} title={user.name} />
          ))}
        </Autocomplete>
      </View>
      <Button
        onPress={() => {
          setFilterText(value);
        }}
        appearance="outline"
      >
        Search
      </Button>
    </Layout>
  );
};

export default Searchbar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    marginRight: 4,
    alignSelf: "center",
  },
});
