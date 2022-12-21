import {
  IoCodeWorking,
  IoLogoGithub,
  IoLogoYoutube,
  IoLogoTwitter,
  IoLogoLinkedin,
  IoLogoWhatsapp,
} from "react-icons/io5";
import img1 from "./images/IP-locator.jpg";
import img2 from "./images/app1.jpg";
import img3 from "./images/Memory token pic.jpg";
import img4 from "./images/AgroTip pic.jpg";
import img5 from "./images/portfolio pic.jpg";

export const Experience = [
  {
    id: 1,
    date: "2020 - 2024",
    iconsSrc: <IoCodeWorking />,
    title: "SRM Institute of Technology",
    location: "Chennai, India",
    description:
      "Btech in CSE with specializtion in Information Technology",
  },
  {
    id: 2,
    date: "2018 - 2020",
    iconsSrc: <IoCodeWorking />,
    title: "Khar Education Society Jr College",
    location: "Mumbai, Maharashtra",
    description:
      "Science , HSC Board",
  },
  {
    id: 3,
    date: "2006-2018",
    iconsSrc: <IoCodeWorking />,
    title: "Saraswati Vidyalaya",
    location: "Thane, Maharashtra",
    description:
      "SSC board",
  },
];

export const Projects = [
  {
    id: 1,
    name: "IP-Locator",
    imageSrc: img1,
    techs: "React Js, React-Leaflet, Javascript",
    github: "https://github.com/ZERstar/CN",
  },
  {
    id: 2,
    name: "Serenity App",
    imageSrc: img2,
    techs: "React Js, Sanity, Tailwind CSS",
    github: "https://github.com/ZERstar/envision",
  },
  {
    id: 3,
    name: "Memory Token Game",
    imageSrc: img3,
    techs: "React Js, Chakra UI, Google API",
    github: "https://github.com/ZERstar/Memory-Token-Game",
  },
  {
    id: 4,
    name: "AgroTip",
    imageSrc: img4,
    techs: "React Js,  Material UI",
    github: "https://github.com/ZERstar/AgroTip",
  },
  {
    id: 5,
    name: "Portfolio",
    imageSrc: img5,
    techs: "React Js,  Material UI",
    github: "https://github.com/ZERstar/Portfolio",
  },
];

export const SocialLinks = [
  {
    id: 1,
    iconSrc: <IoLogoGithub className="text-textBase text-3xl cursor-pointer" />,
    name: "GitHub",
    link: "https://github.com/ZERstar",
  },

  {
    id: 1,
    iconSrc: (
      <IoLogoLinkedin className="text-blue-800 text-3xl cursor-pointer" />
    ),
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/tejas-dumbre-44aa42183/",
  },
];
