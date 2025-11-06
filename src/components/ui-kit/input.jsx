// "use client";
// import clsx from "clsx";
// import Typography from "@/components/ui-kit/typography";

// export const Input = ({
//   label,
//   id,
//   type = "text",
//   placeholder,
//   value,
//   onChange,
//   className,
//   error,
//   required = false,
//   ...props
// }) => {
//   return (
//     <div className={clsx("input-wrapper", className)}>
//       {label && (
//         <label htmlFor={id} className="input-label">
//           <Typography variant="body-3">{label}</Typography>{" "}
//           {required && <span className="required">*</span>}
//         </label>
//       )}
//       <input
//         id={id}
//         type={type}
//         placeholder={placeholder}
//         value={value}
//         onChange={onChange}
//         className={clsx("input-field", error && "input-error")}
//         {...props}
//       />
//       {error && <p className="input-error-text">{error}</p>}
//     </div>
//   );
// };


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
