import { Flex } from "@chakra-ui/react";

import NextImage from "next/image";
import NextLink from "next/link";

const Logo = () => {
  return (
    <>
      <Flex align="center" mr={5}>
        <NextLink href="/">
          <a>
            <NextImage
              src="/images/logo.svg"
              width="121"
              height="33"
              alt="shortly logo"
              title="Shortly Logo"
            />
          </a>
        </NextLink>
      </Flex>
    </>
  );
};

export default Logo;
