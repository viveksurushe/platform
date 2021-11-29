import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { makeStyles } from '@mui/styles';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import icfollowers from '../../assets/IMG/ic-followers.png';
import icassignments from '../../assets/IMG/ic-assignments.png';
import icevents from '../../assets/IMG/ic-events.png';



const useStyles = makeStyles({
    wrapper: {
        margin: '2rem 0'
    },
    separator: {
        display: 'flex',
        alignItems: 'center',
        height: '22px',
        marginBottom: '2rem'
    },
    line: {
        height: '2px',
        flex: '1',
        backgroundColor: 'lightgray',
        marginLeft: '10px'
    },
    h3: {
        color: '#103460',
    },
    icon: {
        backgroundColor: '#e5e5ee',
        padding: '5px 10px',
        borderRadius: '6px',
        margin: '0px 20px',
        marginRight: 0
    },
    img: {
        marginRight: '16px'
    },
    accordion: {
        marginBottom: '15px',
        borderRadius: '5px !important',
        boxShadow: "0 3px 10px rgb(0 0 0 / 0.2) !important",
    },
  });

function Activity() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const data = [{
        id: '10',
        title: 'You have five follower including <span style="color:#3e83f6;font-weight: 500;">Kathryn Crawford</span> and <span style="color:#3e83f6;font-weight: 500;">Piper Shaw</span>',
        src: icfollowers,
        details: `Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
        Aliquam eget maximus est, id dignissim quam.`
    },
    {
        id: '11',
        title: 'Three new events were added to your calender',
        src: icevents,
        details: `Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
        Aliquam eget maximus est, id dignissim quam.`
    },
    {   
        id: '12',
        title: 'You have 3 pending readings to complete',
        src: icassignments,
        details: `Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
        Aliquam eget maximus est, id dignissim quam.`
    }];

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className={classes.wrapper}>
            <div className={classes.separator}>
                <h1 className={classes.h3}>Activity</h1>
                <div className={classes.line}></div>
                <ArrowForwardIcon className={classes.icon} />
            </div>
            <div>
                {data.map((item, index) => (
                <Accordion key={item.id} className={classes.accordion} expanded={expanded === index} onChange={handleChange(index)}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <img className={classes.img} src={item.src} alt="icfollowers"/>
                        <div style={{ color: '#b0aec4', margin: 'auto 0' }} dangerouslySetInnerHTML={{ __html: item.title}}></div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                           {item.details}
                        </Typography>
                    </AccordionDetails>
                </Accordion>) )}
                </div>
        </div>
    )
}

export default Activity
