import React, { Component } from 'react';
import Button from './button';
import InputForm from './userInput';
// import ImageDiv from './imageDiv';
import './App.css';


class App extends Component {
  state = {
    seconds: 0,
    countdown: false
  };

  countdownIntervalSec = 0;

  addTime = () => {   
    let newSec = this.state.seconds - 1;
    if (newSec === 0) {
      console.log("Time's up!");
      this.setState({
        countdown: true
      });
      clearInterval(this.countdownIntervalSec);
    }
   
    this.setState({
      seconds: newSec 
      // countdown: true   
    });
  };

  handleChange = (e) => {
    const newValue = e.target.value;
    this.setState({
      seconds: newValue
    })
  }

  startTimerSec = () => {
    clearInterval(this.countdownIntervalSec);
    this.countdownIntervalSec = setInterval(this.addTime, 1000); 
  }

  stopTimer = () => {
    clearInterval(this.countdownIntervalSec);
  }

  resetTimer = () => {
    clearInterval(this.countdownIntervalSec);

    this.setState({
      seconds: 0,
      countdown: false    
    });
  }

  render() {
    const { seconds, countdown } = this.state;
    let showImage = 'image-style';
    if(seconds === 0 && countdown === true) {
      showImage += ' show';
    } else {
      showImage = 'imageStyle';
    }


    return (
      <div className="App">
        <div className="image-time-wrap">
          <h1>Timer</h1>
          <p>Time Remaining: {seconds}</p>  
        </div> 
        <div className="whatThe">  
          <InputForm initialValue={this.state.seconds} handleChange={(e) => this.handleChange(e)}/>
        </div> 
        <div className="button-wrap">
          <Button clickHandler={this.startTimerSec} name={"Start"}/>
          <Button clickHandler={this.stopTimer} name={"Stop"}/>
          <Button clickHandler={this.resetTimer} name={"Reset"}/>
        </div>
        <div className="image-wrap">
          <div className={showImage}></div>
        </div>
      </div>
    );
  }
}

export default App;
