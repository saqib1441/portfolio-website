"use client";

import { RiLinkedinFill, RiGithubFill, RiFacebookFill } from "react-icons/ri";

import Link from "next/link";

const icons = [
  {
    path: "https://www.linkedin.com/in/m-saqib-ali/",
    name: <RiLinkedinFill />,
  },
  {
    path: "https://github.com/saqib1441",
    name: <RiGithubFill />,
  },
  {
    path: "https://www.facebook.com/msaqib.ali.31392",
    name: <RiFacebookFill />,
  },
];

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons &&
        icons.map((icon, key) => {
          return (
            <Link href={icon.path} key={key}>
              <div className={`${iconsStyles}`}>{icon.name}</div>
            </Link>
          );
        })}
    </div>
  );
};

export default Socials;
