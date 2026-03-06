
const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 py-8">
      {Array.from({ length: 16 }).map((_, i) => (
        <div
          key={i}
          className="w-72 h-64 bg-gray-200 rounded-xl animate-pulse shadow-lg"
        >
          <div className="w-full h-44 bg-gray-300 rounded-t-xl mb-3"></div>
          <div className="h-4 w-2/3 bg-gray-300 rounded mb-2 mx-auto"></div>
          <div className="h-3 w-1/2 bg-gray-300 rounded mx-auto"></div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;