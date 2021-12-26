import React from 'react'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
   card: {
        backgroundColor: 'white',
        boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
        padding: '1rem',
        margin: '1rem 0',
        borderRadius: '12px',
        display: 'flex'
   },
   details: {
       marginTop: '1rem',
       marginLeft: '1rem'
   },
   time: {
        color: '#9d9bb6',
        fontWeight: 600
   },
   h3: {
        marginTop: '0'
   }
  });

function EventCard(props) {
    const {src, time, title} = props;
    const classes = useStyles();
    return (
        <div className={classes.card}>
            <img src={src} alt='test'/>
            <div className={classes.details}>
                <div className={classes.time}>{time}</div>
                <h3 className={classes.h3}>{title}</h3>
            </div>
        </div>
    )
}

export default EventCard
