import { ChakraProvider } from "@chakra-ui/react";
import Home from "./pages/home/home";
import { theme } from "./global/theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Home />
    </ChakraProvider>
  );
}

export default App;
