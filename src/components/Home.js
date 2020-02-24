import { Component } from 'react';

class Home extends Component{
    login() {
        this.props.auth.login();
    }
    render() {
        const { isAuthenticated } = this.props.auth;
        if (isAuthenticated()) {
            return "You're logged in!"
        }
        return (
            "You're not logged in :("
        )
    }
}

export default Home;