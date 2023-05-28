// Auth.js
import React, { useState } from 'react';  
import { auth, db } from './firebase';  
import { Container, Form, Button } from 'react-bootstrap';  
import { useNavigate } from 'react-router-dom';  

const Auth = () => {  
  const [email, setEmail] = useState('');  
  const [password, setPassword] = useState('');  
  const [isAdmin, setIsAdmin] = useState(false);  
  const navigate = useNavigate();  

  const handleSignup = async (event) => {  
    event.preventDefault();  

    try {  
      const userCredential = await auth.createUserWithEmailAndPassword(email, password);  
      const user = userCredential.user;  

      await db.collection('users').doc(user.uid).set({  
        email: email,  
        role: isAdmin ? 'admin' : 'driver',  
      });  

      if (isAdmin) {  
        navigate('/admin');  
      } else {  
        navigate('/driver');  
      }  
    } catch (error) {  
      console.error(error);  
      // Handle error  
    }  
  };  

  return (  
    <Container>  
      <Form onSubmit={handleSignup}>  
        {/* form fields */}
      </Form>  
    </Container>  
  );  
};  

export default Auth;
