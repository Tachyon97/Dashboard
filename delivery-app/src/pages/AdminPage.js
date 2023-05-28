// AdminPage.js
import React, { useState } from 'react';  
import { db } from '../firebase';  
import { collection, addDoc } from 'firebase/firestore';  
import { Container, Form, Button, Row, Col, Navbar } from 'react-bootstrap';  
import '../adminpage.css'; // Import the custom CSS file  

function AdminPage() {  
  const [delivery, setDelivery] = useState({  
    address: '',  
    driver: '',  
    pickupLocation: '',  
    dropOffLocation: '',  
  });  

  const handleSubmit = async (event) => {  
    event.preventDefault();  
    try {  
      await addDoc(collection(db, 'deliveries'), delivery);  
      console.log('Document added to Firestore');  
    } catch (e) {  
      console.error('Error adding document: ', e);  
    }  
  };  

  return (  
    <Container className="admin-page">  
      <Navbar bg="light" variant="light">  
        <Navbar.Brand href="#home">Admin Page</Navbar.Brand>  
        <Navbar.Toggle />  
        <Navbar.Collapse className="justify-content-end">  
          <Navbar.Text>  
            Signed in as: <a href="#login">Admin</a>  
          </Navbar.Text>  
        </Navbar.Collapse>  
      </Navbar>  

      <Row>  
        <Col md={6}>  
          <h1>Create Delivery</h1>  
          <Form onSubmit={handleSubmit}>  
            {/* form fields */}
          </Form>  
        </Col>  

        <Col md={6}>  
          {/* You can add components for Created Deliveries and Completed Deliveries here */}
        </Col>  
      </Row>  
    </Container>  
  );  
}  

export default AdminPage;
