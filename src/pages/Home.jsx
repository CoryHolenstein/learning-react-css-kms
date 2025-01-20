import { Container, Grid } from "@mui/material";

const Home = () => {
  return (
    <Container  sx={{ bgcolor: "#b3b3b3", height:"75vh", width: "75vw", display: "flex", flexDirection: "column" }}>
        <Grid container spacing={2} sx={{ paddingTop: "64px", paddingBottom: "50px", flexGrow: 1 }}>
        <Grid item xs={12}>
            <h1>Home</h1>
        </Grid>
        </Grid>
    </Container>
  );
}

export default Home;
