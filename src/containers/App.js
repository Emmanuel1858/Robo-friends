import React, { Component } from 'react'
import CardList from '../components/CardList'
import { robots } from '../robots'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import './App.css'



class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchField: ''
        }

    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(users => {})
        
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value })


    }
    render() {
        const {robots, searchField} = this.state
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })
        
            return (
                <div className='tc'>
                    <h1>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}></SearchBox>
                    <Scroll>
                    <CardList robots={filteredRobots} />
                    </Scroll>
                </div>
            )
        
        
    }

}

export default App; 