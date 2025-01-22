import { Container, Box } from "@mui/material";
import MainTab from "../components/MainTab";

const Home = () => {
  return (

      <Container maxWidth={false} sx={{ bgcolor: "#b3b3b3", height: '100vh', width: "100vw", display: "flex", flexDirection: "column" }}>
        <Box sx={{ justifyContent: "flex-start", height: "100%", overflow: "hidden" }}>

          <Box sx={{ height: "calc(100% - 64px)", overflowY: "auto" }}>  {/* Adjust height and enable scrolling */}
            <MainTab />
          </Box>
        </Box>
      </Container>
  );
}

export default Home;
