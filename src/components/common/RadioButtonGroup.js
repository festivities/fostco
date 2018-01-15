import React, { Component } from 'react';

class RadioButtonGroup extends Component {

    constructor(props) {
        super(props);

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
                        <div key={index} className="radio-button-container" onClick={() => { this.setChecked(option) }}>
                            <div className="radio-button-outer">
                                {option === this.state.activeValue ? <div className="radio-button-inner checked" /> : <div className="radio-button-inner" />}
                            </div>
                            <div className="radio-button-text">{option}</div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default RadioButtonGroup;