import React from 'react';
import { Grid, Hidden } from '@material-ui/core';
import LiveTable from '../components/LiveTable';
import {Header, socket} from '../components/Header';
import Footer from '../components/Footer';
import backgroundImg from '../assets/img/background.png';
import dice1 from '../assets/img/dice1.png';
import dice2 from '../assets/img/dice2.png';
import dice3 from '../assets/img/dice3.png';
import dice4 from '../assets/img/dice4.png';
import effect from '../assets/img/effect.png';
import dicePink from '../assets/img/dice_pink.png'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import referalHuman from '../assets/img/referral_human.png';
import ReferralCard from '../components/referal_card';
import lampImage from '../assets/img/lamp.png';
import ReferralTable from '../components/referral_table';
import Axios from 'axios';

import Web3 from 'web3';
import Abi from '../assets/abi/abi.json';

const EthereumTx = require('ethereumjs-tx');

var web3 = new Web3();
  var tokenAddress = "0xf76e1b7ff23b462bf9f0562dcf7929c032c84ffb";
  var myContract = new web3.eth.Contract(Abi, tokenAddress);
  var gasLimitHex = web3.utils.toHex(90000);


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
            payoutVal: 1.985,
            publicKey: '',
            widthFlag: false,
            ReferralAmount: 0
        }
    }

    componentDidMount(){
        if(window.ethereum){
            this.setState({publicKey: window.ethereum.selectedAddress})
        }
        if(window.innerWidth<=600){
            this.setState({widthFlag: true})
        }

        Axios({
            method: "POST",
            url: "http://localhost:5000/api/referral/get-referral-amount",
            data: {
                publicKey: window.ethereum.selectedAddress
            }
        }).then((res)=>{
            console.log(res.data);
            try{
            if(res.data.amount)
            this.setState({ReferralAmount: res.data.amount})
            else
            this.setState({ReferralAmount: 0})
            }
            catch(error){
                console.log(error)
            }
        })

        // Axios({
        //     method: "POST",
        //     url: "http://localhost:5000/api/referral/get-bid-history",
        //     data: {
        //         publicKey: window.ethereum.selectedAddress
        //     }
        // }).then((res)=>{
        //     console.log(res.data);
        //     try{
        //         if(res.data.amount)
        //             this.setState({ReferralAmount: res.data.amount})
        //         else this.setState({ReferralAmount: 0})
        //     }
        //     catch(error){
        //         console.log(error)
        //     }
        // })

    }

    withdraw = async () =>{
        if(this.state.ReferralAmount){
        if (window.ethereum) {
            const adminPrivateKey = "0x2e16e7f903f4ff5a1518c5549d7ccfa5235ea4555c7e75c56a71c2dae9811cde";
            const adminPublicKey = "0x413EBD57EbA0f200ed592c31E7dB6119C92A7973";
            var web3 = new Web3(new Web3.providers.HttpProvider("https://bsc-dataseed.binance.org/"));
            
            var amount = this.state.ReferralAmount;
    
    // transaction
            let data =await myContract.methods.transfer(window.ethereum.selectedAddress, web3.utils.toHex(web3.utils.toWei(amount.toString()))).encodeABI();

            // transection
            web3.eth.getTransactionCount(adminPublicKey).then(function (lastCountOfTransaction) {
            console.log(data);
            var txdetail = {
                "nonce":'0x' + lastCountOfTransaction.toString(16),
                "to": tokenAddress,
                "value": web3.utils.toHex(web3.utils.toWei("0")),
                "gas": gasLimitHex,
                "gasPrice": web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
                "data":data
            }

            const privateKey1Buffer = new Buffer.from(adminPrivateKey.slice(2), 'hex')

            console.log("privateKey1Buffer : ", privateKey1Buffer);
            const transaction = new EthereumTx(txdetail);
            transaction.sign(privateKey1Buffer);
            const serializedTransaction = transaction.serialize();
            
            console.log("serializedTransaction : ", serializedTransaction);
            try {
                web3.eth.sendSignedTransaction('0x' + serializedTransaction.toString('hex'))
                .on('confirmation', (res) => {
                     Axios({
                         method: "POST",
                         url: "http://localhost:5000/api/referral/withdraw",
                         data: {
                             publicKey: window.ethereum.selectedAddress
                         }
                     }).then((res)=>{
                        window.location.reload(); 
                     })
                    });
            }
            catch (e) {
                console.log("sendSignedTransaction error : ", e);
            }
            });
               
        }
    }
    }

    handleCopyLink = ()=>{
        navigator.clipboard.writeText(`https://playdice.xyz/#/dice/${this.state.publicKey}`);
      }

    render() {
        const style3 = {backgroundImage: "linear-gradient( to right,#f67d78 0%,#bf3d63 100% )" }
        const style2 = {backgroundImage: "linear-gradient( to right,#d30c90 0%,#7d02c6 100% )" }
        const cardTitle = "Referral!";
        return (
            <div style={rootStyle}>
                <Header></Header>
                <Hidden smDown>
                <Grid container spacing={3} className="diceGrid" justify="center">
                    <Grid item xs={12} sm={8} md={12} >
                        <div className="diceTitle" style={style3}>
                            {cardTitle}
                        </div>
                        
                    </Grid>
                </Grid>
                </Hidden>
                <div>
                    <img src = {referalHuman} alt = "referral_human" />
                </div>
                <Grid container spacing = {3} className = "diceGrid" justify='center'>
                    <Grid item xs={12} sm = {6} md = {6}>
                        <ReferralCard
                            title = "Earn" 
                            betTitle = "From Ref's Bets"
                            betValue = "0.1%"
                            miningTitle = "From Ref's mining"
                            miningValue = "5%"
                        />
                    </Grid>
                    <Grid item xs={12} sm = {6} md = {6}>
                        <ReferralCard 
                            title = "My Referrals" 
                            betTitle = "Count"
                            betValue = "0"
                            miningTitle = "Profit From Ref Bets"
                            miningValue = {this.state.ReferralAmount}
                        />
                    </Grid>
                </Grid>
                <div className = "x-nopadding-diceGrid text-right">
                    <button className = "x-referral-withdraw-button" style = {style2} onClick = {this.withdraw}>Withdraw</button>
                </div>
                <div className = "x-referal-link-title diceGrid">
                    <div className = "mb-2">
                        Your referal link
                    </div>
                    <div className  = "x-referal-link">
                        <span className = "float-left">{!this.state.widthFlag?`https://playdice.xyz/#/dice/${this.state.publicKey}`:`https://playdice.xyz/#/...`}</span>
                        <button className = "x-referal-link-copy-btn float-right" onClick = {this.handleCopyLink}>Copy</button>
                    </div>
                </div>
                <Grid container spacing={3} className="diceGrid" justify="center">
                    <Grid item xs={12} sm={12} md={12}>
                    <div className = "x-lamp"><img src = {lampImage} alt = "lamp" /></div>
                    <div className = "x-lamp x-font-normal-white" style = {{lineHeight: "50%"}}>How to Play</div>                  
                    </Grid>
                </Grid>
                <div container spacing={3} className="diceGrid x-farming-blog1" justify="center">
                    <Grid item xs={12} sm={12} md={12} className = "text-left x-display-flex">
                        <div className = "x-lamp">
                            <img src = {dicePink} alt = "dicepink" width='25px' />
                        </div>
                        <div className = "x-lamp x-font-normal-white2">
                            Share your referral links
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} className = "text-left x-display-flex">
                        <div className = "x-lamp">
                            <img src = {dicePink} alt = "dicepink" width='25px' />
                        </div>
                        <div className = "x-lamp x-font-normal-white2">
                            Recieve a lifetime reward of 0.1% SLSH from each bet made by your ref!
                        </div>
                    </Grid>
                </div>

                <Grid container spacing = {3} className = 'diceGrid' justify = "center">
                    <Grid item xs = {12} sm = {12} md = {12}>
                        <ReferralTable />
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
