import React from "react";
import Image from "next/image";
import Typography from "../ui-kit/typography";
import Button from "../ui-kit/button";
import { Container } from "../ui-kit/spacing";
import "./venueStage.scss";
import SectionHeader from "../ui-kit/sectionHeader";

/* =========================
   VenueCard Component
========================= */

const VenueCard = ({
  data = {
    image:
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800&auto=format&fit=crop&q=60",
    title: "MARGARET COURT ARENA",
    description:
      "Biggest Concert ever organised by an indian promoter in Australia",
    shows: "10+",
  },
  // imageHeight = "269px",
  badgeTop = "var(--sp-91)",
  badgeRight = "var(--sp-32)",
  badgePadding = "var(--sp-31)",
  badgeHeight = "86px",
}) => {
  return (
    <div className="venue-card group relative flex flex-col items-center rounded-[var(--radius-md)] transition-all duration-300">
      {/* Image Container */}
      <div className="relative w-full overflow-hidden rounded-[var(--radius-md)]">
        <div
          className={`w-full
          h-[269px]
          relative`}
        >
          <Image
            src={data.image}
            alt={data.title}
            fill
            className="object-cover transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        {/* Badge Overlay */}
        <div
          className="absolute flex flex-col items-center justify-center
          text-white opacity-0 bg-[#f9f9f94d]
          transition-opacity duration-300
          group-hover:opacity-100
          rounded-[var(--radius-xs)]"
          style={{
            top: badgeTop,
            right: badgeRight,
            padding: badgePadding,
            height: badgeHeight,
          }}
        >
          <Typography variant="h2" colorVariant="white">
            {data.shows}
          </Typography>
          <Typography variant="body-6" colorVariant="white">
            Shows
          </Typography>
        </div>
      </div>

      {/* Content */}
      <div className="mt-[var(--sp-26)] flex flex-col items-center text-center">
        <h3 className="text-lg font-medium text-white">{data.title}</h3>

        <p className="mt-2 max-w-[90%] text-sm text-white/90 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {data.description}
        </p>
      </div>
    </div>
  );
};

/* =========================
   VenueStage Component
========================= */

const VenueStage = ({
  venues = [
    {
      id: 1,
      title: "MARGARET COURT ARENA",
      description:
        "Biggest Concert ever organised by an indian promoter in Australia",
      image:
        "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800&auto=format&fit=crop&q=60",
      shows: "10+",
    },
    {
      id: 2,
      title: "MARGARET COURT ARENA",
      description:
        "Experience the thrill of live music in a world-class venue.",
      image:
        "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&auto=format&fit=crop&q=60",
      shows: "05+",
    },
    {
      id: 3,
      title: "MARGARET COURT ARENA",
      description: "A spectacular evening of entertainment and culture.",
      image:
        "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=800&auto=format&fit=crop&q=60",
      shows: "08+",
    },
    {
      id: 4,
      title: "SIDNEY MYER HOUSE",
      description: "An iconic outdoor venue for unforgettable performances.",
      image:
        "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=800&auto=format&fit=crop&q=60",
      shows: "12+",
    },
    {
      id: 5,
      title: "MARGARET COURT ARENA",
      description: "Join us for a night of musical magic.",
      image:
        "https://images.unsplash.com/photo-1514525253440-b393452e2386?w=800&auto=format&fit=crop&q=60",
      shows: "15+",
    },
    {
      id: 6,
      title: "ROD LAVER ARENA",
      description: "The heartbeat of Australian entertainment.",
      image:
        "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&auto=format&fit=crop&q=60",
      shows: "20+",
    },
  ],
  containerClass = "venue-stage-container w-full",
  buttonText = "View More",

    /* SectionHeader props */
  sectionHeaderClass = "active-members-header",
  sectionLabel = "Our Venues",
  sectionTitle = "The Biggest  Names, The Finest Stages",
  sectionSubtitle =
    "Our commitment is to use active ingredients of natural origin wherever possible without compromising the quality of the formulas and the results.",
  sectionLabelTextColor = "white",
  sectionTitleTextColor = "white",
  sectionSubTitleTextColor = "white",

}) => {
  return (
    <Container className="bg-black" variant="venueStage">
      <div className={containerClass}>
      <SectionHeader
          className={sectionHeaderClass}
          label={sectionLabel}
          title={sectionTitle}
          subtitle={sectionSubtitle}
          labelTextColor={sectionLabelTextColor}
          titleTextColor={sectionTitleTextColor}
          subTitleTextColor={sectionSubTitleTextColor}
        />


      <div className="venue-grid">
        {venues.map((venue) => (
          <VenueCard key={venue.id} data={venue} />
        ))}
      </div>

      <div className="mt-[var(--sp-56)] flex justify-center">
        <Button variant="primary" size="xl">
          <Typography variant="h4">{buttonText}</Typography>
        </Button>
      </div>
    </div>
    </Container>
  );
};

export default VenueStage;
