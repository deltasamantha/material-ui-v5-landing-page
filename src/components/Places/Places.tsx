import { Box, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { useWindowPosition } from "../../utils/Hooks";
import { placesData } from "../../utils/PlacesUtils";
import PlaceCard from "../PlaceCard/PlaceCard";

const Places = () => {
  const animate = useWindowPosition("header");
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: matches ? "row" : "column",
      }}
      id="places-to-visit"
    >
      <PlaceCard
        image={placesData[0].image}
        title={placesData[0].name}
        description={placesData[0].description}
        animate={animate}
      />
      <PlaceCard
        image={placesData[1].image}
        title={placesData[1].name}
        description={placesData[1].description}
        animate={animate}
      />
    </Box>
  );
};

export default Places;
