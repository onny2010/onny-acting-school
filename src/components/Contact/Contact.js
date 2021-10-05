import Button from '@restart/ui/esm/Button';
import React from 'react';
import './Contact.css';
const Contact = () => {
    return (
        <div className="contact-us">
            <h2>Contact With Us</h2>
            <p>Do You want any information and give feedback to us Please fill the text box and click to the send massage.</p>
            <div className="contact">
                <input type="text" placeholder="Your Name" />
                <input type="text" placeholder="Your Email" />
                <input type="text" placeholder="Your Subject" />
                <textarea name="" id="" cols="20" rows="5">Message</textarea>
                <Button className="btn-style" variant="primary">Submit</Button>
            </div>
        </div>
    );
};

export default Contact;