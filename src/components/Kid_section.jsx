import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
// import Button from "@mui/material/Button";
import "../App.css";

import photo1 from "../Img/kid-01.jpg";
import photo2 from "../Img/kid-02.jpg";
import photo3 from "../Img/kid-03.jpg";
// import rasm1 from "../Img/left-banner-image.jpg";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  //   padding: theme.spacing(19, 1),
  backgroundColor: "none",
  color: "gray",
  fontSize: "15px",
  paddingTop: "10px",
  boxShadow: "none",
}));
const Item2 = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  //   padding: theme.spacing(),
  backgroundColor: "red",
  border: "none",
  boxShadow: "none",
  color: "black",
}));
const Items = styled(Paper)(({ theme }) => ({
  ...theme.typography.body1,
  //   padding: theme.spacing(3),
  background: "none",
  boxShadow: "none",
  color: "black",
  paddingTop: "10px",
  fontSize: "25px",
}));
const Items2 = styled(Paper)(({ theme }) => ({
  //   padding: theme.spacing(),
  background: "none",
  boxShadow: "none",
  color: "white",
}));

export default function BannerBox() {
  return (
    <Box sx={{ flexGrow: 1, marginTop: "3%" }}>
      <Grid
        container
        spacing={0}
        sx={{
          justifyContent: "center",
          paddingTop: "100px",
          borderTop: "1px dotted black",
        }}
      >
        <Item2
          sx={{ backgroundColor: "white", padding: "0px 10px 0px 10px" }}
          md={4}
        >
          <Items>
            <img src={photo1} alt="" />
          </Items>
          <Items>
            <b>School Collection</b>
          </Items>
          <Item>$80.00</Item>
        </Item2>
        <Item2
          sx={{ backgroundColor: "white", padding: "0px 10px 0px 10px" }}
          md={4}
        >
          <Items>
            <img src={photo2} alt="" />
          </Items>
          <Items>
            <b>Summer Cup</b>
          </Items>
          <Item>$12.00</Item>
        </Item2>
        <Item2
          sx={{ backgroundColor: "white", padding: "0px 10px 0px 10px" }}
          md={4}
        >
          <Items>
            <img src={photo3} alt="" />
          </Items>
          <Items>
            <b>Classic Kid</b>
          </Items>
          <Item>$30.00</Item>
        </Item2>
      </Grid>
    </Box>
  );
}
