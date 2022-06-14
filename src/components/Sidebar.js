import React from "react"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Route,Routes,Link, navigate, useNavigate } from "react-router-dom";
import {App} from "../App"
import { Button } from "@mui/material";
import { Main } from "../main";
import {StickyHeadTable} from "../Table"



 export function Sidebar(){
  
 return(
<div>
 <DivS/>


 
 </div>

 )}
 <div>
 

 <Routes>
        <Route path="/dasboard" element={<App/>}/>
        <Route path="/main" element={<Main />}/>
        <Route path="/table" element={<StickyHeadTable />}/>
        <Route path="/charts" element={<Main />}/>
       
       
          
          
      </Routes>
      </div> 
function DivS(){
 const style = {
  backgroundColor:"primary.light",
  color:"black",
  marginLeft:-38,
  objectFit:"contain",
  width:250,
  height:900
 


};

const navigate=useNavigate()

return(
<List sx={style}  component="nav" >
      <ListItem button>
      <Button color="inherit"onClick={()=> navigate("/dashboard")} >Dashboard</Button>
        
      </ListItem>
      <Divider />
      <ListItem button >
        <ListItemText primary="Interface" />
        
        
      </ListItem>

      <ListItem button>
      <ListItemText secondary="Components" />
      
      </ListItem>
      <ListItem button>
      <ListItemText secondary="Utilities" />
      
      </ListItem>
      <Divider />
      <ListItem button >
        <ListItemText primary="AddOns" />
        
        
      </ListItem>

      <ListItem button>
      <Button color="inherit"onClick={()=> navigate("/Main")} >Pages</Button>
      
      </ListItem>
      <ListItem button>
      <Button color="inherit"onClick={()=> navigate("/charts")} >Charts</Button>
      
      
      </ListItem>
      <ListItem button>
      <Button color="inherit"onClick={()=> navigate("/table")} >Tables</Button>
      
      </ListItem>
    </List>
)}