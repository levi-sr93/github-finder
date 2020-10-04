import React from 'react';

import PropTypes from 'prop-types'

const UserItem = ({user: { avatar_url, login, html_url }}) => {

    return (
        <div className="card text-center">
            <img
                src={avatar_url}
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

UserItem.protoTypes = {
    user: PropTypes.object.isRequired
}

export default UserItem;