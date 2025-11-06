"use client";

import Image from "next/image";
import clsx from "clsx";

export default function HeroImageSection({
  mainImage,
  leftImage,
  rightImage,
  className,
}) {
  return (
    <section className={clsx("w-full flex justify-center imageSec", className)}>
      <div className="relative w-full flex justify-center items-center">
        {/* MAIN IMAGE */}
        <div className="relative mainImageHome">
          {mainImage && (
            <Image
              src={mainImage}
              alt="center"
              width={704}
              height={500}
              className=" object-cover 
                            w-[278px] mx-auto
                            md:w-[337px]
                            lg:w-[704px]"
            />
          )}

          {/* LEFT IMAGE (Desktop) */}
          {leftImage && (
            <div className="hidden lg:block absolute -left-[239px] top-0">
              <Image
                src={leftImage}
                alt="left"
                width={189}
                height={200}
                className=""
              />
            </div>
          )}

          {/* RIGHT IMAGE (Desktop) */}
          {rightImage && (
            <div className="hidden lg:block absolute -right-[250px] bottom-0">
              <Image
                src={rightImage}
                alt="right"
                width={202}
                height={200}
                className=""
              />
            </div>
          )}
        </div>

        {/* Mobile & iPad overlap images */}
        {leftImage && (
          <div
            className="
                        block lg:hidden absolute
                        left-2 sm:-left-[-120px] top-[16px]
                    "
          >
            <Image
              src={leftImage}
              alt="left"
              className="
                            w-[63px]   
                            md:w-[93px] 
                            "
              height={100}
              width={100}
            />
          </div>
        )}

        {rightImage && (
          <div
            className="
                        block lg:hidden absolute
                        right-2 bottom-0 sm:-right-[-130px]
                    "
          >
            <Image
              src={rightImage}
              alt="right"
              className="
                            w-[79px]   /* phone */
                            md:w-[103px] /* ipad */
                            "
              height={100}
              width={100}
            />
          </div>
        )}
      </div>
    </section>
  );
}
