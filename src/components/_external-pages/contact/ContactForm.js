// material
import React, { useState } from "react";
import { Button, Typography, TextField, Stack, Input } from '@mui/material';
//
import { varFadeInUp, MotionInView } from '../../animate';
// ----------------------------------------------------------------------

export default function ContactForm() {
  const [name, setName] = useState();
  const email = "contact@twebile.com";
  const [subject, setSubject] = useState();
  const [message, setMessage] = useState();

  const sendEmail = async () => {
    try {
      const mailto = 'mailto:';
      const body = message.replaceAll(/\n/g, "%0D%0A");
      const result = mailto.concat(email, "?subject=", subject, "&body=", name, "%0D%0A", body);
      window.open(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Stack spacing={5}>
      <MotionInView variants={varFadeInUp}>
        <Typography variant="h3">
          Feel free to contact us. <br />
          We'll be glad to hear from you, buddy.
        </Typography>
      </MotionInView>

      <Stack spacing={3}>
        <MotionInView variants={varFadeInUp}>
          <TextField fullWidth label="Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }} />
        </MotionInView>

        {/* <MotionInView variants={varFadeInUp}>
          <TextField fullWidth label="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }} />
        </MotionInView> */}

        <MotionInView variants={varFadeInUp}>
          <TextField fullWidth label="Subject"
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
            }} />
        </MotionInView>

        <MotionInView variants={varFadeInUp}>
          <TextField fullWidth label="Enter your message here." multiline rows={4}
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }} />
        </MotionInView>
      </Stack>

      <MotionInView variants={varFadeInUp}>
        <Button size="large" variant="contained" onClick={sendEmail}>
          Submit Now
        </Button>
      </MotionInView>
    </Stack>
  );
}
