import React, { Component } from 'react';

import ContentBox, { Content } from '../content-box/ContentBox';

class Home extends Component {

    constructor() {
        super();

        this.state = {
            pageContent: new Content(
                "home-0",
                "Welcome!", 
                [
                    <p>
                        My name is Jordan and I created this site during my time off as a developer.
                        There were multiple reasons why I created this site such as using it as sandbox for
                        new ideas, presenting my knowledge and skills, and because why not!
                    </p>,
                    <p>
                        Check out <a href='www.google.com' key='cb-a-0-home-1'>About</a> for more details about me and how this site was made 
                        or feel free to use <a href='www.google.com' key='cb-a-1-home-1'>Contact</a> to get ahold of me for any questions, comments, or resumes.
                    </p>
                ]
            )
        }
    }

    render() {
        return (
            <div className="HomePage">
                <div className="image-space">
                </div>
                <ContentBox key={this.state.pageContent.id} boxTitle={this.state.pageContent.title} boxContent={this.state.pageContent.content} boxKey={this.state.pageContent.id} />
            </div>
        )
    }
}

export default Home;