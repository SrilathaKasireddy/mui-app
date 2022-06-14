
import Paper from '@mui/material/Paper';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ProgressBar} from "react-bootstrap";
import {Card} from "react-bootstrap"
export function Ele(){
 return(
  <div style={{width:500,alignItems:"center",justifyContent:"center",padding:30,marginRight:150}}>
<Card style={{backgroundColor:"#4e73df"}}>
  <Card.Body>Primary</Card.Body>

</Card>
<Card style={{backgroundColor:"#858796"}}>
  <Card.Body>Secondary</Card.Body>
  
</Card>
<Card style={{backgroundColor:"#e74a3b"}}>
  <Card.Body>Danger</Card.Body>
  
</Card>
<Card style={{backgroundColor:"#1cc88a"}}>
  <Card.Body>Success</Card.Body>
  
</Card>
<Card style={{backgroundColor:"#36b9cc"}}>
  <Card.Body>Info</Card.Body>
  
</Card>
<Card style={{backgroundColor:"#f6c23e"}}>
  <Card.Body>Warning</Card.Body>
  
</Card>
<Card style={{backgroundColor:"#f8f9fc"}}>
  <Card.Body>Light</Card.Body>
  
</Card>
<Card style={{backgroundColor:"#5a5c69"}}>
  <Card.Body>Dark</Card.Body>
  
</Card>
<ProgressB/>
</div>
)}

export  function ProgressB(){
 return (
<div>
 <h1 >Projects</h1>
 <Paper style={{paddingTop:20,paddingBottom:20}} >
<ProgressBar now={60} variant="primary" label="Server Migration 60%" />
</Paper>

<Paper style={{paddingTop:20,paddingBottom:20}} >
<ProgressBar now={50} variant="success" label="Customer Database 50%"/>
</Paper>
<Paper style={{paddingTop:20,paddingBottom:20}} >
<ProgressBar now={30} variant="danger" label="Sales Tracking 20%"/>

</Paper>
<Paper style={{paddingTop:20,paddingBottom:20}} >
<ProgressBar now={70} variant="warning" label="Payout Details   70%"/>
</Paper>
<Paper style={{paddingTop:20,paddingBottom:20}} >
<ProgressBar now={100} variant="info" label="Account Setup    100%"/>
</Paper>

</div>
 )
}