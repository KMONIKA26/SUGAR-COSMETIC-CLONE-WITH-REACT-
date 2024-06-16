import { Box } from "@mui/system"
import styling from "../Footer.module.css"
const GetNewApp = () =>{
    return (
        <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        // border: "2px solid red",
        justifyContent: "left",
        textAlign: "left",
        width: "30%",
        height: "auto",
        padding: "20px",
        color: "#ffffff",
        width:"28%"
      }}
    >
      <p className={styling.footerHeadings}>GET THE NEW SUGAR APP TODAY.</p>
      <Box
        sx={{
        //   border: "2px solid red",
          display: "flex",
          flexDirection: "row",
          marginTop: "55px"
          
        }}
      >
        <p>Tap into a better shopping experience.</p>
        <img style={{width:"98px", height:"35px", marginLeft:"15px", cursor:"pointer"}} src="https://in.sugarcosmetics.com/playstore.png" />
        <img style={{width:"98px", height:"35px", marginLeft:"15px", cursor:"pointer"}} src="https://in.sugarcosmetics.com/apple-store.png" />
      </Box>
    </Box>
    )
}

export {GetNewApp}