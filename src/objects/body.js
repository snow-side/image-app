import React, { useState, useEffect } from 'react';
import "./body.css"

import fjord from '../images/fjord.jpg';

const Body = () => {
	return(
		<div id="body">
            <img src={fjord} alt="fjord"></img>
            <div id="textDiv">
                <p>Milford Sound, New Zeland</p>
            </div>
		</div>
	);
}

export default Body;