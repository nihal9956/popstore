import React from "react";
import AddCatagory from "../Catagory/AddCatagory";

function Addsubcategory() {
  return (
    <div>
      <AddCatagory
        heading="Commerce - Sub Categories"
        breadcrumbheading="Commerce - Categories - Sub Categories"
        subheading="Add New Sub Category"
        labelOne="Enter Sub Category Name"
        labelTwo="Select Category"
      />
    </div>
  );
}

export default Addsubcategory;
