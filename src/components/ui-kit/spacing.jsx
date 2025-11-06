import clsx from "clsx";

export const Container = ({ children, variant = "primary", className }) => {
  const variants = {
    primary: "primary-spacing",
    header: "header-spacing",
    heroSpacing: "hero-spacing",
    secondary: "secondary-spacing",
    section: "section-spacing",
    header : "header-spacing",
    auth : "auth-spacing"
  };

  return (
    <div className={clsx(`${variants[variant]}`, className)}>{children}</div>
  );
};
