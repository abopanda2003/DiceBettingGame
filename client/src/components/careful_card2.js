import React from 'react';

function Card2(props){
    const {title, value, backgroundColor} = props;
    return(
        <div className = 'x-careful-card2' style = {{backgroundColor: backgroundColor}}>
            <div className = "x-font-normal-white">{title}</div>
            <div className = "x-font-normal-white">{value}</div>
        </div>
    )
}
export default Card2;