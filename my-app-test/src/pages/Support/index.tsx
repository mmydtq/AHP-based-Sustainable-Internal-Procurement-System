import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { Store } from 'antd/lib/form/interface';
import Title from '@/component/Title1';
import styled from './index.module.css';
import Bottom from '@/component/Bottom';
import emailjs from 'emailjs-com'
import { send } from 'emailjs-com';


const Support: React.FC = () => {

  const [fromName, setFromName] = useState('');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [tempemial, settempemial] = useState('');
  const [sending, setSending] = useState(false);


  const [tempEmail, setTempEmail] = useState<string>('');


  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setSending(true);

    const serviceID = 'service_ijur378'; // Replace with your emailjs service ID
    const templateID = 'template_c5wgnm7'; // Replace with your emailjs template ID

    send(serviceID, templateID, {
      from_name: fromName,
      email: "here is the user's email: " + email,
      message: "here is the user's feedback or question: " + message

    }, 'i4-n1oK-HF1tjtYFS') // Replace with your emailjs user ID
      .then((response) => {
        console.log('Email sent!', response);
        setSending(false);
        alert('Email sent successfully!');
      })
      .catch((error) => {
        console.error('Email error:', error);
        setSending(false);
        alert('Failed to send email. Please try again later.');
      });


  };




  return (
    <div>
      <Title select='Support' />
      <div className={styled.title}><b>Support for your service.</b></div>
      <div className={styled.subtitle}>Type your email here.</div>
      <div className={styled.container}>


        <form onSubmit={handleSubmit}>
          <div className={styled.field}>
            <label htmlFor="from_name">Your Name</label>
            <input type="text" name="from_name" id="from_name" value={fromName} onChange={(e) => setFromName(e.target.value)} />
          </div>
          <div className={styled.field}>
            <label htmlFor="email">Add your Work Email</label>
            <input
              type="text"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styled.field}>
            <label htmlFor="message">Your Question or Feedback</label>
            <input type="text" name="message" id="message" value={message} onChange={(e) => setMessage(e.target.value)} />
          </div>
          <input type="submit" id="button" value={sending ? 'Sending...' : 'Send Email'} disabled={sending} className={styled.button} />
        </form>
      </div>
      <Bottom />
    </div>


  );
};


export default Support;
