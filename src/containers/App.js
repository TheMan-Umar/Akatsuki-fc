import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import { robots } from '../robots';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';  
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots:robots,
            searchfield: ''
        }
    }

//API instead of robots file if requires

    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(response=> response.json())
    //     return (
    //     (users => this.setState({ robots: users }))
    //     )
    // }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {
        const  { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
       return !robots.length ?
            <h1 className= 'Network'>Check your internet connection</h1> :
            (
            <div className='tc'>
                <h1 className='f2'>Akatsuki fc</h1> 
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots} />
                    </ErrorBoundry>
                </Scroll>        
            </div>
        )

    };
}
    

export default App;