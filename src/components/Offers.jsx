import React from "react";

const Offers = () => {
  return (
    <div className="bg-white">
      <div className="relative pt-32 pb-8">
        <div className="w-full">
          <div className="w-full px-4 mx-auto max-w-[1400px]">
            <div className="pt-4 pb-4">
              <h1 className="md:text-3xl text-colorTwo font-bold">
                Current <span className="text-colorOne">Offers</span>
              </h1>
            </div>

            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
              <div>
                <img
                  src="https://boodmo.com/media/images/slider/a8de7de.webp"
                  alt=""
                  className="rounded"
                />
              </div>
              <div>
                <img
                  src="https://boodmo.com/media/images/slider/25b4c7c.webp"
                  alt=""
                  className="rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
