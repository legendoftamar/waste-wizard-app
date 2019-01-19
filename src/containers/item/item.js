import React, { Component } from 'react';
import { connect } from 'react-redux';
import { favorite, unfavorite } from '../../actions/index.js'
import Parser from 'html-react-parser';
import { bindActionCreators } from 'redux';

class WasteItem extends Component {

    //determines if item is favorited
    isInFavorites(item) {
        var favorited = "false";
        this.props.favorites.favorites.forEach(element => {
            if (element.title === item.title) {
                favorited = "true";
            }
        });

        return favorited;
    }

    renderStar() {

        // if favorited, return green star
        if ((this.isInFavorites(this.props.item)) === "true") {

            return (

                <div className="favorited" onClick={() => this.props.unfavorite(this.props.item.title, this.props.item.body)} > &#9733; </div>

            )
        }

        //if not, return grey star
        return (
            <div className="notFavorited" onClick={() => this.props.favorite(this.props.item.title, this.props.item.body)} > &#9733; </div>
        )

    }

    //display data

    render() {
        return (

            <tr>
                <td className="star"> {this.renderStar()} </td>
                <td className="item-title"> {this.props.item.title} </td>
                <td> {Parser(Parser(this.props.item.body))} </td>

            </tr>

        )
    }
}

//use states as props
function mapStateToProps(state) {
    return {
        waste: state.waste,
        search: state.search,
        favorites: state.favorites
    }
}

// use actions as props
function matchDispatchToProps(dispatch) {
    return bindActionCreators({ favorite: favorite, unfavorite: unfavorite }, dispatch);
}

//connect component to states and actions
export default connect(mapStateToProps, matchDispatchToProps)(WasteItem);
