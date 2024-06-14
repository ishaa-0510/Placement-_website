import React from 'react';
import './Contact.css';
import msg_icon from '../../assets/msg-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import location_icon from '../../assets/location-icon.png';

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-info-item">
        <img src={msg_icon} alt="Message Icon" />
        <div>
          <h3>Send us a message</h3>
          <p>Feel free to reach out through our contact form.</p>
        </div>
      </div>
      <div className="contact-info-item">
        <img src={mail_icon} alt="Mail Icon" />
        <div>
          <h3>Email</h3>
          <p>ishadhuri2809@gmail.com</p>
        </div>
      </div>
      <div className="contact-info-item">
        <img src={phone_icon} alt="Phone Icon" />
        <div>
          <h3>Phone</h3>
          <p>+1 123-456-7890</p>
        </div>
      </div>
      <div className="contact-info-item">
        <img src={location_icon} alt="Location Icon" />
        <div>
          <h3>Location</h3>
          <p>VPPCOE<br/> Sion, Mumbai</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
