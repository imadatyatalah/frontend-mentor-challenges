import Image from "next/image";

import { ourCreations } from "../../config";
import Button from "./Button";

const OurCreations = () => (
  <section className="font-Josefin-Sans mb-16">
    <div className="container px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
      <div className="text-center">
        <div className="py-4 sm:flex sm:justify-between sm:items-center sm:px-6 md:px-0 lg:px-7 xl:px-4 2xl:px-11">
          <h1 className="uppercase text-4xl">Our creations</h1>

          <Button className="hidden sm:block sm:mb-2">See All</Button>
        </div>

        <div className="sm:grid sm:grid-cols-2 md:grid-cols-3 md:gap-x-5 lg:grid-cols-3 lg:gap-x-0 xl:grid-cols-4">
          {ourCreations.map(({ title, imgSrcMobile, imgSrcDesktop }) => (
            <section key={title}>
              <div className="relative">
                <div className="group my-3 sm:hidden">
                  <Image
                    src={imgSrcMobile}
                    alt={title}
                    title={title}
                    width="654"
                    height="240"
                    className="cursor-pointer group-hover:opacity-30 duration-300"
                  />
                  <h1 className="uppercase absolute bottom-4 left-4 text-left w-1/2 text-3xl text-white group-hover:text-black duration-300">
                    {title}
                  </h1>
                </div>

                <div className="hidden group sm:block sm:my-2">
                  <Image
                    src={imgSrcDesktop}
                    alt={title}
                    title={title}
                    width="256"
                    height="450"
                    className="cursor-pointer group-hover:opacity-30 duration-300"
                  />
                  <h1 className="uppercase absolute left-11 bottom-6 text-left w-1/3 md:left-6 lg:left-11 text-3xl 2xl:left-16 2xl:bottom-5 text-white group-hover:text-black duration-300">
                    {title}
                  </h1>
                </div>
              </div>
            </section>
          ))}
        </div>

        <Button className="mt-2 mb-5 sm:hidden">See All</Button>
      </div>
    </div>
  </section>
);

export default OurCreations;
