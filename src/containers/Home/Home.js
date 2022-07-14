import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import ContactUs from "../../components/ContactUs";
import RecentProjects from "../../components/RecentWork";
import Services from "../../components/Services";
import "./Home.css";

export const HomePage = () => {
  const theme = useTheme();
  const isLessThenLg = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <Container className="home">
      <Grid container spacing={2}>
        {isLessThenLg && (
          <Grid id="home_section" item xs={12}>
            <Box sx={{ overflow: "hidden" }}>
              <img
                style={{
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                  width: "40%",
                }}
                src={`assets/construction_worker.svg`}
                srcSet={`assets/construction_worker.svg`}
                alt={"carpenter"}
                loading="lazy"
              />
            </Box>
          </Grid>
        )}

        <Grid item lg={6} md={12} sx={{ margin: "auto", mx: { md: 8, lg: 0 } }}>
          <Typography
            variant={isLessThenLg ? "h2" : "h1"}
            component="div"
            sx={{ textAlign: isLessThenLg ? "center" : "start" }}
          >
            Distinctive designs for distinctive interiors
          </Typography>
        </Grid>

        {!isLessThenLg && (
          <Grid id="home_section" item lg={6} md={12}>
            <Box sx={{ overflow: "hidden" }}>
              <img
                src={`assets/construction_worker.svg`}
                srcSet={`assets/construction_worker.svg`}
                alt={"carpenter"}
                loading="lazy"
              />
            </Box>
          </Grid>
        )}

        <Grid item xs={12}>
          <Services />
        </Grid>

        <Grid item xs={12}>
          <RecentProjects />
        </Grid>

        <Grid item xs={6}>
          <ContactUs />
        </Grid>
        <Grid item xs={6}></Grid>
      </Grid>
    </Container>
  );
};
