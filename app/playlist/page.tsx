import React from "react";

const page = ({ searchParams }: { searchParams: { list: string } }) => {
  return <div>playlist {searchParams.list}</div>;
};

export default page;
