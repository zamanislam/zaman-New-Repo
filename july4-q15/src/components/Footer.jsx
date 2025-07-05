import { useContext } from "react";
import { Box, Text } from "@chakra-ui/react";
import { ThemeContext } from "../contexts/ThemeContext";

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Box
      as="footer"
      p="4"
      textAlign="center"
      bg={theme === "light" ? "gray.200" : "gray.700"}
      color={theme === "light" ? "black" : "white"}
    >
      <Text>© 2025 Dashboard Footer</Text>
    </Box>
  );
};

export default Footer;
