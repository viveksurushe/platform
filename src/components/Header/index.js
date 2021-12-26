import { Grid } from '@mui/material';
import React from 'react'
import logo from '../../assets/IMG/Group.png';
import { makeStyles } from '@mui/styles';
import Avatar from '@mui/material/Avatar';
import avtarImg from '../../assets/IMG/Profile/Picture.png';
import downArrow from '../../assets/IMG/Arrow---Down-2 - Iconly---Bold.png'
import chatIcon from '../../assets/IMG/Chat - Iconly---Bold.png'
import BellIcon from '../../assets/IMG/Notification - Iconly---Bold.png'
import SearchBar from "material-ui-search-bar";

const useStyles = makeStyles({
    headerContainer: {
        padding: '11px 2px',
        paddingRight: '26px',
        boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)'
    },
    addButton: {
        padding: '0 20px',
        color: '#ffffff',
        backgroundColor: '#3e83f6',
        border: 'none',
        borderRadius: '16px',
        height: '46px',
        margin: 'auto',
        marginRight: '36px'
    },
    marginAuto: {
        margin: 'auto 10px !important'
    }
  });



const Header = (props) => {
    const classes = useStyles();
    return ( <Grid 
            container
            direction="row"
            justifyContent="space-between"
            className={classes.headerContainer}
            >
                <Grid item className={classes.marginAuto}>
                    <img src={logo} alt="logo_img"/>
                </Grid>
                <Grid item>
                    <Grid container direction="row">
                       
                        <SearchBar
        style={{
          minWidth: "312px",
          backgroundColor: '#f5f5fb',
          boxShadow: 'none',
          height: '46px',
          margin: 'auto 140px',
          fontSize: '13px'
        }}
        placeholder="Search and Find"
      />
                        <button type="button" className={classes.addButton}>+ ADD</button>
                        <div style={{margin: 'auto 10px'}}><img src={BellIcon} alt="Bell Icon"/></div>
                        <div style={{margin: 'auto 10px'}}><img src={chatIcon} alt="chat icon"/></div>
                        <div style={{margin: 'auto 10px'}}>Clarence Russell</div>
                        <Avatar style={{margin: 'auto 10px'}} alt="Clarence Russell" src={avtarImg} sx={{ width: 56, height: 56 }}/>
                        <span style={{margin: 'auto 10px'}}><img src={downArrow} alt="down arrow"/></span>
                    </Grid>
                </Grid>
            </Grid>
    )
}
export default Header;