import React, { Component } from 'react';

class UserItem extends Component {
    state = {
        id: 'id',
        login: 'mojombo',
        avatar: "https://avatars0.githubusercontent.com/u/1?v=4",
        html_url: "https://github.com/mojombo"
    }

    render() {

        const {avatar, login, html_url} = this.state;
        return (
            <div className="card text-center">
                <img
                    src={avatar}
                    className="round-img"
                    alt="user profile"
                    style={{ width: '60px' }}
                />
                <h3>{login}</h3>
                <div>
                    <a className="btn btn-dark btn-sm my-1" href={html_url}>More</a>
                </div>
            </div>
        )
    }
}

export default UserItem;