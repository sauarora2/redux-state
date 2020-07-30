import './mystyle.css';

import PropTypes from "prop-types";
import React from 'react'
import ResultCard from './ResultCard'
import Search from './Search'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class App extends React.Component {

  render() {
    return  (
    <div>
      <Search dispatch ={this.props.dispatch}/>
      <ResultCard searchresults={this.props.searchresults}/>
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
