import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import "../App.css";

// import rasm1 from "../Img/left-banner-image.jpg";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(14, 1),
  backgroundColor: "none",
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

export default function BannerBox() {
  return (
    <Box sx={{ flexGrow: 1, marginTop: "3%" }}>
      <Grid container spacing={1}>
        <Grid item xs={12} md={6}>
          <Item2 className="Banner1">
            <Items sx={{ fontSize: "350%" }}>
              <b> We Are HexaShop</b>
            </Items>
            <Items>
              <i>Awesome, clean & creative HTML5 Template</i>
            </Items>
            <Items>
              <Button
                variant="outlined"
                sx={{ border: "1px solid white", color: "white" }}
              >
                Purchase Now!
              </Button>
            </Items>
          </Item2>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Item
            className="banner2"
            sx={{ margin: "0px 0px 20px 0px", textAlign: "center" }}
          >
            <Items2>
              {" "}
              <b>Women</b>{" "}
            </Items2>
            <Items2>
              <i> Best Clothes For Woman</i>
            </Items2>
          </Item>
          <Item
            className="banner4"
            sx={{ margin: "20px 0px 0px 0px", textAlign: "center" }}
          >
            <Items2>
              <b> Kids</b>
            </Items2>
            <Items2>
              <i> Best Clothes For Kids</i>
            </Items2>
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Item
            className="banner3"
            sx={{ margin: "0px 0px 20px 0px", textAlign: "center" }}
          >
            <Items2>
              <b>Men</b>{" "}
            </Items2>
            <Items2>
              <i> Best Clothes For Men</i>
            </Items2>
          </Item>
          <Item
            className="banner5"
            sx={{ margin: "20px 0px 0px 0px", textAlign: "center" }}
          >
            <Items2>
              <b> Accessories</b>
            </Items2>
            <Items2>
              <i> Best Clothes For Accessories</i>
            </Items2>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
