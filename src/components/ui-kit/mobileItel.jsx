"use client";
import React from 'react'
import { Container } from './spacing'
import Typography from './typography'
import Image from 'next/image'
import { motion } from "framer-motion";


export default function mobileItel({ model, title, subtitle, imageSrc }) {
  return (
    <Container className="flex flex-col bg-black text-center justify-center items-center">
      <Typography
        variant="itel-label"
        colorVariant="red"
        className="mb-[3.2px]"
      >
        {model}
      </Typography>
      <Typography
        variant="itel-head "
        colorVariant="white"
        className="md:mb-[33.8px] mb-[26px] md:w-[872.9px] w-full"
      >
        {title}
      </Typography>
      <Typography
        variant="itel-desc"
        colorVariant="itel"
        className="md:mb-[66px] mb-[56px] md:w-[739
        px] w-full"
      >
        {subtitle}
      </Typography>
      <motion.div
        className="md:w-[449px] md:h-[514px] w-full h-full items-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
        }}
        viewport={{ once: true }}
      >
        <Image
          src={imageSrc}
          height={739}
          width={449}
          className="h-full w-full object-cover"
          alt=""
        />
      </motion.div>
    </Container>
  );
}
