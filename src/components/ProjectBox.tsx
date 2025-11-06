import { ReactElement } from "react";

export default ({
  img,
  title,
  desc,
  stack,
  link,
  index = 0,
}: {
  img: string;
  title: string;
  desc: string;
  stack: ReactElement[];
  link: string;
  index?: number;
}) => {
  const isEven = index % 2 === 0;
  
  const imageBox = (
    <div className="hidden sm:block rounded-xl flex-shrink-0 bg-white shadow-lg p-2 group-hover:opacity-[50%]">
      <img src={img} alt="" className="h-64 w-64 object-cover rounded-lg" />
    </div>
  );
  
  const descriptionBox = (
    <div className="flex-1 rounded-xl bg-white p-5 shadow-lg">
      <h2 className="text-2xl font-semibold mb-2 group-hover:text-primary">
        {title}
      </h2>
      <p>{desc}</p>
      <div className="flex gap-2 mt-3 flex-wrap">
        {stack.map((skill, skillIndex) => (
          <span
            key={skillIndex}
            className="px-3 py-1 rounded-full bg-gray-200 group-hover:bg-secondary text-gray-700 text-sm font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <a target="_blank" href={link} className="group flex gap-6">
      {isEven ? (
        <>
          {imageBox}
          {descriptionBox}
        </>
      ) : (
        <>
          {descriptionBox}
          {imageBox}
        </>
      )}
    </a>
  );
};
