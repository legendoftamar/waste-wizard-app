import React, { Component } from "react";
import { connect } from "react-redux";
import WasteItem from "./item/item";

class Favorites extends Component {

    render() {
        //destructure
        const { favorites } = this.props.favorites;

        if (typeof favorites[0] != "undefined") {
            return (

                <div className="favorites">

                    <h2> Favorites </h2>

                    <table>
                        <tbody>
                            {
                                favorites.map((favorite) => {

                                    return (

                                        <WasteItem key={favorite.title} item={favorite}> </WasteItem>

                                    )
                                })
                            }
                        </tbody>
                    </table>

                </div>
            );

        }

        else {
            return (null)
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
