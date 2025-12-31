"use client";

import Image from "next/image";
import Typography from "./typography";
import { Container } from "./spacing";

const OurServices = ({
  imageSrc,
  eyebrow,
  title,
  cardIcon,
  cardHeading,
  cardShortDesc,
  cardLongDesc,
}) => {
  return (
    <Container variant="primary">
      <section className="our-services">
        <div className="our-services__inner">
          {/* LEFT STATIC LAYOUT (Only image dynamic) */}
          <div className="our-services__media">
            <div className="our-services__image-wrapper">
              <Image
                src={imageSrc}
                alt="services image"
                width={643}
                height={500}
                className="our-services__image"
              />
            </div>
          </div>

          {/* RIGHT SIDE CONTENT */}
          <div className="our-services__content">
            <div className="gap-[var(--sp-32)] flex flex-col">
              <Typography variant="h6" className="our-services__eyebrow">
                {eyebrow}
              </Typography>

              <Typography variant="h2" as="h2" className="our-services__title">
                {title}
              </Typography>
            </div>

            <div className="flex flex-col gap-[var(--sp-24)] mt-[var(--sp-8)]">
              <div className="our-services__card">
                <Image
                  src={cardIcon}
                  alt="service icon"
                  width={56}
                  height={56}
                />

                <div className="our-services__card-body">
                  <Typography variant="h3">{cardHeading}</Typography>

                  <Typography
                    variant="body-4"
                    className="our-services__card-text"
                  >
                    {cardShortDesc}
                  </Typography>
                </div>
              </div>

              <Typography
                variant="body-3"
                className="our-services__description"
                colorVariant="gray"
              >
                {cardLongDesc}
              </Typography>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default OurServices;
