import { ReactElement } from "react";

export default ({
  img,
  title,
  desc,
  stack,
  link,
}: {
  img: string;
  title: string;
  desc: string;
  stack: ReactElement[];
  link: string;
}) => {
  return (
    <a target="_blank" href={link} className="group flex gap-6 rounded-lg bg-grey bg-white p-5">
      <div className="hidden sm:block rounded-lg flex-shrink-0 bg-black transparent group-hover:opacity-[50%]">
        <img src={img} alt="" className="h-48 w-80 object-cover rounded-lg" />
      </div>
      <div className="">
        <h2 className="text-2xl font-semibold mb-2 group-hover:text-primary">
          {title}
        </h2>
        <p>{desc}</p>
        <div className="flex gap-2 mt-3 flex-wrap">
          {stack.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 rounded-full bg-gray-200 group-hover:bg-secondary text-gray-700 text-sm font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
};
