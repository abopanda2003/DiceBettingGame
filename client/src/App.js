import React, {useEffect, useState} from 'react';
import '../src/assets/css/bootstrap.min.css';
import './App.css';
import Router from './route';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

function App() {
  const [open, setOpen] = useState(false);
  useEffect( async ()=>{
    if (window.ethereum) {
      window.ethereum.on('chainChanged', (chainId) => {
        window.location.reload();
      });
    const chainId = await window.ethereum.request({ method: 'eth_chainId' });
    console.log(chainId);
    if(chainId==="0x38")
    setOpen(false);
    else
    setOpen(true);
    }
  }
  )

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  return (
    <div className="App">
    <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"chain error"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Please set your chain to smart chain
          </DialogContentText>
        </DialogContent>
      </Dialog>
      <Router />
    </div>
  );
}

export default App;
