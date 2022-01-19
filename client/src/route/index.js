import React from 'react';
import { BrowserRouter ,HashRouter, Route } from 'react-router-dom'
import Dashboard from '../pages/dashboard';
import ClassicDice from '../pages/classic_dice';
import DiceLL from '../pages/dice_ll';
import Farming from '../pages/farming';
import Careful from '../pages/careful';
import Referral from '../pages/referral';
import Dividend from '../pages/dividend';
import ReferralDice from '../pages/referral_dice';


const routes = () => (
  <HashRouter>
    <Route exact path="/" component={(Dashboard)} />
    <Route exact path="/classic-dice" component={(ClassicDice)} />
    <Route exact path="/dice-ii" component={(DiceLL)} />
    <Route exact path="/dice-ii-2" component={(Farming)} />
    <Route exact path="/be-careful" component={(Careful)} />
    <Route exact path="/referral" component={(Referral)} />
    <Route exact path="/dividend" component={(Dividend)} />
    <Route exact path="/dice/:id" component={(ReferralDice)} />
  </HashRouter>
)

export default routes;
