import React from "react";

const REVIEWS = [
  {
    image: "/image-emily.jpg",
    review:
      "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
    name: "Emily R.",
    job: "Marketing Director",
  },
  {
    image: "/image-thomas.jpg",
    review:
      "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.",
    name: "Thomas S.",
    job: "Chief Operating Officer",
  },
  {
    image: "/image-jennie.jpg",
    review:
      "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
    name: "Jennie F.",
    job: "Business Owner",
  },
];

const Testimonials = () => (
  <section className="py-16 text-center">
    <h2 className="font-serif tracking-[0.25em] uppercase text-Dark-grayish-blue">
      Client testimonials
    </h2>

    <div className="lg:grid lg:grid-cols-3 lg:gap-10 lg:pt-16 lg:px-10">
      {REVIEWS.map(({ image, review, name, job }) => {
        return (
          <div
            className="flex flex-col items-center px-6 my-14 sm:px-20 md:px-32 lg:px-0 lg:my-0"
            key={image}
          >
            <img src={image} alt={name} className="w-20 rounded-full" />

            <p className="py-8 leading-relaxed text-Very-dark-grayish-blue">
              {review}
            </p>

            <h3 className="font-serif text-Very-dark-desaturated-blue">
              {name}
            </h3>

            <small className="text-Dark-grayish-blue">{job}</small>
          </div>
        );
      })}
    </div>
  </section>
);

export default Testimonials;
