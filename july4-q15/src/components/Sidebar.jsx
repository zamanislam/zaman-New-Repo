import { useContext } from "react";
import { Box, Text } from "@chakra-ui/react";
import { AuthContext } from "../contexts/AuthContext";
import { ThemeContext } from "../contexts/ThemeContext";

const Sidebar = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);

  return (
    <Box
      w={{ base: "0", md: "200px" }}
      display={{ base: "none", md: "block" }}
      p="4"
      bg={theme === "light" ? "gray.100" : "gray.800"}
      color={theme === "light" ? "black" : "white"}
    >
      {isLoggedIn ? <Text>Welcome, User!</Text> : <Text>Please log in.</Text>}
    </Box>
  );
};

export default Sidebar;
