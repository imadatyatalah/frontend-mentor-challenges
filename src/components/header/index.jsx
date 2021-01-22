import { Box, Flex } from "@chakra-ui/react";

import Logo from "./logo";
import Links from "./links";

const Header = (props) => {
  return (
    <>
      <Box as="header">
        <Flex
          as="nav"
          align="center"
          justify="space-between"
          alignItems="center"
          wrap="wrap"
          padding="1.5rem"
          color="white"
          fontSize="18px"
          {...props}
        >
          <Logo />
          <Links />
        </Flex>
      </Box>
    </>
  );
};

export default Header;
