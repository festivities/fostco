import React, { Component } from 'react';

import RadioButtonGroup from '../common/RadioButtonGroup';

class Slawrence extends Component {

    constructor() {
        super();

        this.howToUse = "How To Use";
        this.betStats = "Win/Loss Statistics";

        this.state = {
            botPageDefault: this.setHowToUseText(),
            radioOptions: [this.howToUse, this.betStats]
        }
    }

    /*
    * Toggles How To Use text and Win/Loss Statistics text on radio button click
    */
    determineText = (option) => {
        if (this.howToUse === option) {
            this.setState({botPageDefault: this.setHowToUseText()});
        } else {
            this.setState({botPageDefault: this.setWinLossStatsText()});
        }
    }

    setHowToUseText = () => {
        return (
            <div className="box-content">
                <h3>Help Section</h3>
                <h5>General Info : </h5>
                <p>Use '@sb' or '@slawrence' for commands (case doesn't matter);</p>
                <h5>Definitions : </h5>
                <p>setter - person who made the bet</p>
                <p>taker - person who accepted the bet</p>
            </div>
        );
    }

    setWinLossStatsText = () => {
        return (
            null
        );
    }

    render() {
        let tempStyle = {fontSize: '36px'};

        return (
            <div className="content">
                <div className="Slawrence">
                    <div className="content-box">
                        <h1 style={tempStyle}>Slawrence Bot Page</h1>
                        <RadioButtonGroup defaultActive={this.howToUse} options={this.state.radioOptions} checkAction={(option) => {this.determineText(option)}} />
                        {this.state.botPageDefault}
                    </div>
                </div>
            </div>
        );
    }
}

export default Slawrence;