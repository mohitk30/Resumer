import React from 'react';
import resumeimg from './assets/resumePensil.png'
import { Link } from 'react-router-dom';
import './Style.css';
import Button from '@mui/material/Button';


function Homebasic(props) {

    return ( <
        div className = "Basic-home-cont" > <
        div className = "left-text-cont" >

        <
        div className = "Main-text-home" >
        We are ready to < div > < /div> build your<div></div > <
        span className = "resume-diggerent-color" > Resume. < /span >< br / > < div className = "small-underline" > < /div > < /
        div > <
        div className = "left-small-text" >
        Get your awesome resume Ready with us. <
        /div>

        <
        div className = "home-button-to-builder" > <
        Link to = "/resumer"
        style = {
            { textDecoration: 'none' }
        } > < div className = "home-button-to-builder-but" >
        Build Resume < /div> < /Link > < /
        div >


        <
        div className = "below-button-div" >
        <
        Button variant = "contained"
        className = "" > No Signup Required < /Button> <
        Button variant = "contained"
        className = "buttons-infos" > No Email Required < /Button> < /
        div >


        <
        /div >  <
        div className = "right-image-cont" >
        <
        img src = { resumeimg }
        className = "home-image"
        alt = "Home path pic" / > < /div> < /
        div >
    );
}

export default Homebasic;