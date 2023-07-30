import React, { useEffect, useState } from "react";
import LandingPage from "../Components/LandingPage";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ChatBox from "./ChatBox";
import GoogleMapReact from "google-map-react";

import {
  Grid,
  Typography,
  Stack,
  Avatar,
  Divider,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";


function Home() {
  const { id } = useParams();
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [remainingUsers, setRemainingUsers] = useState([]);
  const [anchorEl, setAnchorEl] = React.useState(null);

  /** menu open handle function */
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // in api the lat and lng is in string , so this variable is diclared
  const lat = parseFloat(selectedProfile?.address?.geo?.lat);
  const lng = parseFloat(selectedProfile?.address?.geo?.lng);

  // Check if the latitude and longitude are valid numbers before rendering the map
  const isValidGeoData = !isNaN(lat) && !isNaN(lng);

  // api call on fetch users details 
  useEffect(() => {
    fetch(`https://panorbit.in/api/users.json`)
      .then((response) => response.json())
      .then((data) => {
        const profile = data.users.find((user) => user.id === Number(id)); // finding the fetch id and id params so it matches 
        setSelectedProfile(profile); // storing in the set state

        // filter the id that is not macthcing with from the main opened id , then remaining datas will be filtered
        const otherUsers = data.users.filter((user) => user.id !== Number(id));
        setRemainingUsers(otherUsers);
      });
      
  }, [id]);
 

  /** navigate to the profile details page */
  let navigate = useNavigate(); //usenavigate from react-router-dom
  const handleNavigate = () => {
    navigate(`/`);
  };

  const handleUser = (userId) =>{
    navigate(`/home/${userId}`);
  }

  return (
    <LandingPage>
      <div>
        <Grid container spacing={2} p={3}>
          <Grid item xs={12} sm={12} md={2} lg={2}>
            <Typography
              className="hover-text"
              color="text.secondary"
              variant="h6"
              gutterBottom>
              PROFILE
            </Typography>
          </Grid>
          <Grid item xs={6} />
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <Stack
              direction="row"
              spacing={2}
              style={{ justifyContent: "right" }}>
              <Avatar alt="Remy Sharp" src={selectedProfile?.profilepicture} />
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}>
                <Typography
                  className="hover-text"
                  color="text.secondary"
                  gutterBottom>
                  {selectedProfile?.name}
                </Typography>
              </Button>
              <Menu
              style={{height:'300px'}}
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}>
                <MenuItem
                  onClick={handleClose}
                  style={{ justifyContent: "center" }}>
                  <Avatar
                    alt="Remy Sharp"
                    src={selectedProfile?.profilepicture}
                  />
                </MenuItem>
                <MenuItem
                  onClick={handleClose}
                  style={{ justifyContent: "center" }}>
                  <Typography style={{ fontSize: "15px" }} gutterBottom>
                    {selectedProfile?.name}
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={handleClose}
                  style={{ justifyContent: "center" }}>
                  <Typography
                    color="text.secondary"
                    style={{ fontSize: "13px" }}
                    gutterBottom>
                    {selectedProfile?.email}
                  </Typography>
                </MenuItem>
                <Divider />
                <div>
                 {remainingUsers?.map((r) =>{ return(
                   <MenuItem key={r.id} onClick={() =>handleUser(r.id)}  style={{textAlign:'center',justifyContent:'center'}}>{r.name}</MenuItem>
                 )
                
                 })}
                </div>
                <MenuItem
                  onClick={handleNavigate}
                  style={{ justifyContent: "center" }}>
                  <Button variant="contained" color="error">
                    SIGN OUT
                  </Button>
                </MenuItem>
              </Menu>
            </Stack>
          </Grid>
        </Grid>
        <Divider />
        {/* header end */}
        <Grid container spacing={2} p={3}>
          <Grid item xs={12} sm={12} md={5} lg={5}>
            <Avatar
              alt="Remy Sharp"
              src={selectedProfile?.profilepicture}
              style={{ width: "200px", height: "200px", marginLeft: "100px" }}
            />
            <Typography variant="h5" gutterBottom>
              {selectedProfile?.name}
            </Typography>

            <Stack
              direction="row"
              spacing={2}
              style={{ justifyContent: "center" }}>
              <Typography
                color="text.secondary"
                style={{ fontSize: "17px" }}
                gutterBottom>
                Username:
              </Typography>
              <Typography style={{ fontSize: "17px" }} gutterBottom>
                {selectedProfile?.username}
              </Typography>
            </Stack>
            <Stack
              direction="row"
              spacing={2}
              style={{ justifyContent: "center" }}>
              <Typography
                color="text.secondary"
                style={{ fontSize: "17px" }}
                gutterBottom>
                email:
              </Typography>
              <Typography style={{ fontSize: "17px" }} gutterBottom>
                {selectedProfile?.email}
              </Typography>
            </Stack>

            <Stack
              direction="row"
              spacing={2}
              style={{ justifyContent: "center" }}>
              <Typography
                color="text.secondary"
                style={{ fontSize: "17px" }}
                gutterBottom>
                Phone:
              </Typography>
              <Typography style={{ fontSize: "17px" }} gutterBottom>
                {selectedProfile?.phone}
              </Typography>
            </Stack>

            <Stack
              direction="row"
              spacing={2}
              style={{ justifyContent: "center" }}>
              <Typography
                color="text.secondary"
                style={{ fontSize: "17px" }}
                gutterBottom>
                Website :
              </Typography>
              <Typography style={{ fontSize: "17px" }} gutterBottom>
                {selectedProfile?.website}
              </Typography>
            </Stack>

            <Divider />

            <Typography
              color="text.secondary"
              style={{ fontSize: "17px", marginTop: "20px" }}
              gutterBottom>
              Company
            </Typography>
            <Stack
              direction="row"
              spacing={2}
              style={{ justifyContent: "center" }}>
              <Typography
                color="text.secondary"
                style={{ fontSize: "17px" }}
                gutterBottom>
                Name :
              </Typography>
              <Typography style={{ fontSize: "17px" }} gutterBottom>
                {selectedProfile?.company?.name}
              </Typography>
            </Stack>

            <Stack
              direction="row"
              spacing={2}
              style={{ justifyContent: "center" }}>
              <Typography
                color="text.secondary"
                style={{ fontSize: "17px" }}
                gutterBottom>
                catchphrase:
              </Typography>
              <Typography style={{ fontSize: "17px" }} gutterBottom>
                {selectedProfile?.company?.catchPhrase}
              </Typography>
            </Stack>

            <Stack
              direction="row"
              spacing={2}
              style={{ justifyContent: "center" }}>
              <Typography
                color="text.secondary"
                style={{ fontSize: "17px" }}
                gutterBottom>
                bs :
              </Typography>
              <Typography style={{ fontSize: "17px" }} gutterBottom>
                {selectedProfile?.company?.bs}
              </Typography>
            </Stack>
          </Grid>
          {/* left grid */}
          <Grid item xs={12} sm={12} md={1} lg={1}>
            {" "}
            <Divider orientation="vertical" />{" "}
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Typography color="text.secondary" variant="h6" gutterBottom>
              Address
            </Typography>
            <Stack
              direction="row"
              spacing={2}
              style={{ justifyContent: "center" }}>
              <Typography
                color="text.secondary"
                style={{ fontSize: "17px" }}
                gutterBottom>
                Street :
              </Typography>
              <Typography style={{ fontSize: "17px" }} gutterBottom>
                {selectedProfile?.address?.street}
              </Typography>
            </Stack>

            <Stack
              direction="row"
              spacing={2}
              style={{ justifyContent: "center" }}>
              <Typography
                color="text.secondary"
                style={{ fontSize: "17px" }}
                gutterBottom>
                Suite:
              </Typography>
              <Typography style={{ fontSize: "17px" }} gutterBottom>
                {selectedProfile?.address?.suite}
              </Typography>
            </Stack>

            <Stack
              direction="row"
              spacing={2}
              style={{ justifyContent: "center" }}>
              <Typography
                color="text.secondary"
                style={{ fontSize: "17px" }}
                gutterBottom>
                City :
              </Typography>
              <Typography style={{ fontSize: "17px" }} gutterBottom>
                {selectedProfile?.address?.city}
              </Typography>
            </Stack>

            <Stack
              direction="row"
              spacing={2}
              style={{ justifyContent: "center" }}>
              <Typography
                color="text.secondary"
                style={{ fontSize: "17px" }}
                gutterBottom>
                Zipcode :
              </Typography>
              <Typography style={{ fontSize: "17px" }} gutterBottom>
                {selectedProfile?.address?.zipcode}
              </Typography>
            </Stack>

            <div style={{ height: "40vh", width: "100%"}}>
              {isValidGeoData ? (
                <GoogleMapReact
                  defaultCenter={[lat, lng] ? [lat, lng] : [20.5937, 78.9629]}
                  defaultZoom={10}></GoogleMapReact>
              ) : (
                <p>Invalid or missing geo data</p>
              )}
            </div>
            <div>
              <Stack
                direction="row"
                spacing={2}
                style={{ justifyContent: "center" }}>
                <Typography
                  color="text.secondary"
                  style={{ fontSize: "17px" }}
                  gutterBottom>
                  Lat :
                </Typography>
                <Typography style={{ fontSize: "17px" }} gutterBottom>
                  {selectedProfile?.address?.geo?.lat}
                </Typography>
                <Typography
                  color="text.secondary"
                  style={{ fontSize: "17px" }}
                  gutterBottom>
                  Lng :
                </Typography>
                <Typography style={{ fontSize: "17px" }} gutterBottom>
                  {selectedProfile?.address?.geo?.lng}
                </Typography>
              </Stack>
            </div>
          </Grid>
        </Grid>

        <div style={{ width: "30%", float: "right",position: 'relative'  }}>
          <ChatBox/>
        </div>
      </div>
    </LandingPage>
  );
}

export default Home;
