import React from 'react';

function Card1(props){
    const {title, value} = props;
    return(
        <div className = 'x-careful-card1'>
            <div className = "x-font-normal-white">{title}</div>
            <div className = "x-font-normal-orange">{value}</div>
        </div>
    )
}
export default Card1;