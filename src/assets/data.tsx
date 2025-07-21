import { ReactElement } from "react";
import { IoLogoDocker, IoLogoFirebase, IoLogoReact } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { FaGithub, FaPython } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaAws } from "react-icons/fa";

interface Experience {
  company: string;
  title: string;
  dates: string;
  bulletList: string[];
  skills: ReactElement[];
}

const IconText = ({ icon, text }: { icon?: ReactElement; text: string }) => {
  return (
    <div className="flex items-center gap-2">
      {icon}
      <span>{text}</span>
    </div>
  );
};

export const experiences: Experience[] = [
  {
    company: "CDK Global",
    title: "Software Engineer Intern",
    dates: "June 2025 - August 2025",
    bulletList: [
      "Developing features for a ASP.NET web application on the OEM team that handles car service appointment scheduling.",
      "Participating in bi-weekly sprints within a Scrum-based Agile team to integrate appointment data into a dealership-facing dashboard, streamlining workflows for service staff",
    ],
    skills: [
      <IconText text=".NET/C#" />,
      <IconText icon={<FaGithub />} text="Github" />,
      <IconText icon={<BiLogoPostgresql />} text="PosgreSQL" />,
      <IconText icon={<FaAws />} text="Azure" />,
    ],
  },
  {
    company: "ReCat(startup in Garage)",
    title: "Software Engineer",
    dates: "March 2024 - September 2024",
    bulletList: [
      "Engineered a a cross-platform application in React Native achieving a 20% improvement in user satisfaction based on feedback.",
      "Developed a customizable settings screen, allowing users to tailor notification and preference settings.",
      "Engineered Data model representation to store and retrieve data from Firestore with low latency.",
    ],
    skills: [
      <IconText icon={<IoLogoDocker />} text="Docker" />,
      <IconText icon={<BiLogoTypescript />} text="Typescript" />,
      <IconText icon={<IoLogoFirebase />} text="Firebase" />,
      <IconText icon={<FaGithub />} text="Github" />,
    ],
  },
  {
    company: "Franqbox",
    title: "Software Developer",
    dates: "May 2020 - September 2021",
    bulletList: [
      "Redesigned the business dashboard using React.js and Ant Design and developed a multi-step onboarding system, improving user experience and onboarding efficiency.",
      "Developed controllers using Express.js to retrieve data from PostgreSQL, reducing query response times by 15% by adding indexing and optimizing database queries",
    ],
    skills: [
      <IconText icon={<IoLogoDocker />} text="Docker" />,
      <IconText icon={<BiLogoTypescript />} text="Typescript" />,
      <IconText icon={<IoLogoFirebase />} text="Firebase" />,
      <IconText icon={<FaGithub />} text="Github" />,
    ],
  },
];

interface Project {
  title: string;
  desc: string;
  img: string;
  stack: ReactElement[];
  link: string;
}

export const projects: Project[] = [
  {
    title: "GroceryScout",
    desc: "GroceryScout makes it easy to track and compare grocery prices across stores to save money on your shopping.",
    img: "/grocery.png",
    stack: [
      <IconText icon={<IoLogoReact />} text="React" />,
      <IconText icon={<IoLogoFirebase />} text="Firebase" />,
    ],
    link: "https://food-price-tracker-gamma.vercel.app",
  },
  {
    title: "LeFinance",
    desc: "LeFinance is a simplistic stock portfolio app. It uses Firebase for authenticating users and multiple AWS services for sending newsletter and databaser services It helps users keep track of the stocks and run simplictic Meta Prophet model on the stock price to predict future price.",
    img: "/stocks.png",
    stack: [
      <IconText icon={<IoLogoReact />} text="React" />,
      <IconText icon={<IoLogoDocker />} text="Docker" />,
      <IconText icon={<IoLogoFirebase />} text="Firebase" />,
      <IconText icon={<FaAws />} text="AWS" />,
      <IconText icon={<FaPython />} text="Python" />,
    ],
    link: "https://youtu.be/LdEM6BMSbyU",
  },
  {
    title: "Minesweeper",
    desc: "Minimalistic minesweeper game clone, using C/C++ and SFML.",
    img: "/minesweeper.png",
    stack: [<IconText text="C/C++" />, <IconText text="SFML" />],
    link: "https://youtu.be/MQIdJqihNJo",
  },
  {
    title: "Portfolio",
    desc: "This portfolio website, built with React and Tailwind CSS, showcases my projects and skills.",
    img: "/portfolio.png",
    stack: [
      <IconText icon={<IoLogoReact />} text="React" />,
      <IconText text="Tailwind CSS" />,
    ],
    link: "https://github.com/HarutSargsyan/harutsargsyan.github.io",
  },
];
