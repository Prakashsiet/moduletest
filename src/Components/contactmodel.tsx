import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
  MenuItem,
  Typography,
} from "@mui/material";
import ContactModalProps from "../interfaces/contactmodel";

// Color options for the group color selector
const colorOptions = [
  { label: "Blue", value: "#0047FF" },
  { label: "Purple", value: "#B38BFA" },
  { label: "Cyan", value: "#43E6FC" },
  { label: "Pink", value: "#FF66F0" },
  { label: "Orange", value: "#F19576" },
  { label: "Red", value: "#FF0000" },
];

const ContactModel: React.FC<ContactModalProps> = ({ open, onClose }) => {
  const [groupName, setGroupName] = useState<string>("");
  const [groupColor, setGroupColor] = useState<string>("");

  const handleGroupNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGroupName(event.target.value);
  };

  const handleGroupColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGroupColor(event.target.value);
  };

  const handleCreateGroup = () => {
    // Handle group creation logic here
    console.log("Group Name:", groupName);
    console.log("Group Color:", groupColor);
    onClose(); // Close the dialog after creating the group
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      sx={{
        "& .MuiDialog-paper": {
          backgroundColor: "white",
         // width: "400px",
          boxShadow: "0px 4px 4px 0px #00000040",
        //  border: "1px solid #0000001F",
         // padding: "20px",
          //margin: "0px 10px 500px 100px",
        },
      }}
    >
      <DialogTitle
        sx={{
          fontFamily: "Roboto",
          fontSize: "24px",
          fontWeight: 500,
          lineHeight: "32px",
          textAlign: "left",
          color: "#000000",
          paddingBottom: "10px",
        }}
      >
        Create New Group
      </DialogTitle>
      <DialogContent>
        <Typography variant="body1" sx={{ marginBottom: "8px" }}>
          Group Name
        </Typography>
        <TextField
          fullWidth
          placeholder="Enter group name"
          value={groupName}
          onChange={handleGroupNameChange}
          variant="outlined"
          sx={{ marginBottom: "20px" }}
        />

        <Typography variant="body1" sx={{ marginBottom: "8px" }}>
          Group Color
        </Typography>
        <TextField
          select
          fullWidth
          value={groupColor}
          onChange={handleGroupColorChange}
          variant="outlined"
          sx={{ marginBottom: "20px" }}
        >
          {colorOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </DialogContent>
      <DialogActions sx={{ justifyContent: "flex-end" }}>
        <Button
          onClick={handleCreateGroup}
          color="primary"
          disabled={!groupName || !groupColor}
        >
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ContactModel;
