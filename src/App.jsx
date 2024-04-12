import React from 'react';
import './App.css';

import Cookies from './assets/cookie.png';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    counter : 0,
    };
  }

  handleClick2 = () => {
    this.setState({
      counter : this.state.counter + 1,
    });
  };

  render() {
     return (
     <div className='container'>
      <h1>Counter: {this.state.counter}</h1>
      <div className='cookies-wrapper'>
       <img src={Cookies} onClick={this.handleClick2}/>
      </div>
       {/* <button>Click</button> */}
     </div>
     );
  }
}
export default App;