import React, { Component } from 'react';
import InlineLink from '../common/InlineLink';

class Home extends Component {

    render() {
        return (
            <div className="HomePage">
                <div className="content-box">
                    <div className="box-content">
                        <h1>Welcome!</h1>
                        <p>
                            My name is Jordan and I created this site. This site is still in it's early stages so some functionality is missing and 
                            there will be more features to come!
                        </p><br/>
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