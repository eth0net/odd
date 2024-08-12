import { ThemeProvider } from "@emotion/react";
import {
  AppBar,
  Button,
  Container,
  createTheme,
  CssBaseline,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import { Campaign, Home } from "./pages";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: { default: "#1a1b22", paper: "#1a1b22" },
    primary: { main: "#83b9c6" },
    secondary: { main: "#4b7f8d" },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <AppBar position="static">
        <Container maxWidth="xl">
          <Stack direction="row" justifyContent="space-between">
            <Stack direction="row">
              <Button component={NavLink} to="/">
                Home
              </Button>
              <Button component={NavLink} to="/campaign">
                Campaign
              </Button>
              <Button disabled>Dungeon</Button>
            </Stack>
            <Stack direction="row">
              <Button disabled>Login</Button>
            </Stack>
          </Stack>
        </Container>
      </AppBar>
      <Container maxWidth="xl">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="campaign" element={<Campaign />} />
          <Route path="dungeon" element={<Typography>TODO</Typography>} />
        </Routes>
      </Container>
    </ThemeProvider>
  );
}

export default App;
