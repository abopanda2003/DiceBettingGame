import React from 'react';
// import '../App.css';
import { Grid } from '@material-ui/core';
import LiveTable from '../components/LiveTable';
import {Header, socket} from '../components/Header';
import Footer from '../components/Footer';
import backgroundImg from '../assets/img/background.png';
import dice1 from '../assets/img/dice1.png';
import dice2 from '../assets/img/dice2.png';
import dice3 from '../assets/img/dice3.png';
import dice4 from '../assets/img/dice4.png';
import effect from '../assets/img/effect.png';
import diceBlue from '../assets/img/dice_blue.png'
import dicePink from '../assets/img/dice_pink.png'
import diceYellow from '../assets/img/dice_yellow.png'
import dicePurple from '../assets/img/dice_purple.png'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import { wait } from '@testing-library/react';
import Web3 from 'web3';
import Abi from '../assets/abi/abi.json';

import Axios from 'axios';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

var web3 = new Web3();
var tokenAddress = "0xf76e1b7ff23b462bf9f0562dcf7929c032c84ffb";
var myContract = new web3.eth.Contract(Abi, tokenAddress);
var gasLimitHex = web3.utils.toHex(90000);

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

function timeout(delay: number) {
    return new Promise( res => setTimeout(res, delay) );
}

function createData(id, player, bet, profit, payout, guess, roll) {
    return { id, player, bet, profit, payout, guess, roll };
  }

const rows = [
    // createData(1, 'Yark G', 50, "+79.13%", 37.41, "eg.text", "eg.text"),
    // createData(2, 'Action', 52, "+79.13%", 37.41, "eg.text", "eg.text")
];

const myRows = [
    // createData(1, 'Yark G', 50, "+79.13%", 37.41, "eg.text", "eg.text"),
    // createData(2, 'Action', 52, "+79.13%", 37.41, "eg.text", "eg.text")
];

var i=1;
var k=0;
class DiceLL extends React.Component {

    constructor(props) {
        super(props)
        this.handleHigher = this.handleHigher.bind(this);
        this.handlePayout = this.handlePayout.bind(this);
        this.handleHigherVal = this.handleHigherVal.bind(this);
        this.handlePayoutVal = this.handlePayoutVal.bind(this);

        this.publicKey = React.createRef();

        this.state = {
            flag:true,
            amount: 1,
            higherVal: 5000,
            payoutVal: 9910/5000,
            profit: 9910/5000,
            result: 0,
            totalData: [],
            stateData: [],
            stopOnLoss: 1,
            stopOnProfit: 50,
            autoFlag: false,
            totalProfit: 0,
            stateMyData: [],
            tableViewFlag: false
        }
    }
    
    componentDidMount() {
        console.log(this.props.match.params.id.length);
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

    handleHigherVal = (event) => {
        this.setState({higherVal: event.target.value});
        this.setState({payoutVal: 9910/(10000-event.target.value)})
        this.setState({profit: (9910/(10000-event.target.value))*this.state.amount})
    }

    handleHigher = (event, value) => {
        this.setState({higherVal: value});
        this.setState({payoutVal: 9910/(10000-value)});
        this.setState({profit: this.state.amount*(9910/(10000-value))})
    }

    handlePayoutVal = (event) => {
        
    }

    handlePayout = (event, value) => {
        this.setState({payoutVal: value});
    }

    handleAmount = (event) => {
        this.setState({amount: event.target.value});
        this.setState({profit: (9910/(10000-this.state.higherVal))*event.target.value})
    }

    amountDivision = (event) =>{
        var tempAmount = this.state.amount/2;
        this.setState({amount: this.state.amount/2});
        this.setState({profit: this.state.payoutVal*tempAmount})
    }
    amountDouble = (event) =>{
        var tempAmount = this.state.amount*2;
        this.setState({amount: this.state.amount*2});
        this.setState({profit: this.state.payoutVal*tempAmount})
    }
    minHigher = () =>{
        this.setState({higherVal: 100});
        this.setState({payoutVal: 99.1})
        this.setState({profit: this.state.amount*99.1})
    }
    maxHigher = () =>{
        this.setState({higherVal: 9910});
        this.setState({payoutVal: 1})
        this.setState({profit: this.state.amount*1})
    }

    handleOnLoss = (e) =>{
        this.setState({stopOnLoss:e.target.value})
    }
    handleOnProfit = (e) =>{
        this.setState({stopOnProfit: e.target.value})
    }

onBet = async () =>{
    if (window.ethereum) {
        var web3 = new Web3(new Web3.providers.HttpProvider("https://bsc-dataseed.binance.org/"));
        //console.log(web3.givenProvider.selectedAddress);
        console.log(window.ethereum._metamask.isUnlocked());
        let data = myContract.methods.transfer("0x413EBD57EbA0f200ed592c31E7dB6119C92A7973", web3.utils.toHex(web3.utils.toWei(this.state.amount.toString()))).encodeABI();

        const chainId = await window.ethereum.request({ method: 'eth_chainId' });
        var txdetail = {
            //"nonce":'0x' + lastCountOfTransaction.toString(16),
            // nonce: '0x00',
            from: window.ethereum.selectedAddress,
            to: tokenAddress,
            value: web3.utils.toHex(web3.utils.toWei("0")),
            gas: gasLimitHex,
            gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
            chainId:chainId,
            data:data
        }
        window.ethereum.request({ method: 'eth_sendTransaction', params: [txdetail] }).then( async (res) => {
            console.log('res ',this.props.match.params.id);
            if(window.ethereum.selectedAddress!=this.props.match.params.id && this.props.match.params.id.length==42){
                Axios({
                    method: "POST",
                    url: "http://localhost:5000/api/referral/add-profit-to-referral",
                    data:{
                        publicKey: this.props.match.params.id.toLowerCase(),
                        amount: this.state.amount/1000
                    }
                }).then((res)=>{
                    console.log(res.data);
                })
            }

            console.log(txdetail);
            i++;
            let randomNumber
            for(var j=0; j<=15; j++){
                await timeout(100);
                randomNumber = Math.floor(Math.random() * 10000);
                this.setState({result: randomNumber});
            }
            console.log(this.publicKey.current.state.publicKey);
            if(randomNumber>=this.state.higherVal){
                var winnerData = {
                    "publicKey": window.ethereum.selectedAddress,
                    "amount": this.state.amount,
                    "profit": this.state.profit,
                    "payoutVal": this.state.payoutVal,
                    "higherVal": this.state.higherVal,
                    "roll": randomNumber
                }
                socket.emit("set winner", winnerData)
            }
            else{

                    var loserData = {
                        "publicKey": window.ethereum.selectedAddress,
                        "amount": this.state.amount,
                        "profit": 0,
                        "payoutVal": this.state.payoutVal,
                        "higherVal": this.state.higherVal,
                        "roll": randomNumber
                    }
        
                        socket.emit("set loser", loserData)
            }
        });
    }
}

handleAutoBet = async () =>{
    this.setState({autoFlag: !this.state.autoFlag});
    await delay(500);
    if(this.state.autoFlag){
        if (window.ethereum) {
            var web3 = new Web3(new Web3.providers.HttpProvider("https://bsc-dataseed.binance.org/"));
                //console.log(web3.givenProvider.selectedAddress);
                console.log(window.ethereum._metamask.isUnlocked());
                let data = myContract.methods.transfer("0x413EBD57EbA0f200ed592c31E7dB6119C92A7973", web3.utils.toHex(web3.utils.toWei(this.state.stopOnLoss.toString()))).encodeABI();

                const chainId = await window.ethereum.request({ method: 'eth_chainId' });
                var txdetail = {
                    //"nonce":'0x' + lastCountOfTransaction.toString(16),
                    // nonce: '0x00',
                    from: window.ethereum.selectedAddress,
                    to: tokenAddress,
                    value: web3.utils.toHex(web3.utils.toWei("0")),
                    gas: gasLimitHex,
                    gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
                    chainId:chainId,
                    data:data
                }
                window.ethereum.request({ method: 'eth_sendTransaction', params: [txdetail] }).then( async (res) => {
                    console.log('res ',res);

                    if(window.ethereum.selectedAddress!=this.props.match.params.id&&this.props.match.params.id.length==42){
                        Axios({
                            method: "POST",
                            url: "http://localhost:5000/api/referral/add-profit-to-referral",
                            data:{
                                publicKey: this.props.match.params.id.toLowerCase(),
                                amount: this.state.stopOnLoss/1000
                            }
                        }).then((res)=>{
                            console.log(res.data);
                        })
                    }
                    
                    let randomNumber;
                    console.log(this.state.autoFlag)
                        while(this.state.totalProfit>=-1*this.state.stopOnLoss+this.state.amount&&this.state.totalProfit<=this.state.stopOnProfit-this.state.profit&&this.state.autoFlag){
                            randomNumber = Math.floor(Math.random() * 10000);
                            console.log(randomNumber)
                            await delay(100);
                            if(randomNumber>=this.state.higherVal){
                                // this.state.totalProfit+=this.state.profit-this.state.amount;
                                this.setState({totalProfit:this.state.totalProfit+this.state.profit-this.state.amount})
                            }
                            else{
                                // this.state.totalProfit-=this.state.amount;
                                this.setState({totalProfit:this.state.totalProfit-this.state.amount})
                            }
                        }
                        var autoData = {
                            "publicKey": window.ethereum.selectedAddress,
                            "amount": this.state.stopOnLoss,
                            "profit": this.state.totalProfit,
                            "payoutVal": this.state.payoutVal,
                            "higherVal": this.state.higherVal,
                            "roll": "autoBet"
                        }
                        socket.emit("set autoBet", autoData);
                        console.log("wowow",this.state.totalProfit)
                        this.setState({autoFlag: false})
                    })
        }
    }
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
        const cardTitle = "Dice I";
        return (
            <div>
                <div className="dashboard" style={rootStyle}>
                    <Header ref = {this.publicKey} />
                    <Grid container spacing={3} className="diceGrid" justify="center">
                        <Grid item xs={12} sm={12} md={12} >
                            <div className="diceTitle" style={style1}>
                                {cardTitle}
                                <img src={diceBlue} />
                            </div>
                            
                        </Grid>
                    </Grid>

                    <Grid container spacing={3} className="diceGrid" justify="center">
                        <Grid item xs={12} sm={6} md={3} className="diceInfo">
                            <p>Bet Amount</p>
                            <input type="text" className="infoCard" value = {this.state.amount} onChange = {this.handleAmount} />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3} className="diceInfo">
                            <p>Higher (>=)</p>
                            <input className="infoCard" value={this.state.higherVal} onChange={this.handleHigherVal} min = "1" max = "10000"/>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3} className="diceInfo">
                            <p>Payout (x)</p>
                            <input className="infoCard" value={this.state.payoutVal.toFixed(3)} onChange={this.handlePayoutVal} />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3} className="diceInfo">
                            <p>Profit (SLSH)</p>
                            <input className="infoCard" value={this.state.profit.toFixed(3)} />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3} className="diceBtn1">
                            <button onClick = {this.amountDivision}>1/2</button>
                            <button onClick = {this.amountDouble}>2x</button>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3} className="diceBtn1">
                            <button onClick = {this.minHigher}>Min</button>
                            <button onClick = {this.maxHigher}>Max</button>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} className="diceBtn3">
                            <button onClick = {this.onBet}>BET</button>
                        </Grid>
                    </Grid>
                    
                    <Grid container spacing={3} className="diceGrid levelGrid" justify="center">
                        <Grid container>
                            <Grid item md={3} sm={3} xs={3} className="lower">
                                LOWER
                            </Grid>
                            <Grid item md={9} xs={9} sm={9}className="higher">
                                HIGHER
                            </Grid>
                            <Grid item md={12} xs={12} sm={12} >
                                <PayoutSlide valueLabelDisplay="auto" aria-label="pretto slider" value={this.state.higherVal, this.state.higherVal} onChange={this.handleHigher} min={0} max={10000} step={1}/>
                            </Grid>
                        </Grid>
                        <HigherSlide valueLabelDisplay="auto" aria-label="pretto slider" value={this.state.result, this.state.result} min={0} max={10000}/>
                        <p className="progressTitle">{`Result : ${this.state.result} >= ${this.state.higherVal}`}</p>
                    </Grid>
                    
                    <Grid container spacing={3} className="autoGrid" justify="center">
                        <Grid item xs={12} sm={12} md={12}>
                            <button type="button" className="playBtn autoBtn" style={style2}>Go to Automatic Bets</button>
                        </Grid>
                    </Grid>
                    
                    <Grid container spacing={3} className="diceGrid-table-top resultGrid" justify="center">
                        <Grid item md={9} sm={12} xs={12} >
                            <Grid container>
                                <Grid item md={6} sm={12} xs={12} className="winorlose">
                                    <p>Stop On Loss (unlimited)</p>
                                    <input type="text" className="unlimitedText" defaultValue="10" value = {this.state.stopOnLoss} onChange = {this.handleOnLoss}/>
                                    <p>On Win</p>
                                    <div className="winloseBtn">
                                        <button className="groupBtn reset1" onClick = {()=>this.setState({stopOnLoss: 10})}>Reset</button>
                                        <button className="groupBtn increase1" onClick = {()=>this.setState({stopOnLoss: Number(this.state.stopOnLoss)})}>Increase</button>
                                    </div>
                                </Grid>
                                <Grid item md={6} sm={12} xs={12} className="winorlose">
                                    <p>Stop On Profit (unlimited)</p>
                                    <input type="text" className="unlimitedText" defaultValue="10" value = {this.state.stopOnProfit} onChange = {this.handleOnProfit}/>
                                    <p>On Lose</p>
                                    <div className="winloseBtn">
                                        <button className="groupBtn reset2" onClick = {()=>this.setState({stopOnProfit: 10})}>Reset</button>
                                        <button className="groupBtn increase2" onClick = {()=>this.setState({stopOnProfit: Number(this.state.stopOnProfit)+1})}>Increase</button>
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item md={3} sm={12} xs={12}>
                            <Grid container>
                                <Grid item md={12} sm={12} xs={12}>
                                    <button type="button" className="startBtn" style={style2} onClick = {this.handleAutoBet}>{this.state.autoFlag?"stop":"start"}</button>
                                </Grid>
                                <Grid item md={12} sm={12} xs={12}>
                                    <div className = "x-classic-betting-state">
                                        {this.state.totalProfit}
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
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
  
export default DiceLL;
