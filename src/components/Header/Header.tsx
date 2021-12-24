import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function Header() {
  return (
    <AppBar elevation={0} color="transparent" id="header">
      <Toolbar sx={{ width: "90vw", margin: "0 auto" }}>
        <Box
          component="div"
          sx={{
            display: "flex",
            flexGrow: 1,
            alignItems: "center",
          }}
        >
          {/* Logo */}
          {/* <Box>
            <IconButton>
              <AirplaneIcon
                color="action"
                sx={{ color: "white", fontSize: "2rem" }}
              />
            </IconButton>
          </Box> */}
          <Box flex={1} mx={"1rem"}>
            <Typography variant="h4" display="inline" color={"white"}>
              Sri
            </Typography>
            <Typography
              variant="h4"
              display="inline"
              ml="1rem"
              color={"#5AFF3D"}
            >
              Lanka
            </Typography>
          </Box>
          <Box>
            <IconButton>
              <MenuIcon
                color="action"
                sx={{ color: "white", fontSize: "2rem" }}
              />
            </IconButton>
          </Box>
        </Box>
        {/* <h1>My Island</h1> */}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
