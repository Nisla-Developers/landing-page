import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Typography,
} from "@mui/material";

const services = [
  {
    title: "Construction",
    image: "assets/construction.jpg",
    description:
      "Committed in delivering quality conscious construction projects.",
  },
  {
    title: "Interior Designing",
    image: "assets/interior.jpg",
    description:
      "Committed in delivering quality conscious construction projects.",
  },
  {
    title: "Renovation",
    image: "assets/renovation.jpg",
    description:
      "Recreating homes with modern planning, efficient design and execution.",
  },
  {
    title: "Electrical Works",
    image: "assets/electric.jpg",
    description: "Lighting up lives with efficient",
  },
  {
    title: "Contracting",
    image: "assets/contracting.jpg",
    description: "A key driver in creating world-class infrastructure.",
  },
  {
    title: "Modular Furniture",
    image: "assets/furniture.jpg",
    description: "A key driver in creating world-class infrastructure.",
  },
];

const Services = () => {
  return (
    <Grid id="services" container spacing={2} sx={{ pb: 4 }}>
      <Grid item xs={12} sx={{ mt: 6, pb: 2 }}>
        <Typography
          gutterBottom
          variant="h3"
          component="div"
          sx={{ textAlign: "center" }}
        >
          <Divider>Our Services</Divider>
        </Typography>
      </Grid>

      {services.map((service) => {
        return (
          <Grid key={service.title} item xs={12} md={6} lg={4}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image={service.image}
                  alt={service.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {service.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Services;
