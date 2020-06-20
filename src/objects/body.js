import React, { useState, useEffect } from 'react';
import "./body.css"

class Body extends React.Component{
    
    constructor(){
        super()

        this.onClickNext = this.onClickNext.bind(this)

        const image1 = require('../images/forest.jpg');
        const image2 = require('../images/waterfall.jpg');
        const image3 = require('../images/hawai.jpg');
        const image4 = require('../images/river.jpg');
        const image5 = require('../images/bonfire.jpg');

        this.state = {
            index: 0,
            imageList: [image1, image2, image3, image4, image5]
        }
    }

    onClickNext(){
        const min = 0;
        const max = 4;
        if(this.state.index + 1 == 5)
            this.setState({index: 0})
        else
            this.setState({index: this.state.index + 1})
    }

    render(){
        return(
            <div id="body">
                <img src={this.state.imageList[this.state.index]} alt={this.state.imageList[this.state.index]}></img>
                <div id="textDiv">
                    <p>{this.state.imageList[this.state.index].replace(/^.*[\\\/]/, '').split(".")[0]}</p>
                </div>
                <button onClick = {this.onClickNext}></button>
            </div>
        );
    }
}


export default Body;