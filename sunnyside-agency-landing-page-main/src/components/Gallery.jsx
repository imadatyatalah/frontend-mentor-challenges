import React from "react";

const MOBILE_IMAGES = [
  {
    mobileSrc: "/mobile/image-gallery-milkbottles.jpg",
    desktopSrc: "/desktop/image-gallery-milkbottles.jpg",
    alt: "milk bottles",
  },
  {
    mobileSrc: "/mobile/image-gallery-orange.jpg",
    desktopSrc: "/desktop/image-gallery-orange.jpg",
    alt: "orange",
  },
  {
    mobileSrc: "/mobile/image-gallery-cone.jpg",
    desktopSrc: "/desktop/image-gallery-cone.jpg",
    alt: "cone",
  },
  {
    mobileSrc: "/mobile/image-gallery-sugar-cubes.jpg",
    desktopSrc: "/desktop/image-gallery-sugarcubes.jpg",
    alt: "sugar cubes",
  },
];

const Gallery = () => (
  <section className="grid grid-cols-2 md:flex">
    {MOBILE_IMAGES.map(({ mobileSrc, desktopSrc, alt }) => (
      <div key={alt}>
        <img src={mobileSrc} alt={alt} className="md:hidden" />
        <img src={desktopSrc} alt={alt} className="hidden md:block" />
      </div>
    ))}
  </section>
);

export default Gallery;
