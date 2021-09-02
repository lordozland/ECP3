// Here Baby 2.0.1!!!

import React from 'react';
import { Component } from 'react';
import 'materialize-css';


export class Navbar extends Component {
    render() {
        return (
            <div>
                <nav class="nav-extended black">
                    <div class="nav-wrapper">
                    <a href="/" class="brand-logo center">Equinox Crest Productions</a>
                    </div>
                    <div class="nav-content">
                    <ul class="tabs tabs-transparent center">
                        <li class="tab"><a href="/life">Life</a></li>
                        <li class="tab"><a href="/sound">Sound</a></li>
                        <li class="tab"><a href="/design">Design</a></li>
                        <li class="tab"><a href="/company">Company</a></li>
                        <li class="tab"><a href="/gaming">Gaming</a></li>
                    </ul>
                    </div>
                </nav>
            </div>
        )
    }
};

export default Navbar;