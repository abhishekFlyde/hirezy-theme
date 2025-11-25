  "use client";
  import React from "react";
  import clsx from "clsx";
  import Typography from "./typography";
  // import "./input.scss";

  const Input = ({
    label,
    placeholder,
    type = "text",
    name,
    value,
    onChange,
    variant = "gray", // default | gray
    className,
    ...props
  }) => {

    // const typoVariants = variant === "contactPageVariant" ? "body-3" : "body-3";


    const PrimaryInput = () => (
      <div className={clsx("input-wrapper", className)}>
          <Typography variant="body-3">
        {label && <label htmlFor={name}>{label}</label>}
        </Typography>
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={clsx("input-field", {
            "input-default": variant === "default",
            "input-gray": variant === "gray",
          })}
          {...props}
        />
      </div>
    )

    const ContactPageVariantInput = () => (
      <div className={clsx("ContactPageVariantInput", className)}>
          <Typography variant="h6">
        {label && <label htmlFor={name}>{label}</label>}
        </Typography>
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={clsx("input-field", {
            "input-default": variant === "default",
            "input-gray": variant === "gray",
            "input-ContactPageVariantInput": variant === "ContactPageVariantInput",
          })}
          {...props}
        />
      </div>
    );

    return variant === "ContactPageVariantInput"
  ? <ContactPageVariantInput />
  : <PrimaryInput />;

  };

  export default Input;
