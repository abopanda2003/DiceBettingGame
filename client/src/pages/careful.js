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
import diceYellow from '../assets/img/dice_yellow.png'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import CarefulCard1 from '../components/careful_card1';
import CarefulCard2 from '../components/careful_card2';
import CarefulCard3 from '../components/careful_card3';

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
        const cardTitle = "Be Careful Game!!";
        return (
            <div style={rootStyle}>
                <Header></Header>
                <Hidden smDown>
                <Grid container spacing={3} className="diceGrid" justify="center">
                    <Grid item xs={12} sm={8} md={12} >
                        <div className="diceTitle" style={style3}>
                            {cardTitle}
                            <img src={diceYellow} />
                        </div>
                        
                    </Grid>
                </Grid>
                </Hidden>

                <Grid container spacing={3} className="diceGrid x-farming-blog1" justify="center">
                    <Grid item xs={12} sm={12} md={12} className = "text-left x-display-flex">
                        <div className = "x-lamp x-font-normal-white2">
                            Please note that this is a ZERO-SUM game with a slight modification! please understand the RISK of a zero sum game, the last person to join the game will not receive UPLINE benefit!
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} className = "text-left x-display-flex">
                        <div className = "x-lamp">
                            <img src = {diceYellow} alt = "dicepurple" width='25px' />
                        </div>
                        <div className = "x-lamp x-font-normal-white2">
                            Do NOT play UNLESS you are ready to lose the amount of token you put into the game
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} className = "text-left x-display-flex">
                        <div className = "x-lamp">
                            <img src = {diceYellow} alt = "dicepurple" width='25px' />
                        </div>
                        <div className = "x-lamp x-font-normal-white2">
                            Do NOT play UNLESS you have read this article
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} className = "text-left x-display-flex">
                        <div className = "x-lamp">
                            <img src = {diceYellow} alt = "dicepurple" width='25px' />
                        </div>
                        <div className = "x-lamp x-font-normal-white2">
                            This is a public smart contract The tokens are managed by the contract
                        </div>
                    </Grid>
                </Grid>

                <Grid container spacing={3} className="diceGrid x-farming-blog1" justify="center">
                    <Grid item xs={12} sm={12} md={12} className = "text-left x-display-flex">
                        <div className = "x-lamp x-font-normal-orange2">
                            When someone join the game
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} className = "text-left x-display-flex">
                        <div className = "x-lamp">
                            <img src = {diceYellow} alt = "dicepurple" width='25px' />
                        </div>
                        <div className = "x-lamp x-font-normal-white2">
                            8 UPLINE will receive 60% of the token
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} className = "text-left x-display-flex">
                        <div className = "x-lamp">
                            <img src = {diceYellow} alt = "dicepurple" width='25px' />
                        </div>
                        <div className = "x-lamp x-font-normal-white2">
                            24 TRUE RANDOM player will receive 30% of the token
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} className = "text-left x-display-flex">
                        <div className = "x-lamp">
                            <img src = {diceYellow} alt = "dicepurple" width='25px' />
                        </div>
                        <div className = "x-lamp x-font-normal-white2">
                            10% of the token will be used as an insurance fund which will be put at defi project(s) to generate yields This will give a minimum of 2% APY on the insurance fund
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} className = "text-left x-display-flex">
                        <div className = "x-lamp">
                            <img src = {diceYellow} alt = "dicepurple" width='25px' />
                        </div>
                        <div className = "x-lamp x-font-normal-white2">
                            Will receive CARE token, FREEZE this token to receive RANDOM drops of yields generated from the insurance fund
                        </div>
                    </Grid>
                </Grid>
                <div className = " diceGrid text-left x-font-big-white">
                    network State
                </div>
                <Grid container spacing={3} className="diceGrid x-farming-blog2" justify="center">
                    <Grid item xs={12} sm={6} md={3} className = "text-left x-display-flex">
                        <CarefulCard1 
                            title = "Totla Spent"
                            value = "356,780 TT"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} className = "text-left x-display-flex">
                        <CarefulCard1 
                            title = "Insurance Processed"
                            value = "32,461 TT"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} className = "text-left x-display-flex">
                        <CarefulCard1 
                            title = "Insurance Claimed"
                            value = "12,476100207 TT"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} className = "text-left x-display-flex">
                        <CarefulCard1 
                            title = "Player Count"
                            value = "1,325"
                        />
                    </Grid>
                </Grid>
                <div className = " diceGrid text-left x-font-big-white">
                    Your State
                </div>
                <Grid container spacing={3} className="diceGrid x-farming-blog2" justify="center">
                    <Grid item xs={12} sm={6} md={3} className = "text-left x-display-flex">
                        <CarefulCard2 
                            title = "Totla Spent"
                            value = "356,780 TT"
                            backgroundColor = "#ff0039"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} className = "text-left x-display-flex">
                        <CarefulCard2 
                            title = "Insurance Processed"
                            value = "32,461 TT"
                            backgroundColor = "#2780e3"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} className = "text-left x-display-flex">
                        <CarefulCard2
                            title = "Insurance Claimed"
                            value = "12,476100207 TT"
                            backgroundColor = "#ff7518"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} className = "text-left x-display-flex">
                        <CarefulCard2
                            title = "Player Count"
                            value = "1,325"
                            backgroundColor = "#3fb618"
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={3} className = "diceGrid" justify = "center">
                    <Grid item xs = {12} sm={12} md={12} className = "x-font-big-white">
                        Ready to play??
                    </Grid>
                    <Grid item xs = {12} sm={12} md={12} className = "x-font-normal-red">
                        Are you ready if you lose??
                    </Grid>
                </Grid>
                <Grid container spacing={3} className="diceGrid" justify="center">
                        <CarefulCard3 />
                </Grid>
                <Grid container spacing={3} className="diceGrid" justify="center">
                        <CarefulCard3 />
                </Grid>
                <Grid container spacing={3} className="diceGrid" justify="center">
                        <CarefulCard3 />
                </Grid>
                <Grid container spacing={3} className="diceGrid" justify="center">
                        <CarefulCard3 />
                </Grid>
                <Grid container spacing={3} className="diceGrid" justify="center">
                        <CarefulCard3 />
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
