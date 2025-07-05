import {
  ChakraProvider,
  Box,
  Flex,
  Grid,
  Button,
  extendTheme,
} from "@chakra-ui/react";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { ThemeContext } from "./ThemeContext";

// Optional: Add Chakra theme overrides
const customTheme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
});

function App() {
  const { isLoggedIn, toggleAuth } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  // Dynamic colors based on theme
  const navBg = theme === "light" ? "gray.100" : "gray.700";
  const cardBg = theme === "light" ? "gray.200" : "gray.600";
  const footerBg = theme === "light" ? "gray.300" : "gray.800";
  const textColor = theme === "light" ? "black" : "white";

  return (
    <ChakraProvider theme={customTheme}>
      <Flex
        as="nav"
        p="4"
        bg={navBg}
        justifyContent="space-between"
        color={textColor}
      >
        <Button onClick={toggleAuth}>
          {isLoggedIn ? "Log Out" : "Log In"}
        </Button>
        <Button onClick={toggleTheme}>
          Toggle to {theme === "light" ? "Dark" : "Light"} Theme
        </Button>
      </Flex>

      <Grid
        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
        gap="4"
        p="4"
      >
        {["Card 1", "Card 2", "Card 3"].map((card) => (
          <Box
            key={card}
            p="4"
            shadow="md"
            bg={cardBg}
            color={textColor}
            borderRadius="md"
          >
            {card}
          </Box>
        ))}
      </Grid>

      <Box as="footer" p="4" bg={footerBg} color={textColor} textAlign="center">
        {isLoggedIn ? "Welcome, User!" : "Please log in."}
      </Box>
    </ChakraProvider>
  );
}

export default App;
