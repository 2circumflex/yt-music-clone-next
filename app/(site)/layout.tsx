import Header from "@/components/header";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Header>{children}</Header>
    </div>
  );
};

export default layout;
