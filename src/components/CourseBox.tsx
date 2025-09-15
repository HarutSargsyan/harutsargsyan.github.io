export default ({
  title,
  bullets,
  tags,
}: {
  title: string;
  bullets: string[];
  tags?: string[];
}) => {
  return (
    <div className="group flex gap-6 rounded-lg bg-white p-5">
      <div className="">
        <h2 className="text-2xl font-semibold mb-2 group-hover:text-primary">
          {title}
        </h2>
        <ul className="list-disc pl-5 space-y-2 mb-3">
          {bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
        {tags && tags.length > 0 && (
          <div className="flex gap-2 mt-1 flex-wrap">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-full bg-gray-200 group-hover:bg-secondary text-gray-700 text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};


