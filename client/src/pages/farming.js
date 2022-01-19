import React from 'react';
// import '../App.css';
import { Grid, Hidden } from '@material-ui/core';
import LiveTable from '../components/LiveTable';
import {Header} from '../components/Header';
import Footer from '../components/Footer';
import backgroundImg from '../assets/img/background.png';
import dice1 from '../assets/img/dice1.png';
import dice2 from '../assets/img/dice2.png';
import dice3 from '../assets/img/dice3.png';
import dice4 from '../assets/img/dice4.png';
import effect from '../assets/img/effect.png';
import dicePurple from '../assets/img/dice_purple.png'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import FarmingCard from '../components/farming_card1';
import FarmingCard2 from '../components/farming_card2';
import lampImage from '../assets/img/lamp.png'

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 0.1
        }}
    />
);

var rootStyle = {
    width: "100%",
    backgroundImage: `url(${backgroundImg})`,
    height: "100%",
    backgroundSize: 'cover',
    backgroundPosition: 'center'
};

const HigherSlide = withStyles({
    root: {
      color: '#7fc03e',
      height: 20,
    },
    thumb: {
      display: "none"
    },
    active: {},
    valueLabel: {
      left: 'calc(-50% + 4px)',
    },
    track: {
        color: "#ee2748",
      height: 20,
      borderRadius: 10,
    },
    rail: {
        color: '#7fc03e',
      height: 20,
      borderRadius: 10,
      opacity: 1
    },
  })(Slider);

  const PayoutSlide = withStyles({
    root: {
      color: '#7fc03e',
      height: 10,
    },
    thumb: {
      display: "none"
    },
    active: {},
    valueLabel: {
      left: 'calc(-50% + 4px)',
    },
    track: {
        color: "#c30a96",
      height: 10,
    },
    rail: {
        backgroundImage: "linear-gradient( to right,#316fdc 0%,#3c1c65 100% )",
      height: 5,
      opacity: 1,
      marginTop: 2.5
    },
  })(Slider);


class ClassicDice extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            higherVal: 50,
            payoutVal: 1.985
        }
    }

    render() {
        const style1 = {backgroundImage: "linear-gradient( to right,#14aafc 0%,#4f52ee 100% )" }
        const style2 = {backgroundImage: "linear-gradient( to right,#d30c90 0%,#7d02c6 100% )" }
        const style3 = {backgroundImage: "linear-gradient( to right,#f2882b 0%,#fb6a49 100% )" }
        const style4 = {backgroundImage: "linear-gradient( to right,#33bae4 0%,#d929fb 100% )" }
        const cardTitle = "Seriously Risky Farmer";
        return (
            <div style={rootStyle}>
                <Header></Header>
                <Hidden smDown>
                <Grid container spacing={3} className="diceGrid" justify="center">
                    <Grid item xs={12} sm={8} md={12} >
                        <div className="diceTitle" style={style4}>
                            {cardTitle}
                            <img src={dicePurple} />
                        </div>
                        
                    </Grid>
                </Grid>
                </Hidden>
                
                <Grid container spacing={3} justify="center" className = "diceGrid">
                    <Grid container>
                        <Grid item md={6} sm={12} xs={12}>
                            <FarmingCard />
                            <br />
                        </Grid>
                        <Grid item md={6} xs={12} sm={12}>
                            <FarmingCard2 />
                        </Grid>
                    </Grid>
                </Grid>
                
                <Grid container spacing={3} className="autoGrid" justify="center">
                    <Grid item xs={12} sm={6} md={6}>
                        <button type="button" className="playBtn x-buypower-button">Buy Power</button>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <button type="button" className="playBtn autoBtn" style={style2}>Get Power by Risk + TT</button>
                    </Grid>
                </Grid>

                <Grid container spacing={3} className="diceGrid x-farming-blog1" justify="center">
                    <Grid item xs={12} sm={12} md={12}>
                        <div>
                            <div className = "text-left">
                                Geeky Stats
                            </div>
                            <ColoredLine color = "#692497" />
                            <div className = "row">
                                <div className = "col-md-4 col-sm-4 col-xs-6 x-font-normal-white winorlose">APY</div>
                                <div className = "col-md-8 col-sm-8 col-xs-6 x-risk-balance x-font-normal-white">191.76<span>%</span></div>
                            </div>
                            <ColoredLine color = "#692497" />
                            <div className = "row">
                                <div className = "col-md-4 col-sm-4 col-xs-6 x-font-small-white2 winorlose">Total value Locked</div>
                                <div className = "col-md-8 col-sm-8 col-xs-6 x-risk-balance x-font-small-white2">2,519,658.39597 <span>TT</span></div>
                            </div>
                            <div className = "row">
                                <div className = "col-md-4 col-sm-4 col-xs-6 x-font-small-white2 winorlose">Emit per Block</div>
                                <div className = "col-md-8 col-sm-8 col-xs-6 x-risk-balance x-font-small-white2">0.01 <span>RISK</span></div>
                            </div>
                            <div className = "row">
                                <div className = "col-md-4 col-sm-4 col-xs-6 x-font-small-white2 winorlose">Network Staked</div>
                                <div className = "col-md-8 col-sm-8 col-xs-6 x-risk-balance x-font-small-white2">155,779.663372 <span>POWER</span></div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
                <Grid container spacing={3} className="diceGrid" justify="center">
                    <Grid item xs={12} sm={12} md={12}>
                    <div className = "x-lamp"><img src = {lampImage} alt = "lamp" /></div>
                    <div className = "x-lamp x-font-normal-white" style = {{lineHeight: "50%"}}>How to Play</div>                  
                    </Grid>
                </Grid>
                <Grid container spacing={3} className="diceGrid x-farming-blog1" justify="center">
                    <Grid item xs={12} sm={12} md={12} className = "text-left x-display-flex">
                        <div className = "x-lamp">
                            <img src = {dicePurple} alt = "dicepurple" width='25px' />
                        </div>
                        <div className = "x-lamp x-font-normal-white2">
                            Before you begin please read about <span>YIELD FARMING,</span> and inform yourself with as much information regarding <span>YIELD FARMING</span>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} className = "text-left x-display-flex">
                        <div className = "x-lamp">
                            <img src = {dicePurple} alt = "dicepurple" width='25px' />
                        </div>
                        <div className = "x-lamp x-font-normal-white2">
                            Before you begin please read about <span>YIELD FARMING,</span> and inform yourself with as much information regarding <span>YIELD FARMING</span>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} className = "text-left x-display-flex">
                        <div className = "x-lamp">
                            <img src = {dicePurple} alt = "dicepurple" width='25px' />
                        </div>
                        <div className = "x-lamp x-font-normal-white2">
                            Before you begin please read about <span>YIELD FARMING,</span> and inform yourself with as much information regarding <span>YIELD FARMING</span>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} className = "text-left x-display-flex">
                        <div className = "x-lamp">
                            <img src = {dicePurple} alt = "dicepurple" width='25px' />
                        </div>
                        <div className = "x-lamp x-font-normal-white2">
                            Before you begin please read about <span>YIELD FARMING,</span> and inform yourself with as much information regarding <span>YIELD FARMING</span>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} className = "text-left x-display-flex">
                        <div className = "x-lamp">
                            <img src = {dicePurple} alt = "dicepurple" width='25px' />
                        </div>
                        <div className = "x-lamp x-font-normal-white2">
                            Before you begin please read about <span>YIELD FARMING,</span> and inform yourself with as much information regarding <span>YIELD FARMING</span>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} className = "text-left x-display-flex">
                        <div className = "x-lamp">
                            <img src = {dicePurple} alt = "dicepurple" width='25px' />
                        </div>
                        <div className = "x-lamp x-font-normal-white2">
                            Before you begin please read about <span>YIELD FARMING,</span> and inform yourself with as much information regarding <span>YIELD FARMING</span>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} className = "text-left x-display-flex">
                        <div className = "x-lamp">
                            <img src = {dicePurple} alt = "dicepurple" width='25px' />
                        </div>
                        <div className = "x-lamp x-font-normal-white2">
                            Before you begin please read about <span>YIELD FARMING,</span> and inform yourself with as much information regarding <span>YIELD FARMING</span>
                        </div>
                    </Grid>
                </Grid>
                <Footer></Footer>
                <img src={dice1} alt="dice1" className="homeDice1"/>
                <img src={dice2} alt="dice2" className="homeDice2"/>
                <img src={dice3} alt="dice3" className="homeDice3"/>
                <img src={dice4} alt="dice4" className="homeDice4"/>
                <img src={effect} alt="effect" className="homeEffect"/>
            </div>
        )
    }
  }
  
// const mapStateToProps = state => {
//     return {
//         items: state,
//     }
// }

// const mapDispatchToProps = {
//     setItems,
//     updateTimer
// }
  
export default ClassicDice;
