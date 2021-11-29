import React from 'react'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    container: {
        width: '180px',
        height: '40px',
        backgroundColor: (props) => props.background ? props.background : 'white',
        borderRadius: '6px',
        display: 'flex',
        padding: '20px',
        justifyContent: 'space-between',
        marginRight: '44px',
        marginTop: '40px'
    },
    text: {
        fontWeight: 'bold',
        fontSize: '20px',
        color:(props) => props.color ? props.color : '#9c9ab5'
    },
    number: {
        margin: 'auto 0',
        fontSize: '42px',
        color:(props) => props.color ? props.color : '#103460',
        fontWeight: 'bold'
    }
})

function ProgressCard(props) {
    const { title, number } = props;
    const classes = useStyles(props);
    return (
        <div className={classes.container}>
            <div className={classes.text}>
                <div>{title[0]}</div>
                <div>{title[1]}</div>
            </div>
            <div className={classes.number}>{number}</div>
        </div>
    )
}

export default ProgressCard
