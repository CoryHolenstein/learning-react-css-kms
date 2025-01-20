import { Container, Box } from "@mui/material";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <> 
      <Header />
      <Container maxWidth={false} disableGutters={true} sx={{ bgcolor: "white", minHeight: "100vh", paddingTop: "64px", paddingBottom: "50px", display: "flex", flexDirection: "column" }}>
        <Home />
      </Container>
      <Footer />
    </>
  );
}

export default App;
