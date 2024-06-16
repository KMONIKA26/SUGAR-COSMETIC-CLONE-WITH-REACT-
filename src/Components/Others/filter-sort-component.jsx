import { Box } from "@mui/system";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import HomeIcon from '@mui/icons-material/Home';
import { FlexBox, FlexBox2 } from "./productComponet";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SortIcon from '@mui/icons-material/Sort';
import { Button, Checkbox, Divider, FormControlLabel, FormGroup, Grid, Menu, MenuItem, Paper, Popover, Typography } from "@mui/material";
import styles from "../../CSS/filter.module.css"
import { useEffect, useState } from "react";
import { fetchData } from "../../Redux/AppData/api";
import { useDispatch, useStore } from "react-redux";
import { useHistory } from "react-router-dom";
import { priceHighToLow, priceLowToHigh } from "../../Redux/AppData/action";
import { ArrowUpward, CompareArrows, Rotate90DegreesCcw } from "@mui/icons-material";
const FilterContainerEvent = ({handleFiltering}) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handlePopoverClose = (event) => {
        setAnchorEl(null);
    };
    const [state,setState]=useState({
     'face makeup':false,
     'lip makeup':false,
     'brush':false  
    })
    const handleChange=(e)=>{
state[e.target.value]=!state[e.target.value]
setState({...state})
    }
    const open = Boolean(anchorEl);

    const history=useHistory()
const handleResetButton=()=>{
    window.location.reload();
}
    return (<div style={{ cursor: "pointer" }}>
        <FlexBox2 gap="0.4rem" aria-owns={open ? 'mouse-over-popover' : undefined}
            aria-haspopup="true"
            onMouseOver={handlePopoverOpen} >
            <div><FilterAltIcon /></div>
            <div>Filter</div>
        </FlexBox2>
        <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
        >
            <Box onMouseLeave={handlePopoverClose}>
                
                <div style={{textAlign:'right'}}>
                    <div className={styles.clearFilter} onClick={handleResetButton}>clear filter</div>
                </div>
                <div style={{textAlign:'center',marginTop:'0.54rem',textDecoration:"underline"}}><strong>Product Category</strong></div>
                <FormGroup sx={{ padding: "1rem" }}>
                    <FormControlLabel control={<Checkbox value="face makeup" checked={state['face makeup']}  onChange={(e)=>handleChange(e)}/>} label="face makeup" />
                    <FormControlLabel control={<Checkbox value="lip makeup" checked={state['lip makeup']}  onChange={(e)=>handleChange(e)}/>} label="lip makeup" />
                    <FormControlLabel control={<Checkbox value="brush" checked={state['brush']} onChange={(e)=>handleChange(e)}/>} label="brush" />
                </FormGroup>
                <div style={{ backgroundColor: "black", color: "white", textAlign: "center", padding: "0.5rem 0.54rem 0.5rem 0.5rem",cursor:"pointer" }}onClick={()=>{handleFiltering(state)
                handlePopoverClose()
                }}>Apply filters</div>
            </Box>
        </Menu>
    </div>)
}
const SortContainerEvent = ({handlePriceSort}) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [state,setState]=useState(0)

    const handlePopoverOpen = (event) => {

        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = (event) => {

        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    return (<div style={{ cursor: "pointer" }}>
        <FlexBox2 gap="0.4rem" aria-owns={open ? 'mouse-over-popover' : undefined}
            aria-haspopup="true"
            onMouseOver={handlePopoverOpen} >
            <div><SortIcon /></div>
            <div>Sort</div>
        </FlexBox2>
        <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
        >
            <Box onMouseLeave={handlePopoverClose}>
                <MenuItem sx={{ padding: "0.5rem 1.8rem", width: "100%",backgroundColor:state=='0'?'black':'white',color:state=='0'?'white':'#000000' }} onClick={()=>{handlePriceSort(0)
                setState(0)
                handlePopoverClose()
                }}><Button sx={{color:state=='0'?'white':'#000000'}}startIcon={<CompareArrows sx={{transform:'rotate(90deg)'}}/>}>Relevance</Button></MenuItem>
                <MenuItem sx={{ padding: "0.5rem 1.8rem", width: "100%", '&hover': { backgroundColor: 'black' },backgroundColor:state=='asc'?'black':'white', }} onClick={()=>{handlePriceSort('asc')
                setState('asc')
                handlePopoverClose()
            }}><Button sx={{color:state=='asc'?'white':'#000000'}}startIcon={<ArrowDownwardIcon/>}>Price - low to high</Button></MenuItem>
                <MenuItem sx={{ padding: "0.2rem 1.8rem", width: "100%", '&hover': { backgroundColor: 'black' },backgroundColor:state=='desc'?'black':'white',color:state=='desc'?'white':'#000000' }} onClick={()=>{handlePriceSort('desc')
                setState('desc')
                handlePopoverClose()    
            }

            }><Button sx={{color:state=='desc'?'white':'#000000'}}startIcon={<ArrowUpward/>}>Price - high to low</Button></MenuItem>

            </Box>
        </Menu>
    </div>)
}

export function FilterSort() {
const dispatch=useDispatch()
const [query,setQuery]=useState('')
    const handleFiltering=(obj)=>{
        let queryParam=''
        for(let key in obj)
        {
            if(obj[key])
            {
                //query='?route=/products/'+query
                if(!queryParam)
                queryParam+='category='+key
                else
                queryParam+='&category='+key

            }
        }
setQuery(queryParam)

//         if(queryParam){
//         dispatch(fetchData(queryParam))
//     return}
// dispatch(fetchData())
//         return
    }

const handleApiRequest=()=>{
   if(!query)
   {
       dispatch(fetchData())
       return
   }
   dispatch(fetchData(query))
   return
}

useEffect(()=>{
handleApiRequest()
},[query])
const handlePriceSort=(val)=>{
if(!val)
{
    console.log('calling')
    handleApiRequest(query)
    return
}
if(val)
{
   if(val=='asc')
   dispatch(priceLowToHigh())
   else{
    dispatch(priceHighToLow())
   }
   return
}

}
const history =useHistory()
    return <Box sx={{ width: "85%", margin: "auto", paddingTop: "1rem" }}>
        <div>
            <div className={styles.rightComponet}>
                <FlexBox2 gap="4rem">
                    <FilterContainerEvent handleFiltering={handleFiltering}/>
                    <SortContainerEvent handlePriceSort={handlePriceSort}/>

                </FlexBox2>
            </div>
            <FlexBox2 gap="0.7rem" width="initial">
                <HomeIcon fontSize="small" sx={{ paddingTop: "0.1rem", cursor: "pointer" }} onClick={()=>history.replace('/')} /> <div> /</div>
                <div style={{ cursor: "pointer" }} onClick={()=> window.location.reload()}>Makeup</div>
            </FlexBox2>
        </div>
    </Box>


}



{/* <div>
            <div className={styles.rightComponet}>
                <FlexBox2 gap="1.8rem">
                    <div style={{position:'relative',back}}>
                        <div style={{ display: 'flex', float: 'right', clear: 'both' }}>
                            <div >Filter</div>
                            <FilterAltIcon fontSize="medium" />

                        </div>
                        <Box sx={{ clear: 'both ',position:'absolute',top:'4rem' }}>
                            <Paper sx={{ width: "200px" }}>
                            <Box sx={{float:"right"}}>
                                <Button sx={{color:"black"}}>Reset All</Button>
                            </Box>
                            <Divider />
                                <Box sx={{clear:"both"}}>
                                    <div>
                                        <FormGroup sx={{ padding: "1rem" }}>
                                            <FormControlLabel control={<Checkbox defaultChecked value="face makeup" />} label="face makeup" />
                                            <FormControlLabel control={<Checkbox value="lip makeup" />} label="lip makeup" />
                                            <FormControlLabel control={<Checkbox value="brush" />} label="brush" />
                                        </FormGroup>
                                    </div>
                                    <div>   <Button sx={{ width: "100%", backgroundColor: "black" }}>Apply Filter</Button></div>
                                </Box>
                            </Paper>
                        </Box>
                    </div>
                    <div>
                        <div style={{ float: "right", margin: "0 0.5rem" }}>Sort</div>
                        <SortIcon fontSize="medium" />
                    </div>
                </FlexBox2>
            </div>

            {/* <FlexBox2 gap="0.7rem" width="initial">
            <HomeIcon fontSize="small" sx={{paddingTop:"0.1rem"}}/> <div> /</div>
            <div>Makeup</div>
        </FlexBox2> */}
        // </div> */}

    //     <div>
    //     <FlexBox2 gap="0.5rem" onMouseOver={handleSortOpen} aria-owns={Boolean(sortEl) ? 'mouse-over-popover' : undefined}
    //         aria-haspopup="true">
    //         <div><SortIcon /></div>
    //         <div>Sort</div>
    //         <Menu
    //             id="demo-positioned-menu"
    //             aria-labelledby="demo-positioned-button"
    //             anchorEl={sortEl}
    //             open={Boolean(sortEl)}
    //             anchorOrigin={{
    //                 vertical: 'bottom',
    //                 horizontal: 'right',
    //             }}
    //             transformOrigin={{
    //                 vertical: 'top',
    //                 horizontal: 'right',
    //             }}
    //         >
    //             <Box onMouseLeave={handleSortClose}>
    //                 <FormGroup sx={{ padding: "1rem" }}>
    //                     <FormControlLabel control={<Checkbox defaultChecked value="face makeup" />} label="face makeup" />
    //                     <FormControlLabel control={<Checkbox value="lip makeup" />} label="lip makeup" />
    //                     <FormControlLabel control={<Checkbox value="brush" />} label="brush" />
    //                 </FormGroup>
    //             </Box>
    //         </Menu>

    //     </FlexBox2>

    // </div>