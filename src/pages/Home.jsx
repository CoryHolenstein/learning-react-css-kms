import { Container, Box } from "@mui/material";
import MainTab from "../components/MainTab";

const Home = () => {
  return (
    <div>
      <Container maxWidth={false} sx={{ bgcolor: "#b3b3b3", height: "90vh", width: "90vw", display: "flex", flexDirection: "column" }}>
        <Box sx={{ justifyContent: "flex-start", height: "100%", overflow: "hidden" }}>
          <h1>Home</h1>
          <Box sx={{ height: "calc(100% - 64px)", overflowY: "auto" }}>  {/* Adjust height and enable scrolling */}
            <MainTab />
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default Home;
