import React, { ReactNode } from "react";

const Header = ({ children }: { children: ReactNode }) => {
  return <header>{children}</header>;
};

export default Header;
