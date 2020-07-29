import PropTypes from "prop-types";
import React from 'react'
import RecipeReviewCard from './RecipeReviewCard'
import Search from './Search'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './mystyle.css';

class App extends React.Component {

  render() {
    return  (
    <div>
      <Search dispatch ={this.props.dispatch}/>
      <RecipeReviewCard searchresults={this.props.searchresults}/>
    </div>
    )
    
  }
}

function mapStateToProps(state) {
  return  {
    searchresults: state.searchresults
  }
}
export default connect(mapStateToProps)(App)
