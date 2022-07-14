import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { useTheme } from "@mui/system";
import { useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";

const pages = ["Services", "Recent Work", "Contact Us"];

const Logo = () => {
  return (
    <Box sx={{ m: "auto" }}>
      <img src={"logo32.png"} />
      <Typography
        variant="h6"
        noWrap
        component="a"
        onClick={() => {
          const section = document.querySelector(`#home_section`);
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }}
        sx={{
          verticalAlign: "text-bottom",
          mr: 2,
          ml: 2,
          fontWeight: 700,
          color: "inherit",
          letterSpacing: ".2rem",
          textDecoration: "none",
        }}
      >
        NILSA DEVELOPERS
      </Typography>
    </Box>
  );
};

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  let navigate = useNavigate();

  const theme = useTheme();
  const isLessThenLg = useMediaQuery(theme.breakpoints.down("lg"));

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="sticky"
      // color="transparent"
      variant="outlined"
      sx={{ border: "unset", pb: { md: 4, lg: 0 }, backgroundColor: "#211c31" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {isLessThenLg ? (
            <>
              <Box>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                >
                  {pages.map((page) => (
                    <MenuItem
                      key={page}
                      onClick={() => {
                        handleCloseNavMenu();
                        setTimeout(() => {
                          const section = document.querySelector(
                            `#${page.toLowerCase().split(" ").join("_")}`
                          );
                          section.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          });
                        }, 100);
                      }}
                    >
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <Logo />
            </>
          ) : (
            <>
              <Logo />
              <Box sx={{ display: { md: "none", lg: "flex" }, flexGrow: 1 }}>
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={() => {
                      const section = document.querySelector(
                        `#${page.toLowerCase().split(" ").join("_")}`
                      );
                      section.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                      handleCloseNavMenu();
                    }}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    {page}
                  </Button>
                ))}
              </Box>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
