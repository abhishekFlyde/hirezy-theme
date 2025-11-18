"use client"
import clsx from "clsx";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "right",
  showIcon,
  className,
  as,
  disabled,
  transparent = false,
  ...props
}) => {
  // Default showIcon based on variant
  const shouldShowIcon =
    showIcon !== undefined ? showIcon : variant === "primary";
  const Tag = as || "button";

  return ( 
    <Tag
      disabled={disabled}
      className={clsx(
        "btn",
        `btn--${variant}`,
        `btn--${size}`, 
        disabled && "btn--disabled",
        icon && shouldShowIcon && "btn--with-icon",
        transparent && "btn--transparent",
        className
      )}
      {...props}
    >
      {/* icon left */}
      {icon && shouldShowIcon && iconPosition === "left" && (
        <span className={` ${variant === 'white' ? 'btn-icon-white' : 'btn-icon'}`}>{icon}</span>
      )}

      {children}

      {/* icon right */}
      {icon && shouldShowIcon && iconPosition === "right" && (
        <span className={` ${variant === 'white' ? 'btn-icon-white' : 'btn-icon'}`}>{icon}</span>
      )}
    </Tag>
  );
};

export default Button;
