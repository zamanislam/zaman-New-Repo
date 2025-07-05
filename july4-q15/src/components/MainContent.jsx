import { useContext } from "react";
import { Grid, Box } from "@chakra-ui/react";
import { ThemeContext } from "../contexts/ThemeContext";

const MainContent = () => {
  const { theme } = useContext(ThemeContext);
  const products = ["Product 1", "Product 2", "Product 3", "Product 4"];

  return (
    <Grid
      templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
      gap={4}
      p={4}
      flex="1"
    >
      {products.map((product, index) => (
        <Box
          key={index}
          p={4}
          bg={theme === "light" ? "gray.300" : "gray.600"}
          color={theme === "light" ? "black" : "white"}
          borderRadius="md"
        >
          {product}
        </Box>
      ))}
    </Grid>
  );
};

export default MainContent;
