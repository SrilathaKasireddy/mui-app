import BarChart from "./components/barchart";
import LineChart from "./components/line";
import PieChart from "./components/Pie";
import { UserData } from "./components/Data";
import {useState} from "react";
import Box from '@mui/material/Box';
import { Paper ,Card} from "@mui/material";
import { Ele } from "./components/pages";
import { Sidebar } from "./components/Sidebar";




export function Main() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "#0084C7",
          "#9826FF",
          "#2E00FF",
          "#93B9FF",
          "#00F7F6",
        ],
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  });

  

  return (

    <Box className="App" style={{display:"flex",
    flexWrap:"wrap",marginLeft:300}}>
     <Sidebar/>
     <Ele  />
      <Paper style={{width:500,margin:20}}>
        <BarChart chartData={userData} />
        <h1 style={{fontSize:20,textAlign:"center",padding:30}}>Add some quality, svg illustrations to your project courtesy of unDraw, a constantly updated collection of beautiful svg images that you can use completely free and without attribution!</h1>
<Box 
style={{fontSize:20,textAlign:"center",padding:30,
backgroundColor:"#00B2FF",fontWeight:500
}}
>Development Approach</Box>      
      <p style={{fontSize:20,textAlign:"center",padding:30}}>SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order to reduce CSS bloat and poor page performance. Custom CSS classes are used to create custom components and custom utility classes.

Before working with this theme, you should become familiar with the Bootstrap framework, especially the utility classes.</p>
      </Paper>
      
      <Paper style={{ width: 600 ,margin:20}}>
        <LineChart chartData={userData} />
      </Paper>
      <Paper style={{ width: 400 ,margin:20}}>
        <PieChart chartData={userData} />
      </Paper>
     
    </Box>
  );
}

