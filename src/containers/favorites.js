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

// use state as props
function mapStateToProps(state) {
    return {
        favorites: state.favorites
    };
}

//connect component to states and actions
export default connect(mapStateToProps)(Favorites);