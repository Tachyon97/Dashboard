import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, query, where, getDocs, updateDoc, doc } from 'firebase/firestore';
import { Container, Table, Button } from 'react-bootstrap';

function DriverPage() {
  const [deliveries, setDeliveries] = useState([]);
  
  useEffect(() => {
    const fetchDeliveries = async () => {
      const deliveriesCollection = collection(db, 'deliveries');
      const driverDeliveriesQuery = query(deliveriesCollection, where('driver', '==', 'driver@example.com')); // replace with actual driver email
      const querySnapshot = await getDocs(driverDeliveriesQuery);
      setDeliveries(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };

    fetchDeliveries();
  }, []);

  const updateStatus = async (id, newStatus) => {
    try {
      const deliveryDoc = doc(db, 'deliveries', id);
      await updateDoc(deliveryDoc, { status: newStatus });
      console.log('Status updated');
    } catch (e) {
      console.error('Error updating status: ', e);
    }
  };

  return (
    <Container>
      <h1>Driver Page</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Pickup Location</th>
            <th>Dropoff Location</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {deliveries.map((delivery) => (
            <tr key={delivery.id}>
              <td>{delivery.pickupLocation}</td>
              <td>{delivery.dropOffLocation}</td>
              <td>{delivery.status}</td>
              <td>
                {delivery.status === 'pending' && (
                  <Button onClick={() => updateStatus(delivery.id, 'in progress')}>Start</Button>
                )}
                {delivery.status === 'in progress' && (
                  <Button onClick={() => updateStatus(delivery.id, 'completed')}>Complete</Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default DriverPage;
