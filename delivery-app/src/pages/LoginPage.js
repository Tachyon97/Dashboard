// LoginPage.js
import React, { useState } from 'react';  
import { Container, Row, Col, Form, Button } from 'react-bootstrap';  
import { useNavigate } from 'react-router-dom';  
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';  

function LoginPage() {  
  const [email, setEmail] = useState('');  
  const [password, setPassword] = useState('');  
  const [error, setError] = useState(null);  

  const navigate = useNavigate();  

  const handleSubmit = async (event) => {  
    event.preventDefault();  

    const auth = getAuth();  
    signInWithEmailAndPassword(auth, email, password)  
    .then((userCredential) => {  
      // Signed in  
      const user = userCredential.user;  
      // Check user type and redirect  
      if (user.email === 'admin@admin.com') { // replace with the actual admin email  
        navigate('/admin');  
      } else {  
        navigate('/driver');  
      }  
    })  
    .catch((error) => {  
      // Handle Errors here.  
      setError(error.message);  
    });  
  };  

  return (  
    <Container className="login-page">  
      <Row className="justify-content-center">  
        <Col md={6}>  
          <h1>Login Page</h1>  
          <Form onSubmit={handleSubmit}>  
            {/* form fields */}
          </Form>  
        </Col>  
      </Row>  
    </Container>  
  );  
}  

export default LoginPage;
