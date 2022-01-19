import React, { Component } from 'react';
// import '../App.css';
import cardBackground from '../assets/img/cardbackground.png';
import { withRouter } from 'react-router-dom';

var cardStyle = {
    width: "100%",
    backgroundImage: `url(${cardBackground})`,
    height: "100%",
};

class Card extends Component {

  handleClick(gameParams, cardTitle) {
    this.props.history.push(`/${gameParams}`, cardTitle);
  }

  render() {
    let { cardTitle, bodyTitle, bodyComment, btnTitle, cHeaderStyle, diceImg, gameParams } = this.props;

    return(
      <div className="playCard" style={cardStyle}>
        <div className="cardHeader" style={cHeaderStyle}>
            {cardTitle}
        </div>
        <div className="cardBody">
            <p>{bodyTitle}</p>
            <span>{bodyComment}</span>
            <button type="button" className="playBtn" style={cHeaderStyle} onClick={() => this.handleClick(gameParams, cardTitle)}>{btnTitle}</button>
        </div>
        <img src={diceImg} alt="diceImg"/>
      </div>
    );
  }
}

export default withRouter(Card);