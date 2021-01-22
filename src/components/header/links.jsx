import { useState } from "react";
import { useBreakpointValue, Text, Box, Spacer, Flex } from "@chakra-ui/react";

import { links } from "../../../config";
import {
  CallToActionSecondary,
  CallToActionPrimary,
} from "../buttons/callToAction";
import NextLink from "next/link";

const MenuItems = ({ children }) => {
  const hover = useBreakpointValue({ base: "none", md: "black" });

  return (
    <Text
      as="li"
      my={{ base: 6, md: 0 }}
      mr={{ md: 6 }}
      display="block"
      textColor={{ base: "white", md: "brandGrayishViolet" }}
      _hover={{
        textColor: hover,
        transition: "ease-in-out",
        transitionDuration: "300ms",
      }}
    >
      {children}
    </Text>
  );
};

const Links = () => {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <>
      <Box
        display={{ base: "block", md: "none" }}
        cursor="pointer"
        mb="3"
        onClick={handleToggle}
      >
        <svg
          fill="#bfbfbf"
          width="25px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Box>

      <Box
        display={{ base: show ? "block" : "none", md: "flex" }}
        as="ul"
        width={{ base: "full", md: "auto" }}
        alignItems="center"
        textAlign={{ base: "center", md: "unset" }}
        flexGrow={1}
        bg={{ base: "brandDarkViolet", md: "none" }}
        rounded={{ base: "xl", md: "none" }}
        mb="3"
      >
        {links.map((link) => (
          <MenuItems key={link.title}>
            <NextLink href={link.path}>
              <a>{link.title}</a>
            </NextLink>
          </MenuItems>
        ))}
        <Spacer />
        <Flex direction={{ base: "column", md: "row" }} alignItems="center">
          <CallToActionSecondary>Login</CallToActionSecondary>
          <CallToActionPrimary>Sign Up</CallToActionPrimary>
        </Flex>
      </Box>
    </>
  );
};

export default Links;
