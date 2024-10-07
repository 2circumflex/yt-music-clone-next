import React from "react";

const page = ({ params }: { params: { id: string } }) => {
  return <div>channel/{params.id}</div>;
};

export default page;
