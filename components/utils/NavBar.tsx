import React, { useState } from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import CottageIcon from "@mui/icons-material/Cottage";
import PersonIcon from "@mui/icons-material/Person";
import CodeIcon from "@mui/icons-material/Code";
import PianoIcon from "@mui/icons-material/Piano";
import EmailIcon from "@mui/icons-material/Email";
import { animateScroll as scroll, scroller } from "react-scroll";

const navigationItems = [
  { label: "Home", icon: <CottageIcon />, to: "landing" },
  { label: "About Me", icon: <PersonIcon />, to: "about" },
  { label: "Coding", icon: <CodeIcon />, to: "coding" },
  { label: "Making Music", icon: <PianoIcon />, to: "music" },
  { label: "Contact Me", icon: <EmailIcon />, to: "contact" },
];

export default function FixedBottomNavigation() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    const item = navigationItems[newValue];
    scroller.scrollTo(item.to, {
      duration: 1000,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <Box sx={{ pb: 7 }}>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 10 }}
        elevation={3}
      >
        <BottomNavigation
          value={value}
          onChange={handleChange}
          showLabels
          sx={{
            "& .Mui-selected": {
              color: "#EC297B",
            },
          }}
        >
          {navigationItems.map((item, index) => (
            <BottomNavigationAction
              key={item.label}
              label={item.label}
              icon={React.cloneElement(item.icon, {
                sx: {
                  color: value === index ? "#EC297B" : "inherit",
                },
              })}
              sx={{
                color: value === index ? "#EC297B" : "inherit",
                "&.Mui-selected": {
                  color: "#EC297B",
                },
              }}
            />
          ))}
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
