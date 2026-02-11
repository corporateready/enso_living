import React from "react";
import Image from "next/image";
import building from "../../../../public/building.webp";

const Index = () => {
  return (
    <Image
      src={building}
      alt="building"
      loading="eager"
      priority={false}
      fill
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  );
};
export default Index;
