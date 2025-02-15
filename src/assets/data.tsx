import { ReactElement } from "react";
import { IoLogoDocker, IoLogoFirebase } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
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
    company: "SLYD",
    title: "Software Engineer Intern",
    dates: "June 2024 - September 2024",
    bulletList: [
      "Designed a C#(.NET) web application allowing users to rent and lend computer resources, streamlining resource sharing among users.",
      "Deduced Entity Relational Diagrams out of the business logic of application and created PostgreSQL schemas by utilizing Entity Framework.",
      "Implemented resource sharing functionality and secure SSH connections through Canonical LXD API and Cloudflare tunneling, enhancing reliability and user experience",
      "Ensured consistent environment by containerizing the application with Docker and automated CI/CD pipelines by utilizing Github Action for deploying the application to AWS ECR, reducing deployment time by 30%.",
    ],
    skills: [
      <IconText text=".NET/C#" />,
      <IconText icon={<IoLogoDocker />} text="Docker" />,
      <IconText icon={<FaGithub />} text="Github" />,
      <IconText icon={<BiLogoPostgresql />} text="PosgreSQL" />,
      <IconText icon={<FaAws />} text="AWS" />,
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
    company: "ReCat(startup in Garage)",
    title: "Software Engineer",
    dates: "March 2024 - September 2024",
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
