import ArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Box, Collapse, IconButton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link as Scroll } from "react-scroll";

const Welcome = () => {
  const [pageLoaded, setPageLoaded] = useState<boolean>(false);

  useEffect(() => {
    setPageLoaded(true);
  }, []);

  return (
    <Box
      sx={{
        color: "#fff",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
      }}
    >
      <Collapse
        in={pageLoaded}
        timeout={3000}
        orientation="vertical"
        collapsedSize={"10px"}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <Typography variant="h3">A land like</Typography>
          <Typography variant="h3" noWrap display="inline-block">
            no
            <Typography
              variant="h3"
              display="inline"
              ml="1rem"
              color={"#5AFF3D"}
            >
              other
            </Typography>
          </Typography>
          <Scroll to="places-to-visit" smooth={true}>
            <IconButton
              sx={{
                alignSelf: "center",
              }}
            >
              <ArrowDownIcon
                sx={{
                  color: "#5AFF3D",
                  fontSize: "4rem",
                }}
              />
            </IconButton>
          </Scroll>
        </Box>
      </Collapse>
    </Box>
  );
};

export default Welcome;
