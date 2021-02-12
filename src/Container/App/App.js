// Containers are use to store component with no pure function(that is it store state component/class)

import React from 'react';
import CardList from "../../Component/CardList/CardList";
import SearchBox from "../../Component/SearchBox/SearchBox";
import Scroll from "../../Component/Scroll/Scroll";
import ErrorBoundary from "../../Component/ErrorBoundary/ErrorBoundary";

import { robots } from "../../robots"; // we want to use api to generate name,email and id for our robot
import "./App.css";




 

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      robots: [],
      searchfield: ''
    }

    this.onSearchCange = this.onSearchCange.bind(this);
    this.displayRobot = this.displayRobot.bind(this);
  }

  componentDidMount() {
      // this.setState({robots: robots});
      
    // fetch fake users from jsonplaceholder API
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({robots: users}));
  }

   // to avoid binding us arrow func
  //  onSearchCange = (event) => {
  //   this.setState({searchfield: event.target.value})
  //   // console.log(event.target.value);
  // }

  onSearchCange(event) {
    this.setState({searchfield: event.target.value});
    // console.log(event.target.value);
  }
 
  displayRobot() {
    const filteredRobots = this.state.robots.filter(robot => {
      // when convert what as typed to lower case to match the names(not necessary)
      // if the name type is the same/include the one in the searchfield pass that to the filtered robot
      // then display the filtered ones
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })

    return filteredRobots;
  }

  render () {
    // <CardList robots={filteredRobots} />
    // const filteredRobots = this.state.robots.filter(robot => {
    //   // when convert what as typed to lower case to match the names(not necessary)
    //   // if the name type is the same/include the one in the searchfield pass that to the filtered robot
    //   // then display the filtered ones
    //   return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    // })

    const { robots } = this.state;

    return robots.length === 0 ?
      // if it taking time to fetch users //check the available users/robots number
       <h1 className="tc">Loading</h1> : (
        <div className="tc">
          <h1 className="f1">Robofriends</h1>
          <SearchBox searchChange={this.onSearchCange} />
          <Scroll> {/* child component: Scroll here is a wrapping */}
            {/* on the first loading it will display all the robot but on search the filtered one */}
            <ErrorBoundary>
              <CardList robots={this.displayRobot()} />
            </ErrorBoundary>  
          </Scroll>
        </div>
      );

 }

// INCASE U WANT A DELAYED TIMER
  // componentDidMount() {
  //   // fetch fake users from jsonplaceholder API
  //   this.intervalId = setInterval(() => {
  //     fetch('https://jsonplaceholder.typicode.com/users')
  //   .then(response => response.json())
  //   .then(users => this.setState({robots: users}));
  //   }, 100)
  // }
 }
 

export default App;
