import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWasteRequest, fetchWasteSuccess, fetchWasteError } from '../actions/index.js'
import WasteItem from './item/item';

class SearchResult extends Component {

    //fetch all data before rendering component
    componentDidMount() {
        this.props.fetchWasteWithRedux()
    }

    //filter data based on search 
    search(element, search) {
        if ((element.title).includes(search) || (element.body).includes(search) || (element.keywords).includes(search)) {

            return true;
        }

        return false;
    }

    //display data

    render() {

        if (!this.props.search) {
            return (<div> </div>);
        }
        return (

            <table>
                {
                    this.props.waste.waste.map((waste) => {

                        if (this.search(waste, this.props.search.search))

                            return (

                                //for each item in data based on search results, render a WasteItem
                                <WasteItem item={waste}> </WasteItem>

                            )
                    })
                }
            </table>
        );
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

//fetch data with Redux
function fetchWasteWithRedux() {
    return (dispatch) => {
        dispatch(fetchWasteRequest());
        return fetchWaste().then(([response, json]) => {
            if (response.status === 200) {
                // if success, fetch json
                dispatch(fetchWasteSuccess(json))
            }
            else {
                dispatch(fetchWasteError())
            }
        })
    }
}

//fetch data 
function fetchWaste() {
    const URL = "https://secure.toronto.ca/cc_sr_v1/data/swm_waste_wizard_APR?limit=1000";
    return fetch(URL, { method: 'GET' })
        .then(response => Promise.all([response, response.json()]));
}

//connect component to states and actions
export default connect(mapStateToProps, { fetchWasteWithRedux })(SearchResult);