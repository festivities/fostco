import React, { Component } from 'react';
import InlineLink from '../common/InlineLink';
import RadioButtonGroup from '../common/RadioButtonGroup';

class About extends Component {

    constructor(props) {
        super(props);

        this.aboutMe = "About Me";
        this.aboutSite = "About This Site";

        this.state = {
            aboutText: this.setAboutMeText(),
            radioOptions: [this.aboutMe, this.aboutSite]
        }
    }

    determineText = (option) => {
        if (this.aboutMe === option) {
            this.setState({aboutText: this.setAboutMeText()});
        } else {
            this.setState({aboutText: this.setAboutSiteText()});
        }
    }

    setAboutMeText = () => {
        return (
            <div className="box-content">
                <h3>About me :</h3>
                <p>
                    My name is Jordan Foster and I created this site to be able to showcase my knowledge, to use as a sandbox, and eventually use a client to
                    future services. You can read more about my decision making for this site and why I chose to create 
                    it by selecting the "About This Site" button at the top.
                </p><br/>
                <p>
                    I grew up in Washington state, graduated from Western Washington University in 2015, and now work as a software developer in Seattle, WA. 
                    While I have spent time away from Washington, I was always drawn back to my home state. Go Seahawks.
                </p><br/>
                <p>
                    My most important characteristic to me is my drive for continuous improvement. This characteristic has led me to where I am in my career now. 
                    I love being given something that I previously had no knowledge of and being able to quickly apply it. This has been the reason for sleepless nights 
                    reading and applying any knowledge gained and it is something I truly enjoy doing. I also love problem solving whether it's some board game 
                    puzzle, video game, or complex function in code that isn't working to perfection.
                </p><br/>
                <p>
                    If you would like a resume or you have any general questions, feel free to use 
                    the <InlineLink navFunc={this.props.setNavLink} linkValue='Contact' /> page to send an email.
                </p><br/>
                <p>Thanks for visiting!</p>
            </div>
        );
    }

    setAboutSiteText = () => {
        return (
            <div className="box-content">
                <h3>Some questions I hope I can answer :</h3>
                <h5>What libraries or technologies were used to create this site?</h5>
                <p>
                    This site was mainly created using <a target="_blank" rel="noopener noreferrer" href="https://github.com/facebookincubator/create-react-app">Facebook's React library</a> for 
                    functionality and  <a target="_blank" rel="noopener noreferrer" href="http://sass-lang.com/">Syntastically Awesome Style Sheets (SASS)</a> for design aspects.
                </p>

                <h5>Why use React for such a simple webpage?</h5>
                <p>
                    As a developer, I have mainly used Angular for web applications and I wanted to branch out. Using React provided me a way to put 
                    what I was learning to practice while continuing to build up my skills. I also wanted this site to act as a sandbox for experimentations 
                    and using React provides a foundation to build more advanced features in the future.
                </p>

                <h5>Why didn't I use libraries such as bootstrap for features and site style?</h5>
                <p>
                    Usually I would look to existing packages to help create a website or application but for this site I wanted to build everything from 
                    scratch. This allows more flexibility over the functionality of elements and helps me learn how certain features function better.
                </p>

                <h5>Can I see your code?</h5>
                <p>Of course! <a target="_blank" rel="noopener noreferrer" href="https://github.com/festivities/fostco">Here's my github repositiory</a></p>

                <h5>Questions about code or you have a suggestion:</h5>
                <p>
                    This site is partially for experimentation so that's most likely why I did whatever head scratching piece of code you are looking at. 
                    However, please feel free to use the <InlineLink navFunc={this.props.setNavLink} linkValue='Contact' /> page to send an email with any questions, suggestions, 
                    criticisms, or general comments!
                </p>
            </div>
        );
    }
    
    render() {
        return (
            <div className="AboutPage">
                <div className="content-box">
                    <RadioButtonGroup defaultActive={this.aboutMe} options={this.state.radioOptions} checkAction={(option) => {this.determineText(option)}} />
                    {this.state.aboutText}
                </div>
            </div>
        )
    }
}

export default About;