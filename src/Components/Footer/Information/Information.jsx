import { Box } from "@mui/material";
import styling from "../Footer.module.css"

const Information = () => {
    return (<Box
    sx={{
        display: "flex",
        flexDirection: "column",
        // border: "2px solid red",
        marginLeft:"60px",
        justifyContent: "left",
        textAlign: "left",
        width: "90%",
        height: "auto",
        padding: "20px",
        color: "#ffffff"
      }}>
          <p className={styling.footerHeadings}>INFORMATION</p>
          <Box 
          sx={{
              display:"flex",
              flexDirection:"row",
              gap:"12%",
              marginTop:"25px"
          }}>
            <a className={styling.common}>Contact Us</a>
            <a className={styling.common}>Terms & Conditions</a>
            <a className={styling.common}>Returns</a>
            <a className={styling.common}>FAQs</a>
            <a className={styling.common}>About Us</a>
          </Box>
    </Box>)
};

export {Information}