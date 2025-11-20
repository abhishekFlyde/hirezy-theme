"use client"
import Image from "next/image";
import Typography from "./typography";
import Link from "next/link";
import Label from "./lable";
import Button from "./button";

export const ImageCard = ({
  heading = "Demo Heading",
  description = "Lorem Ipsum dolor sits on the wall",
  imageLink = "https://ik.imagekit.io/75zj3bigp/default-image.jpg?updatedAt=1760090625843",
  textPosition = "top",
  classNameCustom,
  imageClassName,

  label = "",
  date = "",
  readTime = "5 min read",
  ctaText = "hello",
  ctaLink = "#",
}) => {
  
  const isRight = textPosition === "right";

  const TextBlock = () => (
    // <div className="cardHead flex flex-col gap-2">
    //   <Typography variant="h3">{heading}</Typography>
    //   <Typography variant="body-4" className="color-black-400">
    //     {description}
    //   </Typography>
    // </div>

    <div className="cardHead flex flex-col gap-2 w-full">

      {/* ⭐ NEW - CATEGORY LABEL */}
      {label && (
        // <span className="px-3 py-1 bg-gray-100 text-black-400 rounded-md text-sm w-fit">
        //   {label}
        // </span>
        <Label className="label" text={label} />
      )}

      <Typography variant="h3">{heading}</Typography>

      <Typography variant="body-4" className="color-black-400">
        {description}
      </Typography>

      {/* ⭐ NEW - META INFO */}
      {(date || readTime) && (
        <div className="flex items-center gap-4 mt-2 text-sm text-black-400">
          {date && (
            <div className="flex items-center gap-[8px]">
              <Image src="https://ik.imagekit.io/75zj3bigp/Icon%20(3).png" alt=""
              width={16}
              height={16} />
              <Typography variant="body-4">{date}</Typography>
            </div>
          )}

          {readTime && (
            <div className="flex items-center gap-[8px]">
              <Image src="https://ik.imagekit.io/75zj3bigp/Icon%20(1).png?updatedAt=1763384802745" alt=""
              width={16}
              height={16} />
              <Typography variant="body-4">{readTime}</Typography>
            </div>
          )}
        </div>
      )}

      {/* ⭐ NEW - CTA BUTTON */}
      {ctaText && (
        // <Link
        //   href={ctaLink}
        //   className="mt-4 inline-block bg-lime-300 text-black px-6 py-2 rounded-full font-medium"
        // >
        //   {ctaText}
        // </Link>
        <div>
        <Button text={ctaText} variant="primary">
          <Typography variant="h4">{ctaText}</Typography>
        </Button>
        </div>
      )}
    </div>
  );

  return (
    <div
      className={`
        imageCard
        ${isRight ? "!flex-row items-start" : ""}
        ${classNameCustom}
      `}
    >
      {/* When text is on top */}
      {textPosition === "top" && <TextBlock />}

      <Image
        width={1000}
        height={500}
        src={imageLink}
        alt="image card"
        className={`cardimg ${imageClassName}`}
        style={{
          width: isRight ? "100px" : "auto",
          height: "auto",
          // height: "auto",
          // objectFit : "cover",
          // overflow : "hidden"
        }}
      />

      {/* When text is on bottom */}
      {textPosition === "bottom" && <TextBlock />}

      {textPosition === "right" && <TextBlock />}
    </div>
  );
};
