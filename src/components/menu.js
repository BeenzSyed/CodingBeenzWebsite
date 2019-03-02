import React from 'react'
import { Link } from "gatsby"

import './menu.css';

const Menu = () => (
        <div>
            <ul>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/">Home</Link></li>
            </ul>
        </div>
)

export default Menu;