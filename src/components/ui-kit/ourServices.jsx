"use client";

import Image from "next/image";
import Typography from "./typography";
import { Container } from "./spacing";

const OurServices = () => {
  return (
    <Container variant="primary">
      <section className="our-services">
        <div className="our-services__inner">
          <div className="our-services__media">
            <div className="our-services__image-wrapper">
              <Image
                src="https://ik.imagekit.io/75zj3bigp/ImageWithFallback%20(1).png"
                alt="Team collaborating around a table with laptops"
                width={643}
                height={500}
                className="our-services__image"
              />
            </div>
          </div>

          <div className="our-services__content">
            <div className="gap-[var(--sp-32)] flex flex-col">
              <Typography variant="h6" className="our-services__eyebrow">
                OUR SERVICES
              </Typography>

              <Typography variant="h2" as="h2" className="our-services__title">
                Your Success, Our Priority
              </Typography>
            </div>
            <div className="flex flex-col gap-[var(--sp-24)] mt-[var(--sp-8)]">
              <div className="our-services__card">
                <Image
                  src="https://ik.imagekit.io/75zj3bigp/Container.png?updatedAt=1763470634303"
                  alt=""
                  width={56}
                  height={56}
                />

                <div className="our-services__card-body">
                  <Typography variant="h3">Applicant Tracking</Typography>

                  <Typography
                    variant="body-4"
                    className="our-services__card-text"
                  >
                    A sophisticated platform with intuitive job posting tools,
                    dynamic resume filtering, and AI-powered candidate matching.
                  </Typography>
                </div>
              </div>

              <Typography
                variant="body-3"
                className="our-services__description"
                colorVariant="gray"
              >
                A sophisticated platform with intuitive job posting tools,
                dynamic resume filtering, and AI-powered candidate matching to
                save time and improve hiring quality. Our system provides
                end-to-end tracking from application to offer.
              </Typography>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default OurServices;
