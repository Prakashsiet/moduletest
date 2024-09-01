import React, { useState } from "react";
import { Paper, Typography, IconButton, Box, TextField, InputAdornment } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import noteimage from "../assets/image-removebg-preview 1.png";
import LockIcon from "@mui/icons-material/Lock";
import ContactModel from "../Components/contactmodel";
import SendIcon from '@mui/icons-material/Send';

const PocketNotes: React.FC = () => {

  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedList, setSelectedList] = useState<string>("");
  const [text, setText] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleSendClick = () => {
    console.log('Send clicked');
  };

  const isDisabled = !text;

  const getInitials = (text: string) => {
    const words = text.split(" ");
    const initials = words
      .map((word) => word.charAt(0).toUpperCase())
      .slice(0, 2)
      .join("");

    return initials;
  };

const colorMap: Record<string, string> = {
  "My Notes": "#0047FF",
  "My personal grp": "#B38BFA",
  "Javascript grp": "#43E6FC",
  "HTML grp": "#FFC0C0",
  "CSS Notes": "#F19576",
  "SQL Notes": "#6691FF",
  "Python Notes": "#FF66F0",
};

const getAvatarColor = (listName: string): string => {
  return colorMap[listName] || "#000000"; 
};

  return (
    <div
      style={{
        position: "relative",
        top: 0,
        backgroundColor: "#f3f3f4",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "25%",
          backgroundColor: "#FFFFFF",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Roboto",
            fontSize: "35px",
            fontWeight: "500",
            lineHeight: "41.02px",
            letterSpacing: "0.02em",
            textAlign: "left",
            marginTop: "5%",
            padding: "10px",
          }}
        >
          Pocket Notes
        </Typography>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            margin: "10px 0px 10px 0px",
          }}
        >
          <List sx={{ bgcolor: "background.paper" }}>
    {[
      "My Notes",
      "My personal grp",
      "Javascript grp",
      "HTML grp",
      "CSS Notes",
      "SQL Notes",
      "Python Notes",
    ].map((listName) => (
      <ListItem key={listName} sx={{ mb: 2 }} onClick={() => setSelectedList(listName)}>
        <ListItemAvatar>
          <Avatar
            sx={{
              bgcolor: getAvatarColor(listName),
              color: "white",
            }}
          >
            {getInitials(listName)}
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={listName}
          sx={{
            fontFamily: "Roboto",
            fontSize: "24px",
            fontWeight: "500",
            lineHeight: "28.13px",
            letterSpacing: "0.02em",
            textAlign: "left",
            color: "#000000",
          }}
        />
      </ListItem>
    ))}
  </List>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            width: "100%",
            marginRight: "20px",
          }}
        >
          <AddCircleIcon sx={{ color: "#16008B", fontSize: "60px" }}
           onClick={() => setIsContactOpen(true)}
            />
        </div>
        <ContactModel
            open={isContactOpen}
            onClose={() => setIsContactOpen(false)}
          />

      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "75%",
          backgroundColor: "#DAE5F5",
        }}
      >
          {selectedList ? (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "center",
    }}
  >
    <div
      style={{
        backgroundColor: "#001F8B",
        padding: "15px",
        borderBottom: "1px solid #ccc",
        width: "100%",
        boxSizing: "border-box",
        display: "flex",
        alignItems: "center",
        position: "relative",
        zIndex: 1,
      }}
    >
      <Avatar
        sx={{
          bgcolor: getAvatarColor(selectedList),
          width: 50.9,
          height: 50.9,
          marginRight: 2,
        }}
      >
        {selectedList.slice(0, 2).toUpperCase()}
      </Avatar>

      <Typography
        sx={{
          fontFamily: "Roboto",
          fontSize: "24px",
          fontWeight: 500,
          lineHeight: "28.13px",
          letterSpacing: "0.02em",
          color: "#FFFFFF",
        }}
      >
        {selectedList}
      </Typography>
    </div>
    <div 
  style={{
    backgroundColor: "#001F8B",
    padding: "30px",
    borderBottom: "1px solid #ccc",
    width: "75%",
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
    position: "fixed", 
    bottom: 0, 
    zIndex: 1,
  }}
>
<TextField
    id="outlined-multiline-static"
    placeholder="Enter your text here..........."
    variant="outlined"
    multiline
    value={text}
    rows={4}
    onChange={handleChange}
    sx={{
      flexGrow: 1,
      backgroundColor: "#FFFFFF",
    }}
    InputProps={{
      endAdornment: (
        <InputAdornment position="end">
           <IconButton
                onClick={handleSendClick}
                disabled={isDisabled}
                sx={{
                  color: isDisabled ? 'red' : '#001F8B', 
                }}
              >
                <SendIcon />
              </IconButton>
        </InputAdornment>
      ),
    }}
  />
</div>

  </div>
        ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={noteimage}
            alt="googlestore"
            style={{
              marginTop: "10%",
            }}
          />

          <Typography
            sx={{
              fontFamily: "Roboto",
              fontSize: "50px",
              fontWeight: 700,
              lineHeight: "58.59px",
              letterSpacing: "0.02em",
              textAlign: "left",
            }}
          >
            Pocket Notes
          </Typography>
          <Typography
            sx={{
              fontFamily: "Roboto",
              fontSize: "20px",
              fontWeight: 500,
              lineHeight: "32px",
              letterSpacing: "0.02em",
              textAlign: "left",
            }}
          >
            Send and receive messages without keeping your phone online.
          </Typography>
          <Typography
            sx={{
              fontFamily: "Roboto",
              fontSize: "20px",
              fontWeight: 500,
              lineHeight: "32px",
              letterSpacing: "0.02em",
              textAlign: "left",
            }}
          >
            Use Pocket Notes on up to 4 linked devices and 1 mobile phone
          </Typography>
          <div
            style={{ display: "flex", alignItems: "center", marginTop: "18%" }}
          >
            <LockIcon
              style={{
                color: "#676A6C",
                fontSize: "1rem",
                marginRight: "0.5rem",
              }}
            />
            <Typography
              sx={{
                fontFamily: "Roboto",
                fontSize: "20px",
                fontWeight: 500,
                lineHeight: "32px",
                letterSpacing: "0.02em",
                textAlign: "left",
              }}
            >
              end-to-end encrypted
            </Typography>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default PocketNotes;
