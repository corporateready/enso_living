import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center overflow-x-hidden relative z-0">
        <div className="">
          <Image
            src="https://res.cloudinary.com/daxfjxuat/image/upload/v1769420843/enso-presentation/Prezentare_generala%CC%86_despre_proiect___ENSO_LIVING-1_hikgyj.webp"
            alt="Prezentare PDF ENSO LIVING"
            fill
            className="w-full h-screen"
          />
        </div>
        <div className="">
          <Image
            src="https://res.cloudinary.com/daxfjxuat/image/upload/v1769420843/enso-presentation/Prezentare_generala%CC%86_despre_proiect___ENSO_LIVING-3_y4n1fc.webp"
            alt="Prezentare PDF ENSO LIVING"
            fill
            className="w-full h-screen"
          />
        </div>
      </div>
  );
};
export default page;
