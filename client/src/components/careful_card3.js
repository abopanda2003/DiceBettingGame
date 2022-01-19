import React from 'react';
import {Grid} from '@material-ui/core';

function Card3(){
    const style2 = {backgroundImage: "linear-gradient( to right,#d30c90 0%,#7d02c6 100% )" }
    return(
        <Grid container>
            <Grid item xs={3} sm={3} md={3} className = "x-careful-card3-item1 pr-1">
                <div className = "x-font-normal-white">
                    Ticket
                </div>
                <div className = "x-font-normal-pink">
                    5 TT
                </div>
            </Grid>
            <Grid item xs={3} sm={3} md={3} className = "x-careful-card3-item2 pr-1">
                <div className = "x-font-normal-white">
                    Length
                </div>
                <div className = "x-font-normal-pink">
                    13,633
                </div>
            </Grid>
            <Grid item xs={6} sm={6} md={6} className = "text-right x-careful-card3-item3 pr-1">
                <button style = {style2}>Join</button>
            </Grid>
        </Grid>
    )
}
export default Card3;