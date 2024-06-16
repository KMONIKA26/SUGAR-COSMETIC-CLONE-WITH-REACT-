import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { useState } from "react";
import { LoginPage } from "./LoginPage";
import Link from '@mui/material/Link';

export default function TemporaryDrawer() {
  const anchor = "right";
  const [state, setState] = useState({
    right: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    console.log("Toggled")
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 670, 
      float:"right", 
      display:"block",
      zIndex:"2500000",
      position: "relative", }}
      role="presentation"
    >
      <Box sx={{float:"right",}}>
        <LoginPage  />
      </Box>
    </Box>
  );
  
  return (
    <div>
      <Link onClick={toggleDrawer(anchor, true)} sx={{color:"#000000", 
                        textDecoration:"underline", 
                        cursor:"pointer",
                        fontSize:"15px",
                        padding:"4px 1px"
                        }}>Login/Register
                </Link>
      <Drawer
        anchor={anchor}
        open={state[anchor]}
        onClose={toggleDrawer(anchor, false)}
      >
        {list("right")}
      </Drawer>
    </div>
  );
}
