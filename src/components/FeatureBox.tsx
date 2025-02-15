import { ReactElement } from "react";

export default ({
  title,
  company,
  dates,
  bulletList,
  skills,
}: {
  title: string;
  company: string;
  dates: string;
  bulletList: string[];
  skills: ReactElement[];
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>

      <div className="flex items-center mb-2">
        <div className="text-primary font-medium text-lg">{company}</div>
      </div>

      <div className="text-gray-600 italic mb-4">{dates}</div>

      <ul className="list-disc pl-5 space-y-3 mb-6">
        {bulletList.map((bullet, index) => (
          <li key={index} className="text-gray-800">
            {bullet}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 rounded-full bg-gray-200 hover:bg-secondary text-gray-700 text-sm font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};
