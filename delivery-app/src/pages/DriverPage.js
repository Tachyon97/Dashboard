import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { Container, Table } from 'react-bootstrap';

function DriverPage({ user }) {
  const [deliveries, setDeliveries] = useState([]);

  useEffect(() => {
    const fetchDeliveries = async () => {
      try {
        const q = query(
          collection(db, 'deliveries'),
          where('driver', '==', user.email)
        );
        const querySnapshot = await getDocs(q);
        const deliveryData = [];
        querySnapshot.forEach((doc) => {
          const delivery = doc.data();
          delivery.id = doc.id;
          deliveryData.push(delivery);
        });
        setDeliveries(deliveryData);
      } catch (error) {
        console.error('Error fetching deliveries:', error);
      }
    };

    fetchDeliveries();
  }, [user.email]);

  return (
    <Container>
      <h1>Welcome, {user.displayName}</h1>
      <h2>Your Deliveries</h2>
      <Table striped bordered>
        <thead>
          <tr>
            <th>Address</th>
            <th>Pickup Location</th>
            <th>Drop-off Location</th>
          </tr>
        </thead>
        <tbody>
          {deliveries.map((delivery) => (
            <tr key={delivery.id}>
              <td>{delivery.address}</td>
              <td>{delivery.pickupLocation}</td>
              <td>{delivery.dropOffLocation}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default DriverPage;
