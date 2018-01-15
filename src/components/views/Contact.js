import React, { Component } from 'react';

class Contact extends Component {

    constructor() {
        super();

        this.state = {
            name: '',
            email: '',
            subject: '',
            body: '',
            isSent: false
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("Name: " + this.state.name);
        console.log("Email: " + this.state.email);
        console.log("Subject: " + this.state.subject);
        console.log("Body: " + this.state.body);
    }

    handleChange = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className="ContactPage">
                <div className="contact-overlay">
                    <div className="overlay-info">
                        <h1>Contact</h1>
                        <h5>Currently the contact form is non-functional. This feature is coming soon!</h5>
                        <h5>Please use either medium below to contact me and I will respond as soon as possible</h5>
                        <div className="link-container">
                            <p>Email: <a href="mailto:test@email.com" target="_top">test@email.com</a></p>
                            <p>LinkedIn: <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com">www.linkedin.com</a></p>
                        </div>
                    </div>
                    <div className="overlay-opacity"></div>
                </div>
                <div className="content-box last-content-box">
                    <div className="box-content">
                        <h1>Contact</h1>
                        <form className="contact-area" onSubmit={this.handleSubmit}>
                            <h3>Please use the form below to contact me with any questions!</h3>
                            <h4>Notice! - Any information entered below will be used only to respond to you and will not be used in any solicitation. No fields but the body are required.</h4>
                            <label className="label-name">Name</label>
                            <input className="input-name" type="text" name="name" placeholder="Your name.." value={this.state.name} onChange={this.handleChange} />

                            <label className="label-email">Email</label>
                            <input className="input-email" type="text" name="email" placeholder="Your email.." value={this.state.email} onChange={this.handleChange} />

                            <label className="label-subject">Subject</label>
                            <input className="input-subject" type="text" name="subject" placeholder="Subject.." value={this.state.subject} onChange={this.handleChange} />

                            <label className="label-body">Body</label>
                            <textarea className="input-body" type="text" name="body" placeholder="Write something.." value={this.state.body} onChange={this.handleChange} />

                            <input className="input-submit" type="submit" value="Send" />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;