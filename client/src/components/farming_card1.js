import React from 'react';

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 0.2
        }}
    />
);

function FarmingCard(){
    return(
        <div className = "x-farming-card">
            <div className = "x-font-normal-white text-left">
                pending harvest
            </div>
            <div className = "row">
                <div className = " col-md-7 col-sm-7 col-xs-7 x-farming-card-number text-left">
                    0.0000
                </div>
                <div className = "col-md-4 col-sm-4 col-xs-5 x-farming-card-harvest">
                    <button className = "x-farming-card-harvest-button">Harvest</button>
                </div>
            </div>
            <ColoredLine color = "#5e1c89" />
            <div className = "row">
                <div className = "col-md-4 col-sm-4 col-xs-12 x-font-normal-white">Risk balance</div>
                <div className = "col-md-8 col-sm-8 col-xs-12 x-risk-balance x-font-normal-white">0</div>
            </div>
            <div className = "row">
                <div className = "col-md-12 x-risk-balance x-font-normal-gray">Price 15.39957TT/Risk</div>
            </div>
            <br />
            <div className = "row mb-2">
                <div className = "col-md-2 col-sm-2 col-xs-2"></div>
                <div className = "col-md-3 col-sm-3">
                    <button className = "x-farming-card-swap-button x-font-small-white">Swap to TT</button>
                </div>
                <div className = "col-md-3 col-sm-3">
                    <button className = "x-farming-card-transfer-button x-font-small-white">Transfer Risk</button>
                </div>
                <div className = "col-md-3 col-sm-3">
                    <button className = "x-farming-card-bet-button x-font-small-white">Bet your Risk</button>
                </div>
                <div className = "col-md-1"></div>
            </div>
            <br />
        </div>
    )
}

export default FarmingCard;