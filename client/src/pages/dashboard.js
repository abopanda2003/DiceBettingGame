import React from 'react';
import { Grid } from '@material-ui/core';
import Card from '../components/Card';
import LiveTable from '../components/LiveTable';
import {Header, socket} from '../components/Header';
import Footer from '../components/Footer';
import backgroundImg from '../assets/img/background.png';
import title from '../assets/img/title.png';
import diceBlue from '../assets/img/dice_blue.png'
import dicePink from '../assets/img/dice_pink.png'
import diceYellow from '../assets/img/dice_yellow.png'
import dicePurple from '../assets/img/dice_purple.png'
import dice1 from '../assets/img/dice1.png';
import dice2 from '../assets/img/dice2.png';
import dice3 from '../assets/img/dice3.png';
import dice4 from '../assets/img/dice4.png';
import effect from '../assets/img/effect.png';

var rootStyle = {
    width: "100%",
    backgroundImage: `url(${backgroundImg})`,
    height: "100%",
    backgroundSize: 'cover',
    backgroundPosition: 'center'
};

function createData(id, player, bet, profit, payout, guess, roll) {
    return { id, player, bet, profit, payout, guess, roll };
  }

const rows = [
    
  ];

  const myRows = [
    // createData(1, 'Yark G', 50, "+79.13%", 37.41, "eg.text", "eg.text"),
    // createData(2, 'Action', 52, "+79.13%", 37.41, "eg.text", "eg.text")
  ];

class Dashboard extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            stateMyData: [],
            tableViewFlag: false,
            totalData: [],
            stateData: []
        }
    }

    submitCard = (title) => {
        console.log(title)
    }

    getData = foodItems => {
        console.log(foodItems);
        foodItems = foodItems.map(food => {
          food.order = 0;
          return food;
        });
        this.setState({ food_data: foodItems });
      };
      componentDidMount(){
        socket.on("users_count", (data)=>{
            console.log(data);
            this.setState({totalData: data});
            rows.push(createData(1, this.state.totalData.publicKey, this.state.totalData.amount, this.state.totalData.profit, this.state.totalData.payoutVal, this.state.totalData.higherVal, this.state.totalData.roll))
            this.setState({stateData:rows});
            if(data.publicKey === window.ethereum.selectedAddress){
                myRows.push(createData(1, data.publicKey, data.amount, data.profit, data.payoutVal, data.higherVal, data.roll));
                this.setState({stateMyData:myRows});
            }
        })
    }

      handleAllPlayer = () =>{
        this.setState({tableViewFlag: false})
      }
    
      handleMyBets = () =>{
        this.setState({tableViewFlag: true})
      }

    render() {
        const style1 = {backgroundImage: "linear-gradient( to right,#14aafc 0%,#4f52ee 100% )" }
        const style2 = {backgroundImage: "linear-gradient( to right,#d30c90 0%,#7d02c6 100% )" }
        const style3 = {backgroundImage: "linear-gradient( to right,#f2882b 0%,#fb6a49 100% )" }
        const style4 = {backgroundImage: "linear-gradient( to right,#33bae4 0%,#d929fb 100% )" }
        return (
            <div>
            <div className = "dashboard" style={rootStyle}>
                <Header></Header>
                <Grid container spacing={3} className="dashboardGrid" justify="center">
                    <Grid item xs={12} sm={12} md={8} >
                        <img src={title} alt="title" width="100%"/>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <Card 
                            cardTitle="Dice I" 
                            bodyTitle="10,000 Side Dice (0 - 9,999)"
                            bodyComment="with a very large winning ratio (up to 49.625x) Play, invest in the bankroll, win the Jackpot, repeat!"
                            btnTitle='Play "Dice I"'
                            cHeaderStyle={style1}
                            diceImg={diceBlue}
                            gameParams = 'classic-dice'
                            onSubmit={this.submitCard}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <Card 
                            cardTitle="Dice II" 
                            bodyTitle="100 Side Dice (0 - 99)"
                            bodyComment="with a very large winning ratio (up to 49.625x) Play, invest in the bankroll, win the Jackpot, repeat!"
                            btnTitle='Play "Dice II"'
                            cHeaderStyle={style2}
                            diceImg={dicePink}
                            gameParams = 'dice-ii'
                            onSubmit={this.submitCard}
                        />
                    </Grid>
                    {/* <Grid item xs={12} sm={12} md={6}>
                        <Card 
                            cardTitle="Careful" 
                            bodyTitle=" "
                            bodyComment="a ZERO SUM and a very HIGH RISK gamewith a potential earningof 400% join the game, buy the ticket, earn CARE Token"
                            btnTitle='Play "Be Careful"'
                            cHeaderStyle={style3}
                            diceImg={diceYellow}
                            gameParams = 'be-careful'
                            onSubmit={this.submitCard}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <Card 
                            cardTitle="Farming!" 
                            bodyTitle=" "
                            bodyComment="We Seriously jump into Farming, resting from dice with the soothing breeze from the greens get POWER, earns RISK!"
                            btnTitle='Play "Dice II"'
                            cHeaderStyle={style4} 
                            diceImg={dicePurple}
                            gameParams = 'dice-ii-2'
                            onSubmit={this.submitCard}
                        />
                    </Grid> */}
                    
                </Grid>
                <img src={dice1} alt="dice1" className="homeDice1"/>
                <img src={dice2} alt="dice2" className="homeDice2"/>
                <img src={dice3} alt="dice3" className="homeDice3"/>
                <img src={dice4} alt="dice4" className="homeDice4"/>
                <img src={effect} alt="effect" className="homeEffect"/>
            </div>
            <div style = {{backgroundColor: "#76006c"}}>
                <Grid container spacing={3} className="diceGridTable" justify="center">
                    <Grid item xs={12} sm={12} md={12} className="tableButtons">
                        <p>Live Player Bets</p>
                        <div className="tableBtns">
                            <button className="allPlayers" onClick = {this.handleAllPlayer}>All Players</button>
                            <button className="allPlayers" onClick = {this.handleMyBets}>My bets</button>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                        <LiveTable rows = {!this.state.tableViewFlag?this.state.stateData:this.state.stateMyData} />
                    </Grid>
                </Grid>
            </div>
            <Footer></Footer>
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
  
export default Dashboard;
