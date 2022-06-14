import React from "react"
import {AppBar, Box, Button, Toolbar} from "@mui/material"
import styled from "@emotion/styled";
import MoodIcon from '@mui/icons-material/Mood';
import {InputBase} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EmailIcon from '@mui/icons-material/Email';
import {Badge} from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Dropdown } from "react-bootstrap";


const StyledToolbar=styled(Toolbar)({
 display:"flex",
 justifyContent:"space-between",
});

const Search=styled("div")(({theme})=>({
 backgroundColor:"white",
 padding:"0 10px",
 borderRadius: "theme.shape.borderRadius",
 width:"40%"
}));


const style = {
  bgcolor: 'primary.light',
  width:"20%",
  height:20

};


function Navbar(){
 return ( 
  <AppBar position="sticky" sx={{display:"flex",flexwrap:"wrap",objectFit:"cover"}}>
   <StyledToolbar>
   
    <Button  variant ="h6" sx={{display:{xs:"none",sm:"block"}}}><MoodIcon sx={{height:"50px"}}/>  SB ADMIN<sup>2</sup></Button>
    <MoodIcon  sx={{display:{xs:"block",sm:"none"}}}/>
    <Search><InputBase placeholder="Search for..."/></Search>
    <SearchIcon/>
    <Dropdown variant ="h1"  sx={{display:{xs:"none",sm:"block"}}}> 
    <Dropdown.Toggle variant="primary.light" style={{color:"white"}}  id="dropdown-basic">
    <Badge badgeContent={4} color="primary">
  <NotificationsIcon color="white" />
</Badge>
</Dropdown.Toggle>
<Dropdown.Toggle variant="primary.light" style={{color:"white"}}  id="dropdown-basic">
<Badge badgeContent={7} color="primary">
  <EmailIcon color="white" />
</Badge>
</Dropdown.Toggle>
 <Dropdown.Menu>
    <Dropdown.Item href="#/action-1" style={{backgroundColor:"lightblue"}}><Box>Alert Center!!!</Box></Dropdown.Item>
    <Dropdown.Item href="#/action-2" style={{backgroundColor:"whitesmoke"}}><Button><h6>🟢Salmon</h6></Button><p>Hey i want to upgrade</p></Dropdown.Item>
    <Dropdown.Item href="#/action-3" style={{backgroundColor:"whitesmoke"}}><Button><h6> 🟢Salmon</h6></Button><p>Hey i want to upgrade</p></Dropdown.Item>
  </Dropdown.Menu>
 </Dropdown>
 <Dropdown variant ="h6"  sx={{display:{xs:"none",sm:"block"}}}> 
 <Dropdown.Toggle variant="primary.light" style={{color:"white"}}  id="dropdown-basic">
 <AccountCircleIcon sx={{height:"50px",color:"white"}}/>Srilatha Kasireddy
 </Dropdown.Toggle>
 <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Settings</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
  </Dropdown.Menu>
 </Dropdown>
   </StyledToolbar>   
  </AppBar>
  
 )
}

export default Navbar;


