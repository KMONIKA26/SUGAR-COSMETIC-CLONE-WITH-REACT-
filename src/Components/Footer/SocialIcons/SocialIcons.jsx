import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Box from "@mui/material/Box";

const SocialIcons = () => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "25px",
        justifyContent: "center"
      }}
    >
      <FacebookIcon
        sx={{
          fontSize: 30,
          cursor: "pointer",
          color: "#999999",
          "&:hover": {
            color: "white"
          }
        }}
      />
      <EmailOutlinedIcon
        sx={{
          fontSize: 30,
          cursor: "pointer",
          color: "#999999",
          "&:hover": {
            color: "white"
          }
        }}
      />
      <InstagramIcon
        sx={{
          fontSize: 30,
          cursor: "pointer",
          color: "#999999",
          "&:hover": {
            color: "white"
          }
        }}
      />
      <PinterestIcon
        sx={{
          fontSize: 30,
          cursor: "pointer",
          color: "#999999",
          "&:hover": {
            color: "white"
          }
        }}
      />
      <YouTubeIcon
        sx={{
          fontSize: 30,
          cursor: "pointer",
          color: "#999999",
          "&:hover": {
            color: "white"
          }
        }}
      />
      
      <TwitterIcon
        sx={{
          fontSize: 30,
          cursor: "pointer",
          color: "#999999",
          "&:hover": {
            color: "white"
          }
        }}
      />
      
    </Box>
  );
};

export { SocialIcons };
