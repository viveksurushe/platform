import { Grid } from '@mui/material'
import React from 'react'
import { makeStyles } from '@mui/styles';
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import ProgressCard from '../ProgressCard';
import bannerImg from '../../assets/IMG/Oval + Oval + Oval Mask.png'

const useStyles = makeStyles({
    container: {
        width: '100%',
        height: '450px',
        backgroundColor: '#1a2d7d',
        borderRadius: '10px',
        textAlign: 'center',
        color: '#ffffff'
    },
    separator: {
        display: 'flex',
        alignItems: 'center',
        height: '22px'
    },
    line: {
        height: '2px',
        flex: '1',
        backgroundColor: 'lightgray',
        marginLeft: '10px'
    },
    h3: {
        color: '#2f4e75',
    },
    main: {
        backgroundColor: '#2f4087',
        width: '70%',
        margin: '0 auto',
        marginTop: '30px',
        padding: '15px',
        borderRadius: '15px',
        display: 'flex'
    },
    dot: {
        height: '15px',
        width: '15px',
        borderRadius: '50%',
        display: 'inline-block',
        marginRight: '8px'
    },
    item: {
        width: '50%'
    },
    time: {
        fontSize: '3rem',
        fontWeight: '700'
    },
    hours: {
        fontWeight: '600',
        fontSize: '1.2rem',
        marginLeft: '4px'
    }
})

function Progress() {
    const classes = useStyles();

    return (
        <Grid container direction="row">
            <Grid item xs={12} sm={12} md={4} className={classes.container}>
                <h1>Progress overview</h1>
                <div>
                    <div style={{ width: "200px", height: '200px', margin: 'auto' }}>
                    <CircularProgressbar
                            value={40}
                            text={<tspan dy={5} dx={-20} fontSize="20px" fontWeight="700">40%</tspan>}
                            strokeWidth={8}
                            styles={buildStyles({
                                textColor: "white",
                                pathColor: "#fbd349",
                                trailColor: "#f0774c"
                            })}
                    />
                    </div>
                </div>
                <div>
                    <div className={classes.main}>  
                        <div className={classes.item}>
                            <span style={{backgroundColor: '#fbd349'}} className={classes.dot}></span>
                            <span>Completed</span>
                            <div>
                                <span className={classes.time}>20</span>
                                <span className={classes.hours}>hours</span>
                            </div>
                        </div>
                        <div style={{borderLeft: '1px solid'}} className={classes.item}>
                            <span style={{backgroundColor: '#f0774c'}} className={classes.dot}></span>
                            <span>Left to go</span>
                            <div>
                                <span className={classes.time}>30</span>
                                <span className={classes.hours}>hours</span>
                            </div>
                        </div>  
                    </div> 
                </div>
            </Grid> 
            <Grid item xs={12} sm={12} md={8}>
                <div style={{marginTop: '40px', marginLeft: '60px'}}>
                <div className={classes.separator}>
                    <h1 className={classes.h3}>Progress</h1>
                    <div className={classes.line}></div>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap'}}>
                    <ProgressCard title={['Total','Webinars']} number={9}/>
                    <ProgressCard title={['Total','Assignments']} number={0}/>
                    <ProgressCard title={['Total','Units']} number={5}/>
                    <ProgressCard title={['Total','Readings']} number={14}/>
                    <ProgressCard title={['Total','Videos']} number={5} background='#1f82f6' color="white"/>
                </div>
                <div style={{marginTop: '68px', position: 'relative'}}>
                    <img style={{width: '100%'}} src={bannerImg} alt='baner'/>
                    <div style={{position: 'absolute',top: '38%',left: '11%'}}>
                        <b style={{color: '#ffffff'}}>Confirm your account details</b> <span style={{color: '#fefdfa'}}>Please confirm your email and phone number.</span>
                    </div>
                </div>
                </div>
            </Grid>
        </Grid>
    )
}

export default Progress
