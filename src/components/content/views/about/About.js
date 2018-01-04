import React, { Component } from 'react';

class About extends Component {

    render() {
        return (
            <div className="AboutPage">
                <div className="content-box">
                    <div className="box-title">About Me</div>
                    <div className="box-content">
                        <p>
                            My name is Jordan Foster and I created this site to be able to showcase my knowledge, to use as a sandbox, and to potentially 
                            improve upon to make into a full web application. You can read more about my decision making for this site and why I chose to create 
                            it below in the "About This Site" section.
                        </p>
                        <p>
                            I grew up in Washington state, graduated from Western Washington University in 2015, and now work as a software developer in Seattle, WA. 
                            While I have spent time away from Washington, I was always drawn back to my home state. Go Seahawks.
                        </p>
                        <p>
                            My most important characteristic to me is my drive for continuous improvement. This characteristic has led me to where I am in my career now. 
                            I love being given something that I previously had no knowledge of and being told to apply it. This has been the reason for sleepless nights 
                            reading and applying any knowledge gained and it is something I truly enjoy doing. I also love problem solving whether it's some board game 
                            puzzle, video game, or complex function in code that isn't working to perfection.
                        </p>
                        <p>If you would like a resume or you have any general questions, feel free to use the (Link)Contact(Link) page to send an email.</p>
                        <p>Thanks for visiting!</p>
                    </div>
                </div>
                <div className="content-box last-content-box">
                    <div className="box-title">About This Site</div>
                    <div className="box-content">
                        <h3>Some questions I hope I can answer:</h3>
                        <h4>What libraries or technologies were used to create this site?</h4>
                        <p>
                            This site was mainly created using <a target="_blank" rel="noopener noreferrer" href="https://github.com/facebookincubator/create-react-app">Facebook's React library</a> for 
                            functionality and  <a target="_blank" rel="noopener noreferrer" href="http://sass-lang.com/">Syntastically Awesome Style Sheets (SASS)</a> for design aspects.
                        </p>

                        <h4>Why use React for such a simple webpage?</h4>
                        <p>
                            As a developer, I have mainly used Angular for web applications and I wanted to branch out. Using React provided me a way to put 
                            what I was learning to practice while continuing to build up my skills. I also wanted this site to act as a sandbox for experimentations 
                            and using React provides a foundation to build more advanced features in the future.
                        </p>

                        <h4>Why didn't I use libraries such as bootstrap for features and site style?</h4>
                        <p>
                            Usually I would look to existing packages to help create a website or application but for this site I wanted to build everything from 
                            scratch. This allows more flexibility over the functionality of elements and helps me learn how certain features function better.
                        </p>

                        <h4>Can I see your code?</h4>
                        <p>Of course! <a target="_blank" rel="noopener noreferrer" href="https://github.com/festivities/fostco">Here's my github repositiory</a></p>

                        <h4>Questions about code or you have a suggestion:</h4>
                        <p>
                            This site is partially for experimentation so that's most likely why I did whatever head scratching piece of code you are looking at. 
                            However, please feel free to use the (Link)Contact(Link) page to send an email with any questions, suggestions, criticisms, or general comments!
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;