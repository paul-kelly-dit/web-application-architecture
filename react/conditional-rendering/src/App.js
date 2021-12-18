import React from 'react';

class UserAccess extends React.Component { // Declaring the UserAccess class
    constructor(props) { // Defining the class constructor
        super(props);
        this.state = {
            //Setting initial class for user as logged out
            isLoggedIn: false,
        }
    }

    //Defining method to update used login status
    updateUserState = () => {
        this.setState((state) => {
            return {
                // Updating login status
                isLoggedIn: !state.isLoggedIn,
            };
        });
    }

    render() {
        return (
            <div>
                <button type="button" onClick={this.updateUserState}> Change user state </button>
                <div>User state: { this.state.isLoggedIn.toString() }</div>
                { (this.state.isLoggedIn && <div>Welcome back</div>) || <div>Please login to continue</div> }
            </div>
        );
    }
}

export default class App extends React.Component {
    render() {
        return (
            <UserAccess />
        );
    }
}