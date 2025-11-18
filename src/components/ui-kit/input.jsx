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
  return (
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
  );
};

export default Input;
