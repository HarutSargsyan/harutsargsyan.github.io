import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export default () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between md:mt-25 animate-fade">
      <div className="flex-[1] flex flex-col justify-center md:max-w-170">
        <div className="flex mb-5">
          <span className="text-6xl md:text-7xl text-primary font-bold typing typing-seq-1">
            <span className="text-black">I'm</span> Harut Sargsyan
          </span>
        </div>
        <div className="flex flex-col mb-6">
          <span className="text-2xl md:text-4xl font-medium overflow-hidden whitespace-nowrap typing typing-seq-2 caret-half">
            - Software Developer
          </span>
          <span className="text-2xl md:text-4xl font-medium overflow-hidden whitespace-nowrap typing typing-seq-3">
            - BS/MS in CS at Northwestern University
          </span>
        </div>
        <div className="mb-3">
          <span className="text-2xl line leading-10">
            I am a Software Engineer, student, and lifelong learner with a
            passion for building impactful technology. My journey has led me to
            engineer scalable web apps, optimize APIs with Redis caching and
            database indexing, and design modular React Native components that
            improved user experience. Along the way, I’ve honed my collaboration
            and mentorship skills through leading peer review sessions. I’m
            eager to keep growing as a developer and contribute to meaningful,
            real-world solutions.
          </span>
        </div>
        <div className="justify-center md:justify-start flex space-around gap-x-3">
          <a
            className="flex items-center"
            href="https://www.github.com/harutsargsyan"
            target="_blank"
          >
            <FaGithub size={35} className="w-9 h-9 inline hover:fill-primary" />
          </a>
          <a
            className="flex items-center"
            href="https://www.linkedin.com/in/harutyunsargsyan/"
            target="_blank"
          >
            <FaLinkedin className="w-9 h-9 inline hover:fill-primary" />
          </a>
          <a
            className="flex items-center"
            href="mailto:harutsargsyan2027@u.northwestern.edu"
            target="_blank"
          >
            <IoMdMail className="w-9 h-9 inline hover:fill-primary" />
          </a>
          <a className="flex items-center" href="/Resume.pdf" target="_blank">
            <FaFileAlt className="w-8 h-8 inline hover:fill-primary" />
          </a>
        </div>
      </div>
      <div className="flex-[1] hidden max-w-80 md:block mt-10 aspect-square rounded-full overflow-hidden border-4 border-primary">
        <img
          src="/harut.jpg"
          alt="My image"
          className="aspect-square w-full h-full object-cover"
        />
      </div>
    </div>
  );
};
