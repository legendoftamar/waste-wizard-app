import React, { Component } from 'react';
import { connect } from 'react-redux';
import { search } from '../actions/index.js';
import { bindActionCreators } from 'redux';
import { Icon } from '@shopify/polaris';

class SearchBar extends Component {

  //prevent component from rerendering by default 
  handleSubmit(event) {
    this.props.search(this.refs.input.value);
    event.preventDefault();
  }

  //if search is cleared, then clear results
  handleChange(event) {
    if (!this.refs.input.value) {
      this.props.search("&&&");
    }
  }

  //display data
  render() {

    if (this.props.waste != null && typeof this.props.waste.waste != "undefined") {
      
      return (

        <div className="search-bar">

          <form>
            <input className="search-input" type="text" name="search" ref="input" onChange={this.handleChange.bind(this)} />
            <button type="submit" onClick={this.handleSubmit.bind(this)}> <Icon color="white" source="search" /> </button>
          </form>

        </div>

      )
    }

    else return (<p> </p>)

  }

}

//use state as prop
function mapStateToProps(state) {
  return {
    waste: state.waste
  }
}

//use actions as props
function matchDispatchToProps(dispatch) {
  return bindActionCreators({ search: search }, dispatch);
}

//connect component to states and actions
export default connect(mapStateToProps, matchDispatchToProps)(SearchBar);
