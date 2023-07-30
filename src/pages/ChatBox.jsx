import React, { useState, useEffect } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChatOutlined from "@mui/icons-material/ChatOutlined";
import CircleIcon from "@mui/icons-material/Circle";

import {
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Stack,
  Avatar,
} from "@mui/material";
const ChatBox =() =>{

  const [expanded, setExpanded] = React.useState(false);
  const [storeProfile, setStoreProfile] = useState("");

/** this handle change funtion is for accordion expand */
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };


  /** api call on users json to get the data and stored in the usestate were the state can be used to loop the data */
  useEffect(() => {
    getProfileName();
  }, []);

  const getProfileName = () => {
    fetch(`https://panorbit.in/api/users.json`)
      .then((response) => response.json())
      .then((data) => setStoreProfile(data));
  };

  return (
    <div style={{ position: "relative" }}>
      {" "}
      <Accordion
        style={{
          background: "cornflowerblue",
          color: "#fff",
          borderRadius: "4px",
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
        }}
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        defaultExpanded={true}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "#fff" }} />}
          aria-controls="panel1bh-content"
          id="panel1bh-header">
          <ChatOutlined style={{ color: "#fff" }} />
          <Typography sx={{ width: "33%", flexShrink: 0, color: "#fff" }}>
            Chats
          </Typography>
        </AccordionSummary>
        {storeProfile?.users?.map?.((e, index) => {
          return (
            <AccordionDetails style={{ height: "10px" }}>
              <Stack
                direction="row"
                spacing={2}
                alignItems="right"
                justifyContent="space-between">
                <Avatar
                  alt="Remy Sharp"
                  src={e?.profilepicture}
                  style={{ width: "20px", height: "20px" }}
                />
                <Typography
                  color="white"
                  gutterBottom
                  style={{ fontSize: "15px" }}>
                  {e?.name}
                </Typography>
                <span>
                  <CircleIcon
                    color={index % 4 === 0 ? "success" : "error"}
                    style={{ fontSize: "13px" }}
                  />
                </span>
              </Stack>
            </AccordionDetails>
          );
        })}
      </Accordion>
    </div>
  );
}

export default ChatBox;
