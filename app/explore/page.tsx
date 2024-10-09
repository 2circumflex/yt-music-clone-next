import PagePadding from "@/components/page-padding";
import React from "react";
import Category from "./components/category";

const page = () => {
  return (
    <PagePadding>
      <div className="mt-4"></div>
      <Category />
    </PagePadding>
  );
};

export default page;
