import React, {Component} from 'react';
import {connect} from 'react-redux';


function fetchPostsRequest(){
    return {
      type: "FETCH_REQUEST"
    }
  }
  
  function fetchPostsSuccess(payload) {
    return {
      type: "FETCH_SUCCESS",
      payload
    }
  }
  
  function fetchPostsError() {
    return {
      type: "FETCH_ERROR"
    }
  }
  
  function fetchPostsWithRedux() {
      return (dispatch) => {
        dispatch(fetchPostsRequest());
      return fetchPosts().then(([response, json]) =>{
          if(response.status === 200){
            dispatch(fetchPostsSuccess(json))
        }
        else{
            dispatch(fetchPostsError())
        }
      })
    }
  }
  
  function fetchPosts() {
    const URL = "https://secure.toronto.ca/cc_sr_v1/data/swm_waste_wizard_APR?limit=1000";
    return fetch(URL, { method: 'GET'})
       .then( response => Promise.all([response, response.json() ]) );
  }
  
  class UserList extends Component {

      componentDidMount(){
        this.props.fetchPostsWithRedux()
    }
    
      render(){

          if(this.props.waste != null && typeof this.props.waste.waste != "undefined" && this.props.waste.waste.length >= 1) { return (
              <ul>
                  {
               
            this.props.waste.waste.map((waste) =>{
                return(
                  <li>{waste.title}</li>
              )
            })
          }
          </ul>
      )}
      else return ( <h1> akh. </h1>)
    }
  }
  
  
  function mapStateToProps(state){
      return {
        waste: state.waste
    }
  }
  

export default connect(mapStateToProps, {fetchPostsWithRedux})(UserList);
