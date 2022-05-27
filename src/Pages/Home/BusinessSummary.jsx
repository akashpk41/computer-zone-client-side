import React from "react";

const BusinessSummary = () => {
  return (
    <section className="my-10 mx-2 py-7 justify-center md:mx-12 border rounded-md border-secondary">
      <h1 className="text-2xl text-center font-bold my-3"> Why Choose US </h1>

      <div
        className="stats shadow flex-row  w-full
       "
      >
        <div className="stat mx-5  ">
          <div className="stat-figure text-primary">
            <img
              data-aos="fade-right"
              data-aos-duration="1500"
              src="https://previews.123rf.com/images/oliviart/oliviart2006/oliviart200600121/149000564-delivery-icon-isolated-on-white-background-fast-delivery-icon-fast-shipping-delivery-truck-truck-ico.jpg"
              alt=""
              className="w-20"
            />
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="stat-value text-primary"
          >
            25.6K
          </div>
          <div className="stat-title">Delivered</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <img
              data-aos="fade-down"
              data-aos-duration="1200"
              src="https://www.kindpng.com/picc/m/38-384784_globe-with-country-national-flags-png-image-world.png"
              alt=""
              className="w-12"
            />
          </div>
          <div data-aos="fade-up"
          data-aos-duration="1000" className="stat-value text-secondary">72</div>
          <div className="stat-title">Countries</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <img
              data-aos="fade-down"
              data-aos-duration="1400"
              src="https://icon-library.com/images/committee-icon/committee-icon-8.jpg"
              alt=""
              className="w-16"
            />
          </div>
          <div data-aos="fade-up"
          data-aos-duration="1000" className="stat-value">1500+</div>
          <div className="stat-title">Happy Clients</div>
        </div>
      </div>
    </section>
  );
};

export default BusinessSummary;
