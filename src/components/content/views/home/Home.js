import React, { Component } from 'react';

import ContentBox, { Content } from '../content-box/ContentBox';

class Home extends Component {

    constructor() {
        super();

        this.state = {
            pageContent: [
                new Content(
                    "home-0",
                    "Welcome!", 
                    [
                        "My name is Jordan and I created this site during my time off as a developer."
                        + " There were multiple reasons why I created this site such as using it as sandbox for"
                        + " new ideas, presenting my knowledge and skills, and because why not!"
                    ]
                ),
                new Content(
                    "home-1",
                    "Site Direction",
                    [
                        "Check out ",
                        <a href='www.google.com' key='cb-a-0-home-1'>About</a>,
                        " for more details about me and how this site was made or feel free to use ",
                        <a href='www.google.com' key='cb-a-1-home-1'>Contact</a>,
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
                    return <ContentBox key={boxContent.id} boxTitle={boxContent.title} boxContent={boxContent.content} boxKey={boxContent.id}/>
                })}
            </div>
        )
    }
}

export default Home;