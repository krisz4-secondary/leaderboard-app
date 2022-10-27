import React from "react";
import { Layout } from "@ui-kitten/components";

type SpacerProps = {
  width?: number;
  height?: number;
};

const Spacer = ({ width = 0, height = 0 }: SpacerProps) => {
  return <Layout level="3" style={{ marginTop: width, marginLeft: height }} />;
};

export default Spacer;
