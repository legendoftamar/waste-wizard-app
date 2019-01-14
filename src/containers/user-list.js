import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectUser} from '../actions/index'


class UserList extends Component {

    renderList() {
        return this.props.users.map((user) => {
            return (
                <li key= {user.id} 
                onClick={() => this.props.selectUser(user)} >
                    {user.name}
                </li>
            );
        });
    }

    render() {
        return (
            <ul>
                {this.renderList()}
            </ul>
        );
    }

}

// Get actions and pass them as props to to UserList
//      > now UserList has this.props.selectUser
function matchDispatchToProps(dispatch){
    return bindActionCreators({selectUser: selectUser}, dispatch);
}

// Get apps state and pass it as props to UserList
// whenever state changes, the UserList will automatically re-render
function mapStateToProps(state) {
    return {
        users: state.users
    };
}

export default connect(mapStateToProps, matchDispatchToProps)(UserList);