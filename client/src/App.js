import React from "react";
import { Container } from "@material-ui/core";

import Auth from "./components/auth/Auth";

const App = () => {
  return (
    <Container maxWidth="lg">
      <Auth />
    </Container>
  );
};

export default App;
