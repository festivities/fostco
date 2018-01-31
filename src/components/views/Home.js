import React from 'react';
import PropTypes from 'prop-types';

import InlineLink from '../common/InlineLink';

const Home = (props) => {
    return (
        <div className="content">
            <div className="HomePage">
                <div className="content-box">
                    <div className="box-content">
                        <h1>Welcome!</h1>
                        <p>
                            My name is Jordan and I created this site. This site is still in it's early stages so some functionality is missing and
                            there will be more features to come!
                        </p><br />
                        <p>
                            Check out <InlineLink onNavigate={props.onNavigate} linkValue='About' /> for more details about me and how this site was made
                            or feel free to use <InlineLink onNavigate={props.onNavigate} linkValue='Contact' /> to get a hold of me for any questions, or comments.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

Home.propTypes = {
    onNavigate: PropTypes.func
};

export default Home;