import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import "../App.css";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

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
  padding: theme.spacing(),
  background: "none",
  boxShadow: "none",
  color: "black",
}));
const Items2 = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(0),
  background: "none",
  boxShadow: "none",
  color: "black",
}));

export default function BannerBox() {
  return (
    <Box sx={{ marginTop: "3%", justifyContent: "center" }}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12} md={6}>
          <Items
            className="explore1"
            sx={{ padding: "none", overflow: "hidde" }}
          >
            <Items sx={{ fontSize: "341%" }}>
              <b>Explore Our Products</b>
            </Items>
            <Items sx={{ color: "gray" }}>
              You are allowed to use this HexaShop HTML CSS template. You can
              feel free to modify or edit <br />
              this layout. You can convert this template as any kind of
              ecommerce CMS theme as you wish.
            </Items>
            <Items sx={{ p: "none", color: "gray" }}>
              <FormatQuoteIcon
                sx={{
                  fontSize: "60px",
                  position: "relative",
                  top: "25px",
                  color: "black",
                }}
              />
              <i>
                You are not allowed to redistribute this template ZIP file on
                any other website.
              </i>
            </Items>
            <Items sx={{ color: "gray" }}>
              There are 5 pages included in this HexaShop Template and we are
              providing it to you for <br /> absolutely free of charge at our
              TemplateMo website. There are web development costs for us.
            </Items>
            <Items sx={{ color: "gray" }}>
              If this template is beneficial for br your website or business,
              please kindly{" "}
              <a style={{ textDecoration: "none", color: "blue" }} href="#">
                support us
              </a>{" "}
              a little
              <br /> via PayPal. Please also tell your friends about our great
              website. Thank you.
            </Items>
            <Items>
              <Button
                variant="outlined"
                sx={{ border: "1px solid black", color: "black" }}
              >
                Purchase Now!
              </Button>
            </Items>
          </Items>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Item
            className="explore2"
            sx={{
              margin: "0px 0px 20px 0px",
              textAlign: "center",
              backgroundColor: "#DEDDDF",
            }}
          >
            <Items2>
              {" "}
              <b>Leather Bags</b>{" "}
            </Items2>
            <Items2>
              <i> Latest Collection</i>
            </Items2>
          </Item>
          <Item
            className="explore4"
            sx={{ margin: "20px 0px 0px 0px", textAlign: "center" }}
          >
            <Items2 sx={{ opacity: 0 }}>
              <b> Kids</b>
            </Items2>
            <Items2 sx={{ opacity: 0 }}>
              <i> Best Clothes For Kids</i>
            </Items2>
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Item
            className="explore3"
            sx={{ margin: "0px 0px 20px 0px", textAlign: "center" }}
          >
            <Items2 sx={{ opacity: 0 }}>
              <b>Men</b>{" "}
            </Items2>
            <Items2 sx={{ opacity: 0 }}>
              <i> Best Clothes For Men</i>
            </Items2>
          </Item>
          <Item
            className="explore5"
            sx={{
              margin: "20px 0px 0px 0px",
              textAlign: "center",
              backgroundColor: "#DEDDDF",
            }}
          >
            <Items2 sx={{ zIndex: "3" }}>
              <b> Diferent Types</b>
            </Items2>
            <Items2 sx={{ zIndex: "3" }}>
              <i>Over 304 Products</i>
            </Items2>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
