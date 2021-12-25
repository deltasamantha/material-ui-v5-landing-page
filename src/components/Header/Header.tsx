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
          <Box flex={1} mx={"1rem"}>
            <Typography variant="h4" display="inline" color={"text.primary"}>
              Sri
            </Typography>
            <Typography
              variant="h4"
              display="inline"
              ml="1rem"
              color={"text.secondary"}
            >
              Lanka
            </Typography>
          </Box>
          <Box>
            <IconButton>
              <MenuIcon sx={{ color: "primary.light", fontSize: "2rem" }} />
            </IconButton>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
