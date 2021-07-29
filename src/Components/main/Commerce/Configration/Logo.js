import React from "react";
import Config from "./Config";

function Logo() {
  return (
    <div>
      <Config
        heading="Logo"
        name="logo"
        labels={["Upload Logo(148 x 48 px)"]}
        type="file"
        postUrl="logo"
      />
    </div>
  );
}

export default Logo;
