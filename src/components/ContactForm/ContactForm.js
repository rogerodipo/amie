import React, { useState } from "react";
import { Button, Form, TextArea } from "semantic-ui-react";
import styles from "./ContactForm.module.css";

const ContactForm = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <Form className={styles.form}>
      <Form.Field>
        <input required placeholder="Name" onChange = {(e) => setName(e.target.value)} />
      </Form.Field>
      <Form.Field>
        <input required placeholder="Email address" onChange = {(e) => setEmail(e.target.value)} />
      </Form.Field>
      <Form.Field>
        <TextArea required placeholder="Message" onChange = {(e) => setMessage(e.target.value)} />
      </Form.Field>
      <Button color="blue" type="submit">
        Send message
      </Button>
    </Form>
  );
};

export default ContactForm;
