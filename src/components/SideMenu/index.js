import React from 'react'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    sidebar: {
        position:'fixed',
        top: '78px',
        left: 0,
        width: '230px',
        height: '100%',
        backgroundColor: 'red',
        ul: {
            li: {
                a: {
                    display: 'block'
                }
            }
        }
    },
    sidebarInner: {

    }
  });

function SideMenu() {
    const classes = useStyles();

    return (
        <div className={classes.sidebar}>
            <div className={classes.sidebarInner}>
                <ul>
                    <li><a class="active" href="#home">Home</a></li>
                    <li><a href="#news">News</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#about">About</a></li>
                </ul> 
            </div>
        </div>
    )
}

export default SideMenu
