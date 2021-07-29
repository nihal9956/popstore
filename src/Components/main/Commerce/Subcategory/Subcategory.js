import React from "react";
import Catagory from "../Catagory/Catagory";

function Subcategory() {
  return (
    <div>
      <Catagory
        heading="Commerce - Sub Categories"
        tableHeading="Sub Category Name"
        addNewUrl="/comsubcatagory/add"
      />
    </div>
  );
}

export default Subcategory;
