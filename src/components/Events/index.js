import React from 'react'
import Title from '../Title';
import { Grid } from '@mui/material';
import Carousel from 'react-material-ui-carousel'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { makeStyles } from '@mui/styles';
import CarouselImg from '../../assets/IMG/3000434.png';
import thumbnailPng from '../../assets/IMG/thumbnail.png';
import EventCard from '../EventCard';

const useStyles = makeStyles({
    container: {
        position: 'relative',
        margin: '0 auto'
    },
    contentLeft: {
        position: 'absolute',
        left: '100px',
        top: '62px',
        color: 'white',
        fontSize: '40px'
    },
    contentRight: {
        position: 'absolute',
        left: '620px',
        top: '84px',
        color: 'white',
        fontSize: '40px'  
    },
    separator: {
        display: 'flex',
        alignItems: 'center',
        height: '22px'
    },
    line: {
        height: '2px',
        flex: '1',
        backgroundColor: 'lightgray'
    },
    h3: {
        color: '#2f4e75',
    }
  });

const CarouselCard = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <img src={CarouselImg} alt="Notebook" style={{width: '100%', height: '280px'}}/>
            <h1 className={classes.contentLeft}>Youth Talent &<br/> Education</h1>
            <h1 className={classes.contentRight}>May, 20</h1>
        </div>
    )
}

function Events() {
    const classes = useStyles();

    return (
        <>
            <Grid container direactio="row" style={{margin: '15px 0', marginBottom: 0}}>
                <Title title='Events'/>
            </Grid>
            <Grid container>
                <Grid item xs={12} sm={12} md={8}>
                    <Carousel 
                    indicators={false} 
                    navButtonsAlwaysVisible={true} 
                    animation={'slide'}
                    navButtonsProps={{          // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
                        style: {
                            backgroundColor: '#ffffff',
                            padding: '5px 10px',
                            borderRadius: '6px',
                            margin: '0px 20px'
                        }
                    }}
                    NextIcon={<ArrowForwardIcon/>}
                    PrevIcon={<ArrowBackIcon/>}>
                        {<CarouselCard/>}
                        {<CarouselCard/>}
                    </Carousel>
                </Grid>
                <Grid style={{padding: '0 1rem'}} item xs={12} sm={12} md={4}>
                    <div className={classes.separator}>
                        <h3 className={classes.h3}>EVENTS TODAY</h3>
                        <div className={classes.line}></div>
                    </div>
                    <EventCard title="Webinar: the basic of..." src={thumbnailPng} time="10:30 AM"/>
                    <EventCard title="Team Building Activity" src={thumbnailPng} time="2:15 PM"/>
                </Grid>
            </Grid>
        </>
    )
}

export default Events
