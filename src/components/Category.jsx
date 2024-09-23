import React from "react";

const Category = () => {
  return (
    <div className="bg-white">
      <div className="relative pt-8 pb-8">
        <div className="w-full">
          <div className="w-full px-4 mx-auto max-w-[1400px]">
            <div className="pt-4 pb-4">
              <h1 className="md:text-3xl text-colorTwo font-bold">
                Search by <span className="text-colorOne">Category</span>
              </h1>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-5 grid-cols-1 gap-4">
              <a href="" class="flex md:justify-start justify-center">
                <div class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-6 dark:bg-gray-800 dark:border-gray-700">
                  <div class="space-y-4">
                    <div class="flex justify-center items-center">
                      <img
                        src="https://boodmo.com/media/images/categories/ebba234.svg"
                        alt=""
                        class="w-20 h-20"
                      />
                    </div>
                    <div class="flex justify-center items-center">
                      <h1 class="text-base text-colorTwo">
                        Maintenance Service Parts
                      </h1>
                    </div>
                  </div>
                </div>
              </a>

              <a href="" class="flex md:justify-start justify-center">
                <div class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-6 dark:bg-gray-800 dark:border-gray-700">
                  <div class="space-y-4">
                    <div class="flex justify-center items-center">
                      <img
                        src="https://boodmo.com/media/images/categories/10f1952.svg"
                        alt=""
                        class="w-20 h-20"
                      />
                    </div>

                    <div class="flex justify-center items-center">
                      <h1 class="text-base text-colorTwo">Air Conditioning</h1>
                    </div>
                  </div>
                </div>
              </a>

              <a href="" class="flex md:justify-start justify-center">
                <div class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-6 dark:bg-gray-800 dark:border-gray-700">
                  <div class="space-y-4">
                    <div class="flex justify-center items-center">
                      <img
                        src="https://boodmo.com/media/images/categories/51eb913.svg"
                        alt=""
                        class="w-20 h-20"
                      />
                    </div>

                    <div class="flex justify-center items-center">
                      <h1 class="text-base text-colorTwo">
                        Belts Chains & Rollers
                      </h1>
                    </div>
                  </div>
                </div>
              </a>

              <a href="" class="flex md:justify-start justify-center">
                <div class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-6 dark:bg-gray-800 dark:border-gray-700">
                  <div class="space-y-4">
                    <div class="flex justify-center items-center">
                      <img
                        src="https://boodmo.com/media/images/categories/d5dd6ce.svg"
                        alt=""
                        class="w-20 h-20"
                      />
                    </div>

                    <div class="flex justify-center items-center">
                      <h1 class="text-base text-colorTwo">Bearing</h1>
                    </div>
                  </div>
                </div>
              </a>

              <a href="" class="flex md:justify-start justify-center">
                <div class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-6 dark:bg-gray-800 dark:border-gray-700">
                  <div class="space-y-4">
                    <div class="flex justify-center items-center">
                      <img
                        src="https://boodmo.com/media/images/categories/50008e4.svg"
                        alt=""
                        class="w-20 h-20"
                      />
                    </div>

                    <div class="flex justify-center items-center">
                      <h1 class="text-base text-colorTwo">Body Parts</h1>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
