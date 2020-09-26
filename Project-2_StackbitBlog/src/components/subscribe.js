import React, { Component } from 'react';
import addToMailchimp from "gatsby-plugin-mailchimp";
import * as styles from './subscribe.module.scss';

class Subscribe extends Component  {
    state = {
        email: "",
        statusMsg: "",
        statusMsgColor: "green",
        subscribing: false,
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ statusMsg: "", subscribing: true });
        let { email } = this.state;
        addToMailchimp(email)
            .then(data => {
            data.result === "success"
                ? this.setState({
                    statusMsg: "Your subscription was successful!",
                    statusMsgColor: "green",
                    email: "",
                    subscribing: false,
                    })
                : this.setState({
                    statusMsg: "This email has already been subscribed.",
                    statusMsgColor: "red",
                    subscribing: false,
                    })
            })
            .catch(err => {
                this.setState({
                statusMsg: "An error occured. Please re-try",
                statusMsgColor: "red",
                subscribing: false,
                })
        })

    };


    render() {
        let { statusMsg, subscribing } = this.state;
        let btnCTA = subscribing ? "Subscribing" : "Subscribe";
        return (
            <form onSubmit={this.handleSubmit} className={styles.EmailListForm}>
                {this.props.heading && <h2>Subscribe to receive updates on new posts!</h2>}
                <div className={styles.Wrapper}>
                    <input
                        placeholder="Email address"
                        name="email"
                        type="text"
                        value={this.state.email}
                        onChange={e => this.setState({ email: e.target.value })}
                    />
                    <button type="submit">{btnCTA}</button>
                    {statusMsg && (
                        <div className="col-12">
                            <p
                            className="text-left"
                            style={{ color: this.state.statusMsgColor }}
                            >
                            {statusMsg}
                            </p>
                        </div>
                    )}
                </div>
            </form>
        );
    }
};

export default Subscribe;