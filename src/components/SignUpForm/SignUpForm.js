import { React, useState } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import styles from "./SignUpForm.module.css";
import Modal from 'react-modal'

const SignUpForm = () => {

  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [BMI, setBMI] = useState("");
  const [diagnosis, setDiagnosis] = useState("");

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
      minWidth: '300px',
      minHeight: '300px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  };

  Modal.setAppElement('#root');

  return (

    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >

        <h3>Your BMI is</h3>
        <h2>{BMI}</h2>
        <p>You are {diagnosis}.</p>

        <button color="red" onClick={() => { closeModal();
        }}>Exit</button>

      </Modal>


      <Form className={styles.form}>
        <Form.Field>
          <input placeholder="Weight (kg)" onChange={(event) => setWeight(event.target.value)} />
        </Form.Field>
        <Form.Field>
          <input placeholder="Height (cm)" onChange={(event) => setHeight(event.target.value)} />
        </Form.Field>
        <Button color="green" type="submit" onClick={() => {
          const myBMI = (weight / ((height * 0.01) * (height * 0.01))).toFixed(2);
          setBMI(myBMI);
          if (myBMI < 18.6) {
            setDiagnosis("underweight")
          } else if (myBMI < 24.9) {
            setDiagnosis("of normal weight")
          } else {
            setDiagnosis("overweight")
          }


          if(myBMI!==null){openModal()};
          console.log("Clicked");
        }}>Get your BMI</Button>
      </Form>
    </div>

  );
};

export default SignUpForm;
