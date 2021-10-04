import React from "react";

const TransformAndStandOut = [
  {
    title: "Transform your brand",
    id: "transform",
    description:
      "We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.",
  },
  {
    title: "Stand out to the right audience",
    id: "stand-out",
    description:
      "Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. ",
  },
];

const DesignAndPhotography = [
  {
    title: "Graphic design",
    className: "graphic-design-image",
    description:
      "Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.",
  },
  {
    title: "Photography",
    className: "photography-image",
    description:
      "Increase your credibility by getting the most stunning, high-quality photos that improve your business image.",
  },
];

const Images = () => (
  <>
    <section>
      {TransformAndStandOut.map(({ title, description, id }, index) => {
        const imageClassNames = `h-[300px] sm:h-[500px] lg:h-auto lg:w-1/2 ${id}-image`;
        const learnMoreClassNames = `relative p-2 font-serif uppercase text-Very-dark-desaturated-blue ${id}-learn-more`;

        return (
          <div
            className="text-center lg:text-left lg:flex lg:odd:flex-row-reverse"
            key={index}
          >
            <div className={imageClassNames}></div>

            <div className="px-6 py-12 lg:p-20 xl:py-36 xl:px-32 lg:w-1/2">
              <h2 className="px-2 font-serif text-3xl font-black leading-snug lg:text-4xl xl:text-5xl lg:leading-[1.2] lg:px-0 text-Very-dark-desaturated-blue">
                {title}
              </h2>

              <p className="py-6 leading-[1.7] text-Very-dark-grayish-blue lg:py-8">
                {description}
              </p>

              <a className={learnMoreClassNames} href="/#">
                Learn more
              </a>
            </div>
          </div>
        );
      })}
    </section>

    <section className="md:flex">
      {DesignAndPhotography.map(({ title, description, className }) => {
        const containerClassNames = `md:w-1/2 text-center pt-[20rem] pb-10 sm:pt-[24rem] ${className}`;

        return (
          <div className={containerClassNames} key={title}>
            <h2 className="pb-5 font-serif text-2xl font-black text-Dark-blue">
              {title}
            </h2>

            <p className="px-3 text-base text-Dark-blue md:px-10 lg:px-20 xl:px-44">
              {description}
            </p>
          </div>
        );
      })}
    </section>
  </>
);

export default Images;
