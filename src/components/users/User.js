import React, { Component } from 'react'

class User extends Component {
    componentDidMount() {
        this.props.getUser(this.props.match.params.login) // we get this login from App.js line 83: <Route exact path='/user/:login'
    }
    render() {
        const {
            name,
            avatar_url,
            location,
            bio,
            blog,
            login,
            html_url,
            followers,
            following,
            public_repos,
            public_gists,
            hireable
        } = this.props.user;

        const { loading } = this.props;

        return (
            <div>
                {name}
            </div>
        )
    }
}

export default User
