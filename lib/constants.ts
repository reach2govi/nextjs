export type EventItem = {
  title: string;
  image: string;
  slug: string;
  location: string;
  date: string;
  time: string;
};

export const events: EventItem[] = [
  {
    image: "/images/event1.png",
    title: "React Summit US 2026",
    slug: "react-summit-us-2026",
    location: "Los Angeles, CA, USA",
    date: "2026-09-01",
    time: "09:00 AM",
  },
  {
    image: "/images/event2.png",
    title: "KubeCon + CloudNativeCon Europe 2026",
    slug: "kubecon-cloudnativecon-eu-2026",
    location: "San Francisco, CA, USA",
    date: "2026-09-15",
    time: "10:00 AM",
  },
  {
    image: "/images/event3.png",
    title: "ETHGlobal Hackatho: Paris 2026",
    slug: "ethglobal-paris-2026",
    location: "Paris, France",
    date: "2026-09-20",
    time: "11:00 AM",
  },
  {
    image: "/images/event4.png",
    title: "Open Source Summit North America 2026",
    slug: "open-source-summit-2026",
    location: "Vancouver, Canada",
    date: "2026-10-05",
    time: "10:30 AM",
  },
  {
    image: "/images/event5.png",
    title: "AWS re:Invent 2026",
    slug: "aws-reinvent-2026",
    location: "Chennai, India",
    date: "2026-10-15",
    time: "10:30 AM",
  },
  {
    image: "/images/event6.png",
    title: "Google Cloud Next 2026",
    slug: "google-cloud-next-2026",
    location: "Nevada, TX, USA",
    date: "2026-11-15",
    time: "10:30 AM",
  },
];
