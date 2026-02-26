import clsx from "clsx";

const colorMap = {
  black: "var(--color-black-500)",
  white: "var(--color-white)",
  white2: "#F9F9F9",
  gray: "#636363",
  primary: "var(--color-blue-400)",
  secondary: "#AAAAAA",
  itel: "#E5E7EB",
};

const gradientMap = {
  red: "linear-gradient(95.91deg, #FB0036 1.01%, #FF0039 99.04%)",
};

const Typography = ({
  variant = "body-2",
  as,
  children,
  className,
  colorVariant = "black",
  ...props
}) => {
  const Tag = as || getDefaultTag(variant);

  const isGradient = gradientMap[colorVariant];

  return (
    <Tag
      className={clsx(variant, className)}
      style={{
        whiteSpace: "pre-line",
 
        ...(isGradient
          ? {
              background: gradientMap[colorVariant],
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent",
            }
          : {
              color: colorMap[colorVariant] || colorMap.black,
            }),
      }}
      {...props}
    >
      {children}
    </Tag>
  );
};

function getDefaultTag(variant) {
  const map = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    "body-1": "bodyPrimary",
    "body-2": "bodySecondary",
    "body-3": "bodySmall",
    "body-4": "p",
    "body-5": "p",
    "text-link": "p",
    "big-text":"p",
  };
  return map[variant] || "p";
}

export default Typography;
