import React, { Component } from "react";
import { connect } from "react-redux";
import WasteItem from "./item/item";

/*
 * We need "if(!this.props.user)" because we set state to null by default
 * */

class Favorites extends Component {

    render() {
        if (typeof this.props.favorites.favorites[0] != "undefined") {
            return (

                <div class="favorites">

                    <h2> Favorites </h2>

                    <table>
                        {
                            this.props.favorites.favorites.map((favorite) => {

                                return (

                                    <WasteItem item={favorite}> </WasteItem>

                                )
                            })
                        }
                    </table>

                </div>
            );

        }

        else {
            return (<div></div>)
        }
    }
}

// "state.activeUser" is set in reducers/index.js
function mapStateToProps(state) {
    return {
        favorites: state.favorites
    };
}

export default connect(mapStateToProps)(Favorites);