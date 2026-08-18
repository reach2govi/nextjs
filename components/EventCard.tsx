"use client";

import Link from "next/link";
import Image from "next/image";
import posthog from "posthog-js";

interface Props {
  title: string;
  image: string;
  slug: string;
  location: string;
  date: string;
  time: string;
}

const EventCard = ({ title, image, slug, location, date, time }: Props) => {
  const handleEventSelection = () => {
    posthog.capture("event_selected", {
      event_slug: slug,
      event_location: location,
      event_date: date,
    });
  };

  return (
    <Link href={`/events/${slug}`} id="event-card" onClick={handleEventSelection}>
      <Image
        src={image}
        alt={title}
        height={300}
        width={410}
        className="poster"
      />
      <div className="flex flex-row gap-2">
        <Image src="/icons/pin.svg" alt="location" width={14} height={14} />
        <p>{location}</p>
      </div>
      <p className="title">{title}</p>

      <div className="datetime">
        <div>
          <Image src="/icons/calendar.svg" alt="date" height={14} width={14} />
          <p>{date}</p>
        </div>
        <div>
          <Image src="/icons/clock.svg" alt="date" height={14} width={14} />
          <p>{time}</p>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
