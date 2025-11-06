"use client";
import React from "react";
import Typography from "./typography";

export default function Label({
  text,
  className = "",
  ...props
}) {
  return (
    <div {...props} style={{ padding: "0px 0px" }}> 
        {text && <Typography variant="body-4" className={`${className}`}>{text}</Typography>}
    </div>
  );
}
3