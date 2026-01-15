import React from "react";
import Image from "next/image"; // Assuming Next.js based on package.json
import Typography from "../ui-kit/typography";
import "./venueStage.scss";

// Dummy Data
const venues = [
  {
    id: 1,
    title: "MARGARET COURT ARENA",
    description:
      "Biggest Concert ever organised by an indian promoter in Australia",
    image:
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800&auto=format&fit=crop&q=60", // Placeholder
    shows: "10+",
  },
  {
    id: 2,
    title: "MARGARET COURT ARENA",
    description: "Experience the thrill of live music in a world-class venue.",
    image:
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&auto=format&fit=crop&q=60",
    shows: "05+",
  },
  {
    id: 3,
    title: "MARGARET COURT ARENA", // Using same title as per image
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
];

const VenueCard = ({ data }) => {
  return (
    <div className="venue-card group relative flex flex-col items-center rounded-[var(--radius-md)] transition-all duration-300 ">
      {/* Image Container */}
      <div className="relative w-full overflow-hidden rounded-[var(--radius-md)]">
        <div className="aspect-[16/10] w-full relative">
          <Image
            src={data.image}
            alt={data.title}
            fill
            className="object-cover transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        {/* Badge Overlay - Visible on Hover */}
        <div className="absolute top-[var(--sp-91)] right-[var(--sp-32)] flex flex-col items-center justify-center p-[var(--sp-31)] h-[86px] rounded-[var(--radius-xs)] opacity-0 text-white  transition-opacity duration-300 group-hover:opacity-100 bg-[#f9f9f94d]">
          <span className="text- font-bold"><Typography variant="h2" colorVariant="white">{data.shows}</Typography></span>
          <span className="text-xs font-medium"><Typography variant="body-6" colorVariant="white">Shows</Typography></span>
        </div>
      </div>

      {/* Content */}
      <div className="mt-[var(--sp-26)] flex flex-col items-center text-center">
        <h3 className="text-lg font-medium text-white">
          {data.title}
        </h3>

        {/* Description - Hidden by default, visible on hover? Or just styled differently? 
            In the image 2, the blue cards DO NOT show description. 
            So we should hide description by default.
        */}
        <p className="mt-2 max-w-[90%] text-sm text-white/90 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {data.description}
        </p>
      </div>
    </div>
  );
};

const VenueStage = () => {
  return (
    <div className="venue-stage-container w-full bg-black min-h-screen py-10 px-4">
      <div className="venue-grid">
        {venues.map((venue) => (
          <VenueCard key={venue.id} data={venue} />
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <button className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-[#FF005E] transition-transform hover:scale-105 hover:bg-gray-100">
          View More
        </button>
      </div>
    </div>
  );
};

export default VenueStage;
