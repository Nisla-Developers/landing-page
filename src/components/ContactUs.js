import { Divider, Grid, Typography } from "@mui/material";

const ContactUs = () => {
  return (
    <Grid id="contact_us" container spacing={0} sx={{ pb: 4 }}>
      <Grid item xs={12} sx={{ textAlign: "start", pb: 2 }}>
        <Typography variant="h6" gutterBottom>
          Email Us
        </Typography>
        <Typography variant="body1">ndtech2016@gmail.com</Typography>
      </Grid>
      <Divider
        variant="middle"
        sx={{ width: "50px", m: 0, borderColor: "white" }}
      />
      <Grid item xs={12} sx={{ textAlign: "start", pt: 2 }}>
        <Typography variant="h6" gutterBottom>
          Call Us
        </Typography>
        <Typography variant="body1">+91 9251438708</Typography>
      </Grid>
    </Grid>
  );
};

export default ContactUs;
