import { Box, Flex } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

function App() {
  return (
    <Flex direction="column" minH="100vh">
      <Navbar />
      <Flex flex="1">
        <Sidebar />
        <MainContent />
      </Flex>
      <Footer />
    </Flex>
  );
}

export default App;
