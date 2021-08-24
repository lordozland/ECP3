// Here Baby!!!!  ;]

// https://www.youtube.com/watch?v=YK-jXrsK3JU

import React, { Component } from React
import './App.css';
import 'materialize-css';


export class Navbar extends Component {
    render() {
        return (
            <div>
                <nav>
                    <div class="nav-wrapper">
                    <a href="#" class="brand-logo center">Logo</a>
                    <ul id="nav-mobile" class="left hide-on-med-and-down">
                    <li><a href="sass.html">Sass</a></li>
                    <li><a href="badges.html">Components</a></li>
                    <li><a href="collapsible.html">JavaScript</a></li>
                    </ul>
                    </div>
                </nav>
            </div>
        )
    }
}


export default Navbar