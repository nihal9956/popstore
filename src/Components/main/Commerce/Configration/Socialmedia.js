import React from "react";
import Config from "./Config";

function Socialmedia() {
  return (
    <div>
      <Config
        heading="Social Media"
        labels={["Facebook", "Twitter", "Instagram", "LinkedIn"]}
        postUrl="social"
      />
    </div>
  );
}

export default Socialmedia;
