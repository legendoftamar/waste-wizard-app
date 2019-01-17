import React, { Component } from 'react';
import { connect } from 'react-redux';
import { search } from '../actions/index.js';
import { bindActionCreators } from 'redux';
import { Icon } from '@shopify/polaris';

class SearchBar extends Component {

  handleSubmit(event) {
    this.props.search(this.refs.input.value);
    event.preventDefault();
  }

  handleChange(event) {
    if (!this.refs.input.value) {
      this.props.search("&&&");
    }
  }

  //display data
  render() {

    if (this.props.waste != null && typeof this.props.waste.waste != "undefined") {
      return (

        <div class="search-bar">

          <form>
            <input class="search-input" type="text" name="search" ref="input" onChange={this.handleChange.bind(this)} />
            <button type="submit" onClick={this.handleSubmit.bind(this)}> <Icon color="white" source="search" /> </button>
          </form>

        </div>

      )
    }

    else return (<p> </p>)

  }

}

function mapStateToProps(state) {
  return {
    waste: state.waste
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ search: search }, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(SearchBar);
