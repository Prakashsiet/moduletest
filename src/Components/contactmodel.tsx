import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Button,
} from "@mui/material";
import ContactModalProps from "../interfaces/contactmodel";


const ContactModel: React.FC<ContactModalProps> = ({
  open,
  onClose,
}) => {

  return (
    <Dialog
      open={open}
      onClose={onClose}
      sx={{
        "& .MuiDialog-paper": {
          backgroundColor: "white",
          width: "100%",
          boxShadow: "0px 4px 4px 0px #00000040",
          border: "1px solid #0000001F",
          padding: "10px 30px 10px 10px",
          margin: "0px 10px 500px 100px",
        },
      }}
    >
         <DialogTitle
         sx={{
            fontFamily: "Roboto",
            fontSize: "29px",
            fontWeight: 500,
            lineHeight: "46.45px",
            letterSpacing: "0.035em",
            textAlign: "left",
            display: "flex",
            color: "#000000",
          }}
          
       >
          Create New group
        </DialogTitle>
        
    </Dialog>
  );
};

export default ContactModel;
