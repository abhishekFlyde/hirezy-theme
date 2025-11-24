// "use client"
// import Image from "next/image";
// import Typography from "./typography";
// import Link from "next/link";
// import Label from "./lable";
// import Button from "./button";

// export const ImageCard = ({
//   heading = "Demo Heading",
//   description = "Lorem Ipsum dolor sits on the wall",
//   imageLink = "https://ik.imagekit.io/75zj3bigp/default-image.jpg?updatedAt=1760090625843",
//   textPosition = "top",
//   classNameCustom,
//   imageClassName,
//   variant = 'primary', // primary, blogs, 

//   label = "",
//   date = "",
//   readTime = "5 min read",
//   ctaText = "hello",
//   ctaLink = "#",
// }) => {
  
//   const isRight = textPosition === "right";

//   const TextBlock = () => (
//     <div className="cardHead flex flex-col gap-2">
//       <Typography variant="h3">{heading}</Typography>
//       <Typography variant="body-4" className="color-black-400">
//         {description}
//       </Typography>
//     </div>
//   );

//   const BlogsTextBlock = () => (
//     <div className="cardHead flex flex-col gap-2 w-full">

//       {/* ⭐ NEW - CATEGORY LABEL */}
//       {label && (
//         // <span className="px-3 py-1 bg-gray-100 text-black-400 rounded-md text-sm w-fit">
//         //   {label}
//         // </span>
//         <Label className="label" text={label} />
//       )}

//       <Typography variant="h3">{heading}</Typography>

//       <Typography variant="body-4" className="color-black-400">
//         {description}
//       </Typography>

//       {/* ⭐ NEW - META INFO */}
//       {(date || readTime) && (
//         <div className="flex items-center gap-4 mt-2 text-sm text-black-400">
//           {date && (
//             <div className="flex items-center gap-[8px]">
//               <Image src="https://ik.imagekit.io/75zj3bigp/Icon%20(3).png" alt=""
//               width={16}
//               height={16} />
//               <Typography variant="body-4">{date}</Typography>
//             </div>
//           )}

//           {readTime && (
//             <div className="flex items-center gap-[8px]">
//               <Image src="https://ik.imagekit.io/75zj3bigp/Icon%20(1).png?updatedAt=1763384802745" alt=""
//               width={16}
//               height={16} />
//               <Typography variant="body-4">{readTime}</Typography>
//             </div>
//           )}
//         </div>
//       )}

//       {/* ⭐ NEW - CTA BUTTON */}
//       {ctaText && (
//         // <Link
//         //   href={ctaLink}
//         //   className="mt-4 inline-block bg-lime-300 text-black px-6 py-2 rounded-full font-medium"
//         // >
//         //   {ctaText}
//         // </Link>
//         <div>
//         <Button text={ctaText} variant="primary">
//           <Typography variant="h4">{ctaText}</Typography>
//         </Button>
//         </div>
//       )}
//     </div>
//   );

//   const TextBlockSelector = variant === "blogs" ? BlogsTextBlock : TextBlock;


//   return (
//     <div
//       className={`
//         imageCard
//         ${isRight ? "!flex-row items-start" : ""}
//         ${classNameCustom}
//       `}
//     >
//       {/* When text is on top */}
//       {textPosition === "top" && <TextBlockSelector />}

//       <Image
//         width={1000}
//         height={500}
//         src={imageLink}
//         alt="image card"
//         className={`cardimg ${imageClassName}`}
//         style={{
//           width: isRight ? "100px" : "auto",
//           height: "auto",
//           // height: "auto",
//           // objectFit : "cover",
//           // overflow : "hidden"
//         }}
//       />

//       {/* When text is on bottom */}
//       {textPosition === "bottom" && <TextBlockSelector />}

//       {textPosition === "right" && <TextBlockSelector />}
//     </div>
//   );
// };


"use client";
import Image from "next/image";
import Typography from "./typography";
import Label from "./lable";
import Button from "./button";

export const ImageCard = ({
  heading = "Demo Heading",
  description = "Lorem Ipsum dolor sits on the wall",
  imageLink = "https://ik.imagekit.io/75zj3bigp/default-image.jpg",
  textPosition = "top",
  classNameCustom,
  imageClassName,
  variant = "blog", // primary, blog

  // blog extras
  label = "",
  date = "",
  readTime = "5 min read",
  ctaText = "",
  ctaLink = "#",
}) => {
  const isRight = textPosition === "right";

  /* ----------------------------------------------------------
     PRIMARY TEXT BLOCK
  ----------------------------------------------------------- */
  const PrimaryTextBlock = () => (
    <div className="cardHead flex flex-col gap-2">
      <Typography variant="h3">{heading}</Typography>
      <Typography variant="body-4" className="color-black-400">
        {description}
      </Typography>
    </div>
  );

  /* ----------------------------------------------------------
     BLOG TEXT BLOCK
  ----------------------------------------------------------- */
  const BlogTextBlock = () => (
    <div className="cardHead flex flex-col gap-2 w-full">
      {label && <Label className="label" text={label} />}

      <Typography variant="h3">{heading}</Typography>

      <Typography variant="body-4" className="color-black-400">
        {description}
      </Typography>

      {date && (
        <div className="flex items-center gap-4 mt-2 text-sm text-black-400">
          {date && (
            <div className="flex items-center gap-[8px]">
              <Image
                src="https://ik.imagekit.io/75zj3bigp/Icon%20(3).png"
                width={16}
                height={16}
                alt=""
              />
              <Typography variant="body-4">{date}</Typography>
            </div>
          )}

          {readTime && (
            <div className="flex items-center gap-[8px]">
              <Image
                src="https://ik.imagekit.io/75zj3bigp/Icon%20(1).png"
                width={16}
                height={16}
                alt=""
              />
              <Typography variant="body-4">{readTime}</Typography>
            </div>
          )}
        </div>
      )}

      {ctaText && (
        <div className="mt-4">
          <Button text={ctaText} variant="primary">
            <Typography variant="h4">{ctaText}</Typography>
          </Button>
        </div>
      )}
    </div>
  );

  /* ----------------------------------------------------------
     PRIMARY LAYOUT
  ----------------------------------------------------------- */
  const PrimaryLayout = () => (
    <div
      className={`
        imageCard primary-card 
        ${isRight ? "!flex-row items-start" : ""}
        ${classNameCustom}
      `}
    >
      {textPosition === "top" && <PrimaryTextBlock />}

      <Image
        src={imageLink}
        width={1000}
        height={600}
        alt="image card"
        className={`cardimg primary-img ${imageClassName}`}
      />

      {textPosition === "bottom" && <PrimaryTextBlock />}
      {textPosition === "right" && <PrimaryTextBlock />}
    </div>
  );

  /* ----------------------------------------------------------
     BLOG LAYOUT
  ----------------------------------------------------------- */
  const BlogLayout = () => (
    <div
      className={`
        imageCard blog-card
        ${isRight ? "!flex-row items-start" : ""}
        ${classNameCustom}
      `}
    >
      {textPosition === "top" && <BlogTextBlock />}

      <Image
        src={imageLink}
        width={1000}
        height={600}
        alt="image"
        className={`cardimg blog-img ${imageClassName}`}
      />

      {textPosition === "bottom" && <BlogTextBlock />}
      {textPosition === "right" && <BlogTextBlock />}
    </div>
  );

  /* ----------------------------------------------------------
     RENDER SELECTED LAYOUT
  ----------------------------------------------------------- */
  return variant === "blog" ? <BlogLayout /> : <PrimaryLayout />;
};
