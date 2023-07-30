import React from "react";
import LandingPage from "../Components/LandingPage";
import ChatBox from "./ChatBox";

import { Grid, Typography, Divider } from "@mui/material";

const Posts = () => {
  return (
    <LandingPage>
      <div style={{ height: "680px" }}>
        <Grid container spacing={2} p={3}>
          <Grid item xs={2}>
            <Typography
              className="hover-text"
              color="text.secondary"
              variant="h6"
              gutterBottom>
              POSTS
            </Typography>
          </Grid>
        </Grid>
        <Divider />
        <div style={{ marginTop: "200px" , color:'rgb(235 235 235 / 60%)'}}>
          
          <Typography variant="h1" gutterBottom>
            Coming Soon
          </Typography>
        </div>
        <div style={{ width: "30%", float: "right",position: 'relative' , marginTop:'150px' }}>
          <ChatBox/>
        </div>
      </div>
    </LandingPage>
  );
};

export default Posts;
