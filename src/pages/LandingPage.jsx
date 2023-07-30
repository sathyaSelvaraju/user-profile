// This is a React Router v6 app
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import "./Card.css";

const LandingPage = () => {
  const [storeProfile, setStoreProfile] = useState("");

  /** navigate to the profile details page */
  let navigate = useNavigate(); //usenavigate from react-router-dom
  const handleClick = (profileData) => {
    navigate(`/home/${profileData.id}`);
  };


  // api call for profile data

  useEffect(() => {
    getProfileName();
  }, []);

  const getProfileName = () => {
    fetch(`https://panorbit.in/api/users.json`)
      .then((response) => response.json())
      .then((data) => setStoreProfile(data));
  };

  console.log("storeProfile", storeProfile);
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={2} md={4} />
        <Grid item xs={2} md={4} mt={5}>
          <Card
            sx={{
              minWidth: 450,
              borderRadius: "15px 15px 0 0",
              height: "60px",
            }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 19, fontWeight: "600" }}
                color="text.secondary"
                gutterBottom>
                Select an account
              </Typography>
            </CardContent>{" "}
          </Card>

          <Card
            sx={{
              minWidth: 450,
              borderRadius: "0 0 15px 15px",
              height: "500px",
              overflowY: "auto",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
              opacity: "0.8",
            }}>
            {storeProfile?.users?.map((e) => {
              return (
                <CardContent key={e.id}>
                  <Stack direction="row" spacing={2}>
                    <Avatar alt="Remy Sharp" src={e?.profilepicture} />
                    <Typography
                      className="hover-text"
                      color="text.secondary"
                      gutterBottom
                      onClick={() => handleClick(e)}>
                      {e?.name}
                    </Typography>
                  </Stack>
                  <Divider style={{ marginTop: "10px" }} />
                </CardContent>
              );
            })}
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};
export default LandingPage;
