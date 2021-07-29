import React from "react";
import Config from "./Config";

function Address() {
  return (
    <div>
      <Config
        heading="Address"
        labels={[
          "Company Name",
          "Address",
          "City",
          "State",
          "Country",
          "Pincode",
          "Website",
          "Contact Number",
          "Email",
        ]}
        postUrl="address"
      />
    </div>
  );
}

export default Address;
