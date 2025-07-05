import { Box, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <Box p={4}>
      <Text fontSize="2xl" fontWeight="bold">About This Project</Text>
      <Text mt={2}>This is a simple blog app created using React and Chakra UI.</Text>
    </Box>
  );
};

export default About;
