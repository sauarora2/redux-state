import './mystyle.css';

import React, { Component } from 'react';

import actions from '../redux/actions';

class Search extends Component {
    state = {
        query: '',
        data: [],
    }

    handleInputChange = () => {
        this.setState({
            query: this.search.value
        })
    }

    getData = () => {
        fetch(`https://wamo2020hacksearch.azurewebsites.net/api/SearchAPI?code=af4Xq4r1xkLGch8A6RJR4n6RyEWnAHhF6PZ0qgL6Unrjo09kgB4cfg==&search=` + this.state.query)
        .then(response => response.json())
        .then(responseData => {
            console.log(responseData)
            this.setState({
                data:responseData
            })
            console.log(this.state)
            this.props.dispatch(actions.addTodo(this.state.data))
        })
    }

    handleSubmit = () => {
        event.preventDefault()
        this.getData();        
      }
    render() {
        return (
            <div id="cover">
                <form onSubmit={() => {
                event.preventDefault();
                this.handleSubmit;
                }}>
                    <div class="tb">
                    <div class="td">
                <input type="search" id="filter" placeholder="Search for..." 
                ref={input => this.search = input} onChange={this.handleInputChange}/>
                </div>
                <div class="td" id="s-cover">
                <button onClick={this.handleSubmit}>
                <div id="s-circle"></div>
                <span></span>
                </button>
                </div>
                </div>
                </form>    
                
            </div>
        )
    }
}


export default Search;