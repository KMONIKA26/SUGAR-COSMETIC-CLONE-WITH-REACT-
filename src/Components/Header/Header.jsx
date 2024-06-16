import { Box } from "@mui/system"
import { FreeOffer } from "./FreeOffer"
import { Navbar } from "./Navbar"
import { SearchBar } from "./SearchBar"
import { useState } from "react";


const Header = () => {
    const [free, setFree] = useState(true);
    const handleClick = () =>{
        setFree(false);
    }
    return (
        <Box sx={{fontFamily:"sans-serif"}}>
            {/* {free && <Box><FreeOffer handleClick={handleClick} /></Box>} */}
            <Box><SearchBar /></Box><br/><br/><br/><br/>
            <Box><Navbar /></Box>
        </Box>
    )
}

export {Header}