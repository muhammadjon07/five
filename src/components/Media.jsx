import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import image1 from "../Img/instagram-01.jpg";
import image2 from "../Img/instagram-02.jpg";
import image3 from "../Img/instagram-03.jpg";
import image4 from "../Img/instagram-04.jpg";
import image5 from "../Img/instagram-05.jpg";
import image6 from "../Img/instagram-06.jpg";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(18, 0),
  backgroundColor: "none",
  // background: "none",
  // boxShadow: "none",
  // color: "white",
}));
const Item2 = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(17, 1),
  backgroundColor: "none",
}));
const Items = styled(Paper)(({ theme }) => ({
  ...theme.typography.body1,
  padding: theme.spacing(3),
  background: "none",
  boxShadow: "none",
  color: "white",
}));
const Items2 = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(0),
  background: "none",
  boxShadow: "none",
  color: "white",
}));

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(2),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));

// const contactData = [
//   {
//     image1: '<img src={image1} alt="" />',
//   },
//   {
//     image2: '<img src={image2} alt="" />',
//   },
//   {
//     image3: '<img src={image3} alt="" />',
//   },
//   {
//     image4: '<img src={image4} alt="" />',
//   },
//   {
//     image5: '<img src={image5} alt="" />',
//   },
//   {
//     image6: '<img src={image6} alt="" />',
//   },
// ];

export default function ResponsiveGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        sx={{
          justifyContent: "center",
          marginTop: "100px",
          paddingTop: "100px",
          borderTop: "1px dotted black",
        }}
        container
        // spacing={{ xs: 0, md: 0 }}
        // columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={12} sm={4} md={1}>
          <Item>
            <img src={image1} alt="" />
          </Item>
        </Grid>
        <Grid item xs={12} sm={4} md={1}>
          <Item>
            <img src={image1} alt="" />
          </Item>
        </Grid>
        <Grid item xs={12} sm={4} md={1}>
          <Item>
            <img src={image1} alt="" />
          </Item>
        </Grid>
        <Grid item xs={12} sm={4} md={1}>
          <Item>
            <img src={image1} alt="" />
          </Item>
        </Grid>
        <Grid item xs={12} sm={4} md={1}>
          <Item>
            <img src={image1} alt="" />
          </Item>
        </Grid>
        <Grid item xs={12} sm={4} md={1}>
          <Item>
            <img src={image1} alt="" />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
