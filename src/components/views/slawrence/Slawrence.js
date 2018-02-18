import React, { Component } from 'react';

import EntriesTable from './EntriesTable';
import RadioButtonGroup from '../../common/RadioButtonGroup';

class Slawrence extends Component {

    constructor() {
        super();

        this.entriesView = "Entries";
        this.statsView = "Statistics";

        this.state = {
            botPageView: [],
            radioOptions: [this.entriesView],
            names: ['All'],
            betData: [],
            allBetData: [],
            hasError: false
        }
    }

    componentDidMount() {
        this.getBets();
    }

    getBets = () => {
        let query = 'https://slawrence.herokuapp.com/bets/';

        let options = {
            method: 'GET',
            mode: 'cors',
            headers: {
                Accept: 'application/json'
            }
        };

        fetch(query, options)
            .then((response) => {
                if (response.ok) {
                    response.json().then((betsJson) => {
                        this.cleanBets(betsJson);
                        this.determineText(this.entriesView);
                    });
                } else {
                    this.determineText('error');
                }
            })
            .catch(() => {
                this.determineText('error');
            });
    }

    cleanBets = (bets) => {
        let betNames = this.state.names;

        for (let bet of bets) {
            if (bet.setterName) {
                let setterName = bet.setterName.charAt(0).toUpperCase() + bet.setterName.slice(1);
                bet.setterName = setterName;
                if (!betNames.includes(setterName)) {
                    betNames.push(setterName);
                }
            }

            if (bet.takerName) {
                let takerName = bet.takerName.charAt(0).toUpperCase() + bet.takerName.slice(1);
                bet.takerName = takerName;
                if (!betNames.includes(takerName)) {
                    betNames.push(takerName);
                }
            }
        }
        this.setState({names: betNames});
        this.setState({ betData: bets });
        this.setState({ allBetData: bets });
    }

    determineText = (option) => {
        if (option === 'error') {
            this.setState({
                hasError: true,
                botPageView: this.setErrorView()
            });
        } else if (this.entriesView === option) {
            this.setState({ botPageView: this.setEntriesView() });
        } else {
            this.setState({ botPageView: this.setStatsView() });
        }
    }

    setEntriesView = () => {
        return (
            <div className="box-content">
                <EntriesTable betData={this.state.betData} />
            </div>
        );
    }

    setStatsView = () => {
        return (
            null
        );
    }

    setErrorView = () => {
        return (
            <div className="box-content">
                There was an error in retrieving data. Please try again later.
            </div>
        );
    }

    handleSelectChange = (e) => {
        let selectedName = e.target.value;
        let bets = this.state.allBetData;

        if (selectedName !== 'All') {
            let filteredBets = [];

            for (let bet of bets) {
                if (bet.setterName === selectedName || bet.takerName === selectedName) {
                    filteredBets.push(bet);
                }
            }

            bets = filteredBets;
        }

        this.setState({ betData: bets });
    }

    render() {
        let tempStyle = { fontSize: '0.9em' };

        return (
            <div className="content">
                <div className="Slawrence">
                    <div className="content-box">
                        <h1 className="slawrence-header" style={tempStyle}>Slawrence Bot Page</h1>
                        <RadioButtonGroup defaultActive={this.entriesView} options={this.state.radioOptions} checkAction={(option) => { this.determineText(option) }} />
                        {!this.state.hasError &&
                            (<select className="name-select" onChange={this.handleSelectChange}>
                                {this.state.names.map((name, index) => {
                                    return <option value={name} key={index}>{name}</option>;
                                })}
                            </select>)
                        }
                        <button className="refresh-button" onClick={this.getBets}>Refresh</button>
                        {/* {this.state.botPageView} */}
                        <div className="box-content">
                            <EntriesTable betData={this.state.betData} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Slawrence;