const UserCardShimmer = () => {
  return (
    <div className="flex flex-wrap gap-4">
      {[...Array(3)].map((_, index) => (
        <div
          key={index}
          className="card bg-base-100 w-96 shadow-sm animate-pulse"
        >
          <figure className="bg-gray-200 h-48 w-full rounded-t"></figure>
          <div className="card-body space-y-4">
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            <div className="h-3 bg-gray-200 rounded w-3/4"></div>
            <div className="flex gap-2 justify-end">
              <div className="h-4 bg-gray-300 rounded w-16"></div>
              <div className="h-4 bg-gray-300 rounded w-16"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserCardShimmer;
