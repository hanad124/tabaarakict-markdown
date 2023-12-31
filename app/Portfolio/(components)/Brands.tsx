import Image from "next/image";
import { brands } from "@/data/generalData";
import React from "react";

const Brands = () => {
  return (
    <div className="">
      <div className="py-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-custom_primary font-bold text-lg">
          Some of the Brands
        </p>
        <h2 className="mt-3 text-custom_secondary text-3xl font-bold leading-normal lg:leading-relaxed lg:text-5xl md:text-4xl  text-center lg:mx-60 md:mx-24  mb-0">
          we worked with 😊
        </h2>

        <div className="flex flex-wrap gap-14 md:gap-x-36 mt-20 justify-center">
          {brands.map((brand, index) => {
            return (
              <React.Fragment key={index}>
                <Image
                  className="cursor-pointer grayscale hover:grayscale-0 hover:scale-105 transition-transform h-16 w-auto object-contain"
                  src={brand}
                  alt={"brand image"}
                  width={100}
                  height={50}
                />
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Brands;
