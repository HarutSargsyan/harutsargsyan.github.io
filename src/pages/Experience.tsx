import FeatureBox from "../components/FeatureBox";
import { experiences } from "../assets/data.tsx";

export default () => {
  return (
    <div>
      <h2 className="text-2xl mb-5 font-bold">My Experinces</h2>
      <div className="flex flex-col gap-8">
        {experiences.map((experience, index) => (
          <FeatureBox key={index} {...experience} />
        ))}
      </div>
    </div>
  );
};
