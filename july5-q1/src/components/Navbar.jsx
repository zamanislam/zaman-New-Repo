import { Link } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Flex gap={4} p={4} bg="blue.500" color="white">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </Flex>
  );
};

export default Navbar;
