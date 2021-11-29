import React from 'react'
import Activity from '../Activity';
import Dashboard from '../Dashboard';
import Events from '../Events';
import Progress from '../Progress';

const Body = (props) => {
    return (
        <div style={{backgroundColor: '#f5f5fb', padding: '30px 75px'}}>
            <Dashboard/>
            <Events/>
            <Activity />
            <Progress />
        </div>
    )
}
export default Body;