import React from "react";
import Typography from "./typography";
import Image from "next/image";

const ServiceCard = ({
  title = "Talent Sourcing",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  icon,
}) => {
  return (
    <div className="service-card">
      <div className="service-card__icon-wrapper">
        {icon && (
            <Image 
            // src={icon}
            src="https://ik.imagekit.io/75zj3bigp/Icon.png?updatedAt=1768300131238"
             alt="" width={24} height={24} />
        )}
      </div>

      <div className="service-card__content">
        <Typography
          variant="h3"
          as="h3"
          className="service-card__title"
        >
          {title}
        </Typography>

        <Typography
          variant="body-4"
          colorVariant="secondary"
          className="service-card__description"
        >
          {description}
        </Typography>
      </div>
    </div>
  );
};

export default ServiceCard;
