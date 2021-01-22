import { Button, useBreakpointValue } from "@chakra-ui/react";

export const CallToActionPrimary = ({ children }) => {
  return (
    <>
      <Button
        variant="solid"
        bg="brandCyan"
        _hover={{ opacity: "60%" }}
        _active={{
          opacity: "60%",
        }}
        rounded="3xl"
        my={{ base: "3", md: "0" }}
        w={{ base: "80%", md: "7rem" }}
        h={{ base: "3rem", md: "2.5rem" }}
        fontWeight="700"
      >
        {children}
      </Button>
    </>
  );
};

export const CallToActionSecondary = ({ children }) => {
  const hover = useBreakpointValue({ base: "none", md: "black" });

  return (
    <>
      <Button
        variant="ghost"
        my={{ base: "3", md: "0" }}
        w={{ base: "80%", md: "7rem" }}
        h={{ base: "3rem", md: "2.5rem" }}
        textColor={{ base: "white", md: "brandGrayishViolet" }}
        _hover={{
          textColor: hover,
          transition: "ease-in-out",
          transitionDuration: "300ms",
        }}
        _focus={{}}
        _active={{}}
        fontWeight="700"
      >
        {children}
      </Button>
    </>
  );
};
