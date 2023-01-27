import axios from "axios";
import { useEffect, useState } from "react";
import {
  Button,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [valid, setValid] = useState("");

//   const handleChange = (e) => {
//     setConfirmPassword(e.target.value);
//     if (password !== confirmPassword) {
//       setValid("is-inavlid");
//       setMessage("Password does not match");
//       return;
//     }
//     setValid("is-valid");
//   };

useEffect(() => {
    if (password !==confirmPassword) {
        setValid("is-invalid")
        setMessage("Passwords don't match")
        return
    }
    setValid("is-valid")
}, [confirmPassword])

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(username, password, confirmPassword);
    axios.post('http://localhost:3005/users/register', 
        {username, password})
        .then(response => console.log(response.data))
        .catch(err => console.log(err))
  };
  return (
    <>
      <Form>
        <FormGroup>
          <Label for="username">Username</Label>
          <Input
            type="text"
            name="username"
            id="username"
            placeholder="eg. Dipesh Nepali"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="confirmPassword">Password</Label>
          <Input
            className={valid}
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Re-enter your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <FormFeedback className={valid}>{message}</FormFeedback>
        </FormGroup>
        <Button color="primary" onClick={handleRegister}>
          Register
        </Button>
      </Form>
    </>
  );
};

export default Register;