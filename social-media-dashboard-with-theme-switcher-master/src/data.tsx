import IconFacebook from "./icons/IconFacebook";
import IconInstagram from "./icons/IconInstagram";
import IconTwitter from "./icons/IconTwitter";
import IconYoutube from "./icons/IconYoutube";

export const data = [
  {
    icon: <IconFacebook />,
    username: "@nathanf",
    followers: 1987,
    text: "Followers",
    number: 12,
    socialMediaApp: "facebook",
  },
  {
    icon: <IconTwitter />,
    username: "@nathanf",
    followers: 1044,
    text: "Followers",
    number: 99,
    socialMediaApp: "twitter",
  },
  {
    icon: <IconInstagram />,
    username: "@realnathanf",
    followers: "11k",
    text: "Followers",
    number: 1099,
    socialMediaApp: "instagram",
  },
  {
    icon: <IconYoutube />,
    username: "Nathan F.",
    followers: 8239,
    text: "Subscribers",
    number: -144,
    socialMediaApp: "youtube",
  },
];

export const todaysOverview = [
  { title: "Page Views", number: 87, percentage: 3, icon: <IconFacebook /> },
  { title: "Likes", number: 52, percentage: -2, icon: <IconFacebook /> },
  {
    title: "Likes",
    number: 5462,
    percentage: 2257,
    icon: <IconInstagram />,
  },
  {
    title: "Profile Views",
    number: "52k",
    percentage: 1375,
    icon: <IconInstagram />,
  },
  { title: "Retweets", number: 117, percentage: 303, icon: <IconTwitter /> },
  { title: "Likes", number: 507, percentage: 553, icon: <IconTwitter /> },
  { title: "Likes", number: 107, percentage: -19, icon: <IconYoutube /> },
  {
    title: "Total Views",
    number: 1407,
    percentage: -12,
    icon: <IconYoutube />,
  },
];
