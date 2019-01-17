import React, {Component} from 'react';
import { connect } from 'react-redux';
import { search } from '../actions/index.js';
import {bindActionCreators} from 'redux';
import { Icon, Button } from '@shopify/polaris';
    
  class SearchBar extends Component {

    searchInput() {
      this.props.search(this.refs.input.value);
    }
    
    //display data
      render(){

          if(this.props.waste != null && typeof this.props.waste.waste != "undefined") { return (

            <div class = "search-bar">

      <form>
          <input class = "search-input" type="text" name="search" placeholder = "Search..." ref = "input"/>
          <button type = "button" onClick={this.searchInput.bind(this)}> <Icon color="white" source="search"/> </button>
      </form>
      
          </div>
          
      )}

      else return ( <p> </p>)

    }
    
  }
 
  function mapStateToProps(state){
      return {
        waste: state.waste
    }
  }

function matchDispatchToProps(dispatch){
    return bindActionCreators({search: search}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(SearchBar);
