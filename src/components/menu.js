import React from 'react'
import { Link } from "gatsby"

import './menu.css';

const Menu = () => (
        <div>
            <ul class="menu">
                <li class="menu-li"><Link to="/contact">Contact</Link></li>
                <li class="menu-li"><Link to="/uses">What I Use</Link></li>
                <li class="menu-li"><Link to="/blog">Blog</Link></li>
                <li class="menu-li"><Link to="/">Home</Link></li>
            </ul>
        </div>
)

export default Menu;