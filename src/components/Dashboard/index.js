import React from "react";
import flagIcon from "../../assets/IMG/Screen Shot 2020-09-24 at 3.34.23 PM.png";
import Card from "@mui/material/Card";
import { Grid } from "@mui/material";
import Title from "../Title";
import header from '../../assets/IMG/Headers/header-4.png'
import Group from '../../assets/IMG/Group 9.png'

function Dashboard() {
  return (
      <>
    <Grid container direction="row" justifyContent="space-between">
      <Grid item style={{ margin: 'auto 0'}}>
        <Title title="Dashboard" />
      </Grid>
      <Card
        style={{
          height: "50px",
          width: "150px",
          textAlign: "center",
          padding: "15px",
          boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
        }}
      >
        <div style={{fontSize: '12px', color: 'gray'}}>Currently Learning</div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <div><img style={{marginTop: '5px', marginRight: '8px'}} src={flagIcon} alt="flag img" /></div>
          <Title title="English" variant="h6"/>
        </div>
      </Card>
    </Grid>
    <div style={{ height: '230px', width: '100%', position: 'relative'}}>    
        <img src={header} alt="AA" style={{position: 'absolute',bottom: '0', width: '100%'}}/>
        <img src={Group} alt="BB" style={{position: 'absolute', height:'100%'}}/>
        <div style={{position: 'absolute', position: 'absolute', fontSize: '34px', top: '54%',left: '28%',color: '#ffffff',fontWeight: '500'}}>Welcome Back, Clarence</div>
        <div style={{position: 'absolute',position: 'absolute', fontSize: '22px', top: '74%',left: '28%',color: '#ffffff',fontWeight: '400'}}>Ta-da! you're up to date</div>
    </div>
    </>
  );
}

export default Dashboard;
