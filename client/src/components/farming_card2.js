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
                Your Power
            </div>
            <ColoredLine color = "#19319a" />
            <div className = "row">
                <div className = "col-md-7 col-sm-7 col-xs-12 x-font-normal-white text-left">
                    <div className = "col-12">Available</div>
                    <div className = "col-12 x-farming-card2-count-font">0</div>
                    <div className = "col-12">
                        <button className = "x-farming-card-swap-button x-font-small-white mr-2">Swap to TT</button>
                        <button className = "x-farming-card-transfer-button x-font-small-white">Transfer Risk</button>
                    </div>
                </div>
                <div className = "col-md-5 col-sm-5 col-xs-12 x-risk-balance x-font-normal-white">
                    <div className = "col-12 ">Staked</div>
                    <div className = "col-12 x-farming-card2-count-font pr-5">0</div>
                    <div className = "col-12 mt-2">
                    <button className = "x-farming-card-bet-button x-font-small-white">unstack</button>
                    </div>
                </div>
            </div>
            <ColoredLine color = "#19319a" />
            <div className = "row">
                <div className = "col-md-7 col-sm-7 col-xs-12 x-font-normal-white text-left">
                    <div className = "col-12">Available</div>
                    <div className = "col-12 x-farming-card2-count-font">0</div>
                </div>
                <div className = "col-md-5 col-sm-5 col-xs-12 x-risk-balance x-font-normal-white">
                    <div className = "col-12 ">Staked</div>
                    <div className = "col-12 x-farming-card2-count-font pr-5">0</div>
                </div>
            </div>
        </div>
    )
}

export default FarmingCard;