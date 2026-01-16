import React from "react";

const SkeletonBox = ({ className = "" }) => (
  <div className={`bg-gray-200 dark:bg-gray-700 animate-pulse rounded ${className}`} />
);

export default function MatchesSkeleton() {
  return (
    <div className="space-y-6 bg-white ml-auto py-4 px-5 pb-10 shadow-sm max-sm:px-3 max-lg:w-full">
      <div className="h-6 w-1/4 bg-gray-200 rounded animate-pulse" />

      <div className="grid grid-cols-5 gap-2 max-sm:gap-6 max-md:grid-cols-2 max-sm:grid-cols-1">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden border border-gray-300"
          >
            <SkeletonBox className="w-full h-52 object-cover" />

            <div className="p-3 pt-6 px-2 space-y-3">
              <div className="flex justify-between">
                <SkeletonBox className="h-4 w-1/2" />
                <SkeletonBox className="h-4 w-1/5" />
              </div>
              <SkeletonBox className="h-3 w-2/3" />

              {[...Array(6)].map((_, i) => (
                <SkeletonBox
                  key={i}
                  className="h-4 w-full rounded px-2 py-1 bg-gray-100"
                />
              ))}

              <div className="grid sm:flex sm:flex-col max-sm:grid-cols-2 gap-2 pt-2">
                {[...Array(4)].map((_, i) => (
                  <SkeletonBox
                    key={i}
                    className="h-8 w-full bg-gray-200 rounded"
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
