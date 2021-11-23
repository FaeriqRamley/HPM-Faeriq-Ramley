import React from 'react';
import {Link} from 'react-router-dom';

function NavbarComponent() {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand">Hendricks Corp</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link class='nav-link' to='/'>Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class='nav-link' to='/dashboard'>Dashboard</Link>
                        </li>
                    </ul>
                    <ul class='navbar-nav'>
                        <li class='nav-item'>
                            <Link class='nav-link' to='/login'>Login</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavbarComponent
