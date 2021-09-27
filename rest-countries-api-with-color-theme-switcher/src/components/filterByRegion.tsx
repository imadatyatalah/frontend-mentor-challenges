import React, { Fragment } from "react";

import { Menu, Transition } from "@headlessui/react";

import { ArrowDown } from "./icons/arrows";

const FilterByRegion = ({ children }: { children: React.ReactNode }) => (
  <Menu as="div" className="mt-8 z-10 w-56 relative inline-block text-left">
    <div>
      <Menu.Button className="element text inline-flex justify-between items-center w-full px-6 py-4 text-sm font-semibold rounded-md shadow-lg-center focus:outline-none">
        Filter by Region
        <ArrowDown />
      </Menu.Button>
    </div>
    <Transition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <Menu.Items className="absolute w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-dark-blue">
        <div className="px-4 py-1">{children}</div>
      </Menu.Items>
    </Transition>
  </Menu>
);

export const MenuItem = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?(): void;
}) => (
  <Menu.Item onClick={onClick}>
    <button
      className={
        "font-semibold group flex items-center w-full px-2 py-2 text-sm"
      }
    >
      {children}
    </button>
  </Menu.Item>
);

export default FilterByRegion;
