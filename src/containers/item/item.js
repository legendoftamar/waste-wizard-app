import React, {Component} from 'react';
import { connect } from 'react-redux';
import { favorite, unfavorite } from '../../actions/index.js'
import  Parser from 'html-react-parser';
import {bindActionCreators} from 'redux';

  class WasteItem extends Component {

    isInFavorites(item) {
        var favorited = "false";
        this.props.favorites.favorites.forEach(element => {
            if(element.title == item.title){
                favorited = "true";
            } });

            return favorited;
    }

    renderStar() {

            if ((this.isInFavorites(this.props.item))== "true") {

        return(

          <div class = "favorited" onClick = {() => this.props.unfavorite(this.props.item.title, this.props.item.body)} > &#9733; </div>

        ) }

        return (
            <div class = "notFavorited" onClick = {() => this.props.favorite(this.props.item.title, this.props.item.body)} > &#9733; </div>
        )

}

    //display data

      render(){
                return(
        
                  <tr>
                  <td class = "star"> {this.renderStar()} </td>
                  <td class = "item-title"> {this.props.item.title} </td>  
                  <td> {Parser(Parser(this.props.item.body))} </td>
                  
                  </tr>
        
                ) 
    }
}
 
  function mapStateToProps(state){
      return {
        waste: state.waste,
        search: state.search,
        favorites: state.favorites
    }
  }

  function matchDispatchToProps(dispatch){
    return bindActionCreators({favorite: favorite, unfavorite: unfavorite}, dispatch);
}



export default connect(mapStateToProps, matchDispatchToProps)(WasteItem);
