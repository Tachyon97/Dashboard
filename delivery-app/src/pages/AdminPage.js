import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';
import { Container, Form, Button, Row, Col, Navbar } from 'react-bootstrap';

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
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  return (
    <Container>
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
        <Col>
          <h1>Create Delivery</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formAddress">
              <Form.Label>Delivery Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter address"
                value={delivery.address}
                onChange={(e) =>
                  setDelivery({ ...delivery, address: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group controlId="formDriver">
              <Form.Label>Driver</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter driver's email"
                value={delivery.driver}
                onChange={(e) =>
                  setDelivery({ ...delivery, driver: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group controlId="formPickupLocation">
              <Form.Label>Pickup Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter pickup location"
                value={delivery.pickupLocation}
                onChange={(e) =>
                  setDelivery({ ...delivery, pickupLocation: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group controlId="formDropOffLocation">
              <Form.Label>Drop-off Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter drop-off location"
                value={delivery.dropOffLocation}
                onChange={(e) =>
                  setDelivery({ ...delivery, dropOffLocation: e.target.value })
                }
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Create Delivery
            </Button>
          </Form>
        </Col>

        <Col>
          {/* You can add components for Created Deliveries and Completed Deliveries here */}
        </Col>
      </Row>
    </Container>
  );
}

export default AdminPage;
