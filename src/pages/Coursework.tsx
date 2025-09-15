import CourseBox from "../components/CourseBox";
import { coursework } from "../assets/data";

export default () => {
  return (
    <div className="animate-fade">
      <h2 className="text-2xl mb-5 font-bold">Coursework</h2>

      <div className="px-2 sm:px-20 flex flex-col gap-6">
        {coursework.map((course, idx) => (
          <CourseBox key={idx} title={course.title} bullets={course.bullets} tags={course.tags} />
        ))}
      </div>
    </div>
  );
}