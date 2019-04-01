import React from 'react'
import { Link } from "gatsby"


const Menu = () => (
        <div class="menu">
            <ul>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/uses">Setup</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </div>
)

export default Menu;