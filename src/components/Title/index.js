import React from 'react';
import Typography from '@mui/material/Typography';


function Title(props) {
    const { title,variant,style } = props;
    return (
    <Typography style={{color: '#103460', fontFamily: 'GothamMedium',...style }} variant={variant ? variant : 'h4'} component="div" gutterBottom>
        {title}
    </Typography>
    )
}

export default Title
