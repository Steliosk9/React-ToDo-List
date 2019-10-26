import React, {Component} from 'react';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component{

  state = {
    username:"Superstelios"
  }

render() {
return (
  <div>
  <UserInput/>
  <UserInput/>
  <UserInput/>
  <UserOutput username={this.name.username}/>
  <UserOutput username="max"/>
  </div>
);
  }
}


export default App;
