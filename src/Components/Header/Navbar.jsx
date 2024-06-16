import { Box } from "@mui/system"
import { Link } from "react-router-dom"
import styling from "../Header/Navbar.module.css"


const Navbar = () =>{
    return (
        <Box 
        sx={{background:"#ffffff", 
            position:"fixed",
            display:"flex",
            gap:"2%", 
            width:"98.5%",
            color:"#6C757D",
            padding:"18px",
            zIndex:"200",
            boxShadow:"0px 3px 2px #e4e2e2"
            }}>

            <Box className={styling.right_menu}>
                <Link className={styling.menu_links} to="/makeup">MAKEUP</Link>
                <Box className={styling.dropdown_menu}>
                    <Link className={styling.dropdown_item}>LIPS</Link>
                    <Link className={styling.dropdown_item}>FACE</Link>
                    <Link className={styling.dropdown_item}>EYES</Link>
                </Box>
            </Box>
            <Box className={styling.right_menu}>
                <Link className={styling.menu_links} to="/brushes">BRUSHES</Link>
                <Box className={styling.dropdown_menu}>
                    <Link className={styling.dropdown_item}>FACE BRUSHES</Link>
                    <Link className={styling.dropdown_item}>EYES BRUSHES</Link>
                </Box>
            </Box>
            <Box className={styling.right_menu}>
                <Link className={styling.menu_links} to="/skincare">SKINCARE</Link>
                <Box className={styling.dropdown_menu}>
                    <Link className={styling.dropdown_item}>MOISTURIZERS</Link>
                    <Link className={styling.dropdown_item}>MASKS</Link>
                    <Link className={styling.dropdown_item}>SETTING MISTS</Link>
                    <Link className={styling.dropdown_item}>COFFEE CULTURE RANGE</Link>
                    <Link className={styling.dropdown_item}>SHEET MASK COMBO</Link>
                </Box>
            </Box>
            <Box className={styling.right_menu}>
                <Link className={styling.menu_links} to="/trending">TRENDING</Link>
                <Box className={styling.dropdown_menu}>
                    <Link className={styling.dropdown_item}>SUGAR MERCH STATION</Link>
                    <Link className={styling.dropdown_item}>MINIS SET</Link>
                    <Link className={styling.dropdown_item}>MAKEUP KITS</Link>
                    <Link className={styling.dropdown_item}>BESTSELLERS</Link>
                </Box>
            </Box>
            <Box className={styling.right_menu}>
                <Link className={styling.menu_links} to="/blog">BLOG</Link>
                <Box className={styling.dropdown_menu}>
                    <Link className={styling.dropdown_item}>FEATURED</Link>
                    <Link className={styling.dropdown_item}>MAKEUP</Link>
                    <Link className={styling.dropdown_item}>SKINCARE</Link>
                </Box>
            </Box>
            <Box className={styling.right_menu}>
                <Link className={styling.menu_links} to="/offers">OFFERS</Link>
            </Box>
            <Box className={styling.right_menu}>
                <Link className={styling.menu_links} to="/2021highlights">2021 HIGHLIGHTS</Link>
            </Box>
        </Box>
    )
}

export {Navbar}