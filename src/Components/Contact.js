import React, { Component } from "react";
import { Fade, Slide } from "react-reveal";
import { InlineWidget } from "react-calendly";

class Contact extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const message = this.props.data.contactmessage;

    return (
      <section id="contact">
        <InlineWidget url="https://calendly.com/ANDREW-J-STEPHENS" />
      </section>
    );
  }
}

export default Contact;
