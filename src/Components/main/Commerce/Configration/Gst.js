import React from "react";
import Config from "./Config";

function Gst() {
  return (
    <div>
      <Config heading="GST" name="gst" postUrl="gst" labels={["GST (in %)"]} />
    </div>
  );
}

export default Gst;
