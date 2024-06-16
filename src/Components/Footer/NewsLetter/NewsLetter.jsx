import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import styling from "../Footer.module.css"

const NewsLetter = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        // border: "2px solid red",
        justifyContent: "left",
        textAlign: "left",
        width: "40%",
        height: "auto",
        padding: "20px",
        color: "#ffffff"
      }}
    >
      <p className={styling.footerHeadings}>SUBSCRIBE TO OUR NEWSLETTER</p>
      <Box
        sx={{
          // border: "2px solid red",
          display: "flex",
          flexDirection: "row",
          marginTop: "40px"
        }}
      >
        <Input
          sx={{ color: "#999999", borderBottom: "2px solid white", width:"56%" }}
          placeholder="Your email address"
        />
        <Button
          sx={{
            margin: "5px",
            background: "#FC2779",
            color: "#ffffff",
            width:"18%",
            "&:hover": {
              color: "#ffffff",
              background: "#FC2779"
            }
          }}
        >
          SIGN UP
        </Button>
      </Box>
    </Box>
  );
};

export default NewsLetter;
