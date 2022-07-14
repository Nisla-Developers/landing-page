import {
  Button,
  Card, CardMedia,
  Divider,
  Grid,
  Modal,
  Typography,
  useMediaQuery,
  useTheme
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

const work = [
  "0344add9-b0d3-4165-8d3b-2f1887989e5a.JPG",
  "0391debb-599a-4cd2-acf0-58770a53cd38.JPG",
  "0bcbcb76-2df3-4c56-ae8e-7478ae97e4d2.JPG",
  "0c88fb60-3163-44b3-801e-1019dac93507.JPG",
  "0def155a-7076-4676-9a81-d86aa374a365.JPG",
  "13fa36be-d621-469b-b371-b230836e1dde.JPG",
  "15993ba0-391d-456c-9bcf-e929151879f5.JPG",
  "1617d723-53a4-496c-99ec-8dd3425ce564.JPG",
  "1695d354-49a6-4e0b-b9b9-a326ac7b936a.JPG",
  "1810f06a-e4c6-482e-b93f-e410ad3cbb73.JPG",
  "19ac92e7-28ca-4545-b098-5b0e526ecf48.JPG",
  "1c53e5f0-e5be-411c-861d-488c38ddbbd9.JPG",
  "21d5d163-63b8-43d0-9233-ac57989b05b0.JPG",
  "2762288a-ece2-4efa-a468-8bb1fdda260b.JPG",
  "27aea79d-57fa-4518-b2d9-e545f7219e7c.JPG",
  "2b9db7b6-e177-4d85-817a-32fb022d9f2e.JPG",
  "2d110b41-1ae0-4a69-9618-d012753e70d7.JPG",
  "340a31db-4528-4ac6-b1c3-8f60336ba15e.JPG",
  "37e5fd9e-3bd2-42b9-9e1c-e60c1dd4ff58.JPG",
  "3cdfe162-2805-42ca-8c88-6af8c8aae0f9.JPG",
  "4778630b-8c11-4949-a9b5-78201dab7088.JPG",
  "48d76184-f623-4c4a-b79c-d33c51bf20df.JPG",
  "492892f7-fabb-402b-a5df-8f15bff8b11c.JPG",
  "4aa1815d-02be-4139-9b06-2a7c04da2603.JPG",
  "4b654bc6-abc6-413a-96ac-277274ce7c12.JPG",
  "4b7e1587-af2c-4d09-8e20-26f6d9193bc5.JPG",
  "54039d7f-ba95-4446-9df5-81a0c8f80fdc.JPG",
  "54271791-cb4d-486d-a36f-ad47d8a7f0d0.JPG",
  "5f06e333-cf9e-4efc-a05d-a8d6cd784051.JPG",
  "61945a61-e37a-4bae-9cf1-969ad2fc38dd.JPG",
  "65abde9b-43d0-4aa7-8d53-d4e72db1fef9.JPG",
  "6b825829-acb3-4f61-9f56-f0a3805952a1.JPG",
  "6c89f430-853c-4926-86bf-4d9fb114ed11.JPG",
  "6e5ccf83-8c4e-4366-9339-9045c12fed06.JPG",
  "6e867f3f-ee53-4792-b8fa-54665bbf1433.JPG",
  "744d723b-986c-43c1-9b93-452c5dadffa1.JPG",
  "74d9a13f-7fdc-4647-aacc-844adf9d0c18.JPG",
  "789f0edd-0b14-489b-aa9a-059cb0eb378a.JPG",
  "81b0319a-83aa-4c97-86f5-84182d41744a.JPG",
  "86769f9c-8f48-45b8-b270-92ad60e7d7d5.JPG",
  "8c7a28ff-a200-43f2-b92c-ca944d73d59a.JPG",
  "8eee637a-f384-40df-b16c-919859b406b6.JPG",
  "93d9c9ff-c1c0-4d1b-8f25-21c37472a8e0.JPG",
  "9a79dd5b-8eb8-4e15-a1f1-b52f4480d943.JPG",
  "9d47785b-d9b9-4780-bf2b-1365a2f7cbf0.JPG",
  "IMG_5830.JPG",
  "IMG_5833.JPG",
  "IMG_5834.JPG",
  "IMG_7567.JPG",
  "IMG_7568.JPG",
  "IMG_7594.JPG",
  "IMG_7991.JPG",
  "IMG_7994.JPG",
  "PHOTO-2021-06-27-22-59-37.JPG",
  "a968c796-8557-4d81-9f82-bcc746f4ec53.JPG",
  "aa88e98a-3f11-435b-afa6-ad4a64681d34.JPG",
  "af5f36fa-efe5-4f4e-b730-4dddb6b18cfa.JPG",
  "bb075864-2ae9-4d37-a1fa-fcd1e4926743.JPG",
  "c15ed2fb-d852-40fc-b49e-52cb8019c500 2.JPG",
  "c15ed2fb-d852-40fc-b49e-52cb8019c500.JPG",
  "c1e848a1-253f-4d3c-904c-7e4bbdf2a8e8.JPG",
  "c478e358-9087-4b29-ae5f-a7345bd16113.JPG",
  "cda22d24-c7ff-41f2-84a4-ca13f11e6496.JPG",
  "d15ccf4c-28f9-47e2-aa2f-4a3e8e91c830.JPG",
  "d382983f-5960-48cc-92aa-fcd4a28e6192.JPG",
  "d476a2e4-958c-4e2b-8e94-b575d61855ea.JPG",
  "d869be45-bf69-4698-b9d0-9c63d56feed8.JPG",
  "de522c81-ded7-4ce1-a9a4-6e60b0d76457.JPG",
  "e32d1ac9-6e14-45b7-959d-e1a3ca1d6f3f.JPG",
  "e4668f0e-2e66-4790-9938-8c5638443edf.JPG",
  "e5e17a40-9b63-405e-b0fa-dcbcd27368a0.JPG",
  "e8d54773-c4c9-49c2-a413-ec3843c96a17.JPG",
  "ee257dc8-57d4-4708-9826-5d5f165099e1.JPG",
  "efd16532-dd95-4896-8893-334046580962.JPG",
  "f44caf9a-b2ab-4568-af15-fb0a3067e5aa.JPG",
  "fe21aff0-4731-4f94-b328-7770d18ee772.JPG",
];

const RecentProjects = () => {
  const theme = useTheme();
  const isLessThenLg = useMediaQuery(theme.breakpoints.down("lg"));
  const isLessThenMd = useMediaQuery(theme.breakpoints.down("md"));

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Grid id="recent_work" container spacing={6} sx={{ pb: 4 }}>
        <Grid item xs={12} sx={{ mt: 6, pb: 2 }}>
          <Typography
            gutterBottom
            variant="h3"
            component="div"
            sx={{ textAlign: "center" }}
          >
            <Divider>Recent Projects</Divider>
          </Typography>
        </Grid>

        {work.slice(0, isLessThenLg ? 8 : 9).map((url, index) => {
          return (
            <Grid key={url} item xs={12} md={6} lg={4}>
              <Card>
                <CardMedia
                  component="img"
                  height={isLessThenMd ? "280" : "200"}
                  image={`assets/recent_work/${url}`}
                  alt={`Recent Work ${index}`}
                />
              </Card>
            </Grid>
          );
        })}

        <Grid item xs={12} sx={{ mt: 1, pb: 4, textAlign: "center" }}>
          <Button
            onClick={handleOpen}
            style={{
              textDecoration: "underline",
              color: "white",
              fontSize: "large",
            }}
            variant="text"
          >
            View More
          </Button>
        </Grid>
      </Grid>

      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            height:"80vh",
            width: "80vw",
            bgcolor: "#211c31",
            color:"white",
            border: "2px solid #211c31",
            boxShadow: 24,
            overflow:"scroll",
            p: 4,
          }}
        >
          <Grid container spacing={1} sx={{ pb: 4 }}>
            <Grid item xs={12} sx={{ mt: 6, pb: 2 }}>
              <Typography
                gutterBottom
                variant="h3"
                component="div"
                sx={{ textAlign: "center" }}
              >
                <Divider>Recent Projects</Divider>
              </Typography>
            </Grid>

            {work.map((url, index) => {
              return (
                <Grid key={url} item xs={12} md={6} lg={4}>
                  <Card>
                    <CardMedia
                      component="img"
                      height={isLessThenMd ? "280" : "200"}
                      image={`assets/recent_work/${url}`}
                      alt={`Recent Work ${index}`}
                    />
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Modal>
    </>
  );
};

export default RecentProjects;
