import { useContext } from "react";
import { Flex, Button, Text } from "@chakra-ui/react";
import { AuthContext } from "../contexts/AuthContext";
import { ThemeContext } from "../contexts/ThemeContext";

const Navbar = () => {
  const { isLoggedIn, toggleAuth } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Flex
      justify="space-between"
      p={4}
      bg={theme === "light" ? "gray.200" : "gray.700"}
      color={theme === "light" ? "black" : "white"}
    >
      <Text>{isLoggedIn ? "Logged In" : "Logged Out"}</Text>
      <Flex gap={2}>
        <Button onClick={toggleAuth}>
          {isLoggedIn ? "Logout" : "Login"}
        </Button>
        <Button onClick={toggleTheme}>
          Toggle to {theme === "light" ? "Dark" : "Light"}
        </Button>
      </Flex>
    </Flex>
  );
};

export default Navbar;
