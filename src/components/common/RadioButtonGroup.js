import React, { Component } from 'react';

class RadioButtonGroup extends Component {

    constructor(props) {
        super(props);

        this.containerProperties = {
            width: this.props.options.length > 0 ? (100 / this.props.options.length) + "%" : "0%"
        }

        this.state = {
            activeValue: this.props.defaultActive ? this.props.defaultActive : null
        }
    }

    setChecked = (option) => {
        if (this.state.activeValue !== option) {
            this.setState({ activeValue: option });
            this.props.checkAction(option);
        }
    }

    render() {
        return (
            <div className="RadioButtonGroup">
                {this.props.options.map((option, index) => {
                    return (
                        <div key={index} className="radio-button-container">
                            <div className="radio-button-outer" onClick={() => { this.setChecked(option) }}>
                                {option === this.state.activeValue ? <div className="radio-button-inner" /> : null}
                            </div>
                            <label className="radio-button-text">{option}</label>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default RadioButtonGroup;