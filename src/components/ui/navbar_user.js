import React, { Component } from 'react';

import './navbar_user.css';

class NavbarUser extends Component {
    render() {
        return(
            <div>
            <p>Authenticated</p>
            <div>
                {this.state.user.email}
            </div>
            <div>
                <button onClick={this.logout} className="button">
                    Log out
                </button>
            </div>
        </div>
        );
    }
}

export default NavbarUser;
