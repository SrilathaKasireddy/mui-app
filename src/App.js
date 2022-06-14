
import Navbar  from "./components/Navbar"

import {Main} from "./main";




import {Box, Container,Stack} from "@mui/material"
import { StickyHeadTable } from "./Table";



export function App(){
  
  return(
    
    <Box >
      <Stack direction ="row"  spacing={2} justifyContent="space-between">
      
      <Navbar/>
         </Stack>
      
      <Main/>
      <StickyHeadTable/>
 
    </Box>
    
   
   
  )
}

export default App