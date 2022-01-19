import React from 'react';

function ReferralCard(props){
    const {betTitle, miningTitle, betValue, miningValue, title} = props;
    const ColoredLine = ({ color }) => (
        <hr
            style={{
                color: color,
                backgroundColor: color,
                height: 0.2
            }}
        />
    );
    return(
        <div className = "x-referal-card-background">
            <div className = "diceBtn1 x-font-normal-white">
                {title}
            </div>
            <ColoredLine color="#571c7f"/>
            <div className = "x-font-small-white">
            <div className = "row pt-4">
                <div className = "col-md-4 col-sm-4 col-xs-12 x-font-small-white text-left">{betTitle}</div>
                <div className = "col-md-8 col-sm-8 col-xs-12 x-risk-balance x-font-small-white">{miningTitle}</div>
            </div>
            <div className = "row">
                <div className = "col-md-4 col-sm-4 col-xs-12 text-left x-font-normal-green">{betValue}</div>
                <div className = "col-md-8 col-sm-8 col-xs-12 x-risk-balance x-font-normal-green">{miningValue}</div>
            </div>
            </div>
        </div>
    )
}
export default ReferralCard;