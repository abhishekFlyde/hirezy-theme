import clsx from "clsx";

const colorMap = {
  black: "#000000",
  white: "#FFFFFF",
  gray: "#636363",
  primary: "#CCEF55",
  secondary: "#AAAAAA",
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

  return (
    <Tag
      className={clsx(variant, className)}
      style={{
        whiteSpace: "pre-line",
        color: colorMap[colorVariant] || colorMap.black, // apply variant color
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
    "body-1": "p",
    "body-2": "p",
    "body-3": "p",
    "body-4": "p",
    "body-5": "p",
    "text-link": "p",
  };
  return map[variant] || "p";
}

export default Typography;
