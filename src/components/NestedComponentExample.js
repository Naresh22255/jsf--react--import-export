import React from "react";
import Panel from "./Panel.js";
import Image from "./Image.js";

function NestedComponentExample(props) {
  return (
    <Panel heading="Component with nested components">
      <Image source="https://placedog.net/500/280/random" alt="Random dog" />
    </Panel>
  );
}

export default NestedComponentExample;
