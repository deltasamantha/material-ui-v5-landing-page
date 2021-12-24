import { Box } from "@mui/material";
import React from "react";
import Header from "../../components/Header/Header";
import Places from "../../components/Places/Places";
import Welcome from "../../components/Welcome/Welcome";

const Home = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/bg.jpg"})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Header />
      <Welcome />
      <Places />
    </Box>
  );
};

export default Home;
