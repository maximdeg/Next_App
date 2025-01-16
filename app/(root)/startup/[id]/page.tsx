import React from "react";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;

  return (
    <>
      <span>{id}</span>
    </>
  );
};

export default Page;
