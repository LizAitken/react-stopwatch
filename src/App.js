import React, { Component } from 'react';
import Button from './button';
import InputForm from './userInput';
import ImageDiv from './imageDiv';
import './App.css';


class App extends Component {
  state = {
    seconds: 0,
    image: []
  };

  countdownIntervalSec = 0;

  addTime = () => {   
    let newSec = this.state.seconds - 1;
    const images = ImageDiv();

    if (newSec === 0) {
      console.log("Time's up!");
      clearInterval(this.countdownIntervalSec);
    }
   
    this.setState({
      seconds: newSec,
      image: images    
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
      seconds: 0     
    });
  }

  render() {
    const { seconds, images } = this.state;

    return (
      <div className="App">
        <div className="image-time-wrap">
          {/* <div className="image-style" {images.src}></div> */}
          <h1>Timer</h1>
          <p>Time Remaining: {seconds}</p> 
        </div>      
        <div className="button-wrap">
          <Button clickHandler={this.startTimerSec} name={"Start Timer"}/>
          <Button clickHandler={this.stopTimer} name={"Stop Timer"}/>
          <Button clickHandler={this.resetTimer} name={"Reset Timer"}/>
          <InputForm initialValue={this.state.seconds} handleChange={(e) => this.handleChange(e)}/>
        </div>
      </div>
    );
  }
}

export default App;
