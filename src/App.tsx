import { ChakraProvider } from "@chakra-ui/react";
import Router from "./global/routes/router";
import { theme } from "./global/theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router />
    </ChakraProvider>
  );
}

export default App;
