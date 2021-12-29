import React from 'react';
import './Style.css';
import { Link } from 'react-router-dom';

function Navbar(props) {
    const githubLink = "https://github.com/mohitk30";
    return ( <
        div className = "nav-bar" >
        <
        div className = "Site-name" >
        Resumer < /div>

        <
        div className = "Link-to-builder" > <
        Link to = "/resumer"
        style = {
            { textDecoration: 'none' }
        } > < span className = "Link-to-builder-span" >
        Build Resume < /span> < /Link > <
        a href = { githubLink }
        style = {
            { textDecoration: 'none' }
        } > < span className = "Link-to-builder-span" >
        Contribute < /span> < /a > < /div >  < /
        div >
    );
}

export default Navbar;