import { CardLink } from "@/components/CardLink";
import React from "react";
import { LinksData } from "@/data/links";

function Page() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto items-center justify-center h-screen">
        {LinksData.map((link, index) => (
          <CardLink key={index} Title={link.Title} Description={link.Description} Image={link.Image} Url={link.Url} />
        ))}
      </div>
    </>
  );
}

export default Page;
