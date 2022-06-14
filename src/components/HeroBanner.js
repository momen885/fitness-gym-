import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import HeroBannerImage from "../assets/images/banner.png";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "72px" },
        ml: { sm: "50px " },
      }}
      position="relativ"
      p="20px"
    >
      <Typography color="#ff2625" fontWeight={"600"} fontSize="26px">
        Fitness Club
      </Typography>
      <Typography
        fontweight={700}
        sx={{
          fontSize: { lg: "44px", xs: "40px" },
        }}
        mb="23px"
        mt="30px"
      >
        Sweat , smiles <br /> and repeat
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={2}>
        Check out the most effective exersices !
      </Typography>
      <Button
        variant="contained"
        color="error"
        href="#exercise"
        sx={{ backgroungColor: "#ff2625", padding: "7px" }}
      >
        Explor more content
      </Button>
      <Typography
        fontWeight={600}
        color="#ff2625"
        sx={{
          opacity: 0.1,
          display: { lg: "block", xs: "none" },
        }}
        fontSize="200px"
      >
        Exercise{" "}
      </Typography>
      <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
