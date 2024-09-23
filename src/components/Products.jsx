import React from "react";

const Products = () => {
  return (
    <div className="bg-white">
      <div className="relative pt-8 pb-8">
        <div className="w-full">
          <div className="w-full px-4 mx-auto max-w-[1400px]">
            <div className="pt-4 pb-4">
              <h1 className="md:text-3xl text-colorTwo font-bold">
                Why Choose Our <span className="text-colorOne">Products?</span>
              </h1>
            </div>

            <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
              <a href="" class="flex md:justify-start justify-center">
                <div class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                  <div class="space-y-4">
                    <div class="flex justify-center items-center">
                      <img
                        src="https://boodmo.com/media/images/categories/e1aba2b.svg"
                        alt=""
                        class="w-20 h-20"
                      />
                    </div>
                    <div class="flex justify-center items-center">
                      <h1 class=" text-2xl text-colorTwo font-bold">
                        Original Products
                      </h1>
                    </div>

                    <div class="flex justify-center items-center text-gray-600 text-center">
                      <p>Only reliable parts from trusted Aftermarket brands</p>
                    </div>
                  </div>
                </div>
              </a>

              <a href="" class="flex md:justify-start justify-center">
                <div class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                  <div class="space-y-4">
                    <div class="flex justify-center items-center">
                      <img
                        src="https://boodmo.com/media/images/categories/83cd783.svg"
                        alt=""
                        class="w-20 h-20"
                      />
                    </div>

                    <div class="flex justify-center items-center">
                      <h1 class=" text-2xl text-colorTwo font-bold">
                        Affordable Rates
                      </h1>
                    </div>

                    <div class="flex justify-center items-center text-gray-600 text-center">
                      <p>
                        Repairing a damaged vehicle can be expensive. Using the
                        aftermarket products is a good solution if you're on a
                        budget
                      </p>
                    </div>
                  </div>
                </div>
              </a>

              <a href="" class="flex md:justify-start justify-center">
                <div class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                  <div class="space-y-4">
                    <div class="flex justify-center items-center">
                      <img
                        src="https://boodmo.com/media/images/categories/e39dc1a.svg"
                        alt=""
                        class="w-20 h-20"
                      />
                    </div>

                    <div class="flex justify-center items-center">
                      <h1 class=" text-2xl text-colorTwo font-bold">
                        Wide variety
                      </h1>
                    </div>

                    <div class="flex justify-center items-center text-gray-600 text-center">
                      <p>
                        We have something for everyone when it comes to
                        aftermarket products. Just apply the "Aftermarket"
                        filter in the catalogue and check the offers
                      </p>
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

export default Products;
