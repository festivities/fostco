import React, { Component } from 'react';

import ContentBox, { Content } from '../content-box/ContentBox';
import './Home.scss';

class Home extends Component {

    constructor() {
        super();

        this.state = {
            pageContent: [
                new Content(
                    'Welcome!', 
                    [
                        "My name is Jordan and I created this site during my time off as a developer."
                        + " There were multiple reasons why I created this site such as using it as sandbox for"
                        + " new ideas, presenting my knowledge and skills, and because why not!"
                    ]
                ),
                new Content(
                    "Site Direction",
                    [
                        "Check out ",
                        <a href='#'>About</a>,
                        " for more details about me and how this site was made or feel free to use ",
                        <a href='#'>Contact</a>,
                        " to get ahold of me for any questions, comments, or resumes."
                    ]
                )
            ]
        }
    }

    render() {
        return (
            <div className="HomePage">
                { this.state.pageContent.map((boxContent, index) => {
                    return <ContentBox boxTitle={boxContent.title} boxContent={boxContent.content} />
                })}
            </div>
        )
    }
}

export default Home;