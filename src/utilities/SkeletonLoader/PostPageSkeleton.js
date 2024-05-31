import React from "react";

export default function PostPageSkeleton() {
  return (
    <>
      <div role="status" class="animate-pulse">
        <main className=" min-h-screen p-4 md:p-8 lg:p-20   max-w-screen-2xl m-auto">
          <div className="px-0 lg:px-[100px] pb-4 border-b border-gray-200 mb-6">
            <div class="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
            <div class="w-48 h-3.5 bg-gray-200 rounded-full dark:bg-gray-700 mb-2"></div>
            <div class="flex items-center justify-center h-96 mb-4 bg-gray-300 rounded dark:bg-gray-700">
              <svg
                class="w-10 h-10 text-gray-200 dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 20"
              >
                <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
              </svg>
            </div>
            <div className="flex justify-between items-center mt-4">
              <div className="flex items-center gap-3">
                <svg
                  class="w-10 h-10 me-3 text-gray-200 dark:text-gray-700"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                </svg>
                <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
              </div>
              <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
            </div>
            <div className="w-full h-px bg-gray-200 mt-4 mb-6"></div>
            <div className="mb-4">
              <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
              <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
              <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
              <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
              <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            </div>
          </div>
          {/*  */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-6">
                {[1,2,3].map((dd)=>(
                    <>
                    <div className="flex flex-col gap-4 group">
                <div class="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
                  <svg
                    class="w-10 h-10 text-gray-200 dark:text-gray-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 20"
                  >
                    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                  </svg>
                </div>
                <div className="w-full">
                  <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-20 mb-2.5"></div>
                  <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                  <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                  <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                  <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                  <div className="flex items-center gap-3">
                    <svg
                      class="w-10 h-10 me-3 text-gray-200 dark:text-gray-700"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                    </svg>
                    <div className="flex items-center gap-2">
                      <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5">
                        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12 mb-2.5"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                    </>
                ))}
              
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
