import React from 'react';
import {Link} from 'react-router-dom';

function NavbarComponent() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand">Hendricks Corp</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className='nav-link' to='/'>Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link className='nav-link' to='/dashboard'>Dashboard</Link>
                        </li>
                    </ul>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <Link className='nav-link' to='/login'>Login</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavbarComponent
