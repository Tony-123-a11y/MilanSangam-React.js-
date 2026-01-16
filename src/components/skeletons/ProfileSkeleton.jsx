// SkeletonBox Component
const SkeletonBox = ({ className = "" }) => (
  <div className={`bg-gray-200 dark:bg-gray-700 animate-pulse rounded ${className}`} />
);

// ProfileSkeleton Component
const ProfileSkeleton = () => {
  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row gap-6 p-6 bg-gradient-to-r from-rose-50 to-pink-50 rounded-lg">
        <SkeletonBox className="w-32 h-32 md:w-40 md:h-40 rounded-full" />
        <div className="flex-1 space-y-4">
          <SkeletonBox className="w-1/2 h-6" />
          <SkeletonBox className="w-1/3 h-4" />
          <SkeletonBox className="w-1/4 h-4" />
          <SkeletonBox className="w-1/2 h-4" />
        </div>
      </div>

      <div className="my-8 flex justify-end">
        <SkeletonBox className="w-1/3 h-4" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="space-y-6">
            <div className="bg-white border border-gray-300 p-6 rounded-lg space-y-3">
              <SkeletonBox className="w-1/3 h-5" />
              {[...Array(3)].map((_, j) => (
                <SkeletonBox key={j} className="w-full h-4" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ProfileSkeleton;
