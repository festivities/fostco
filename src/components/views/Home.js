import React, { Component } from 'react';
import InlineLink from '../common/InlineLink';

class Home extends Component {

    render() {
        return (
            <div className="HomePage">
                <div className="content-box">
                    <div className="box-content">
                        <h1 className="box-title">Welcome!</h1>
                        <p>
                            My name is Jordan and I created this site during my time off as a developer.
                            There were multiple reasons why I created this site such as using it as sandbox for
                            new ideas, presenting my knowledge and skills, and because why not!
                        </p>
                        <p>
                            Check out <InlineLink navFunc={this.props.setNavLink} linkValue='About' /> for more details about me and how this site was made 
                            or feel free to use <InlineLink navFunc={this.props.setNavLink} linkValue='Contact' /> to get a hold of me for any questions, comments, or resumes.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;