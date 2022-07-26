import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link, useParams } from 'react-router-dom';

const View = () => {
  const [user, setUsers] = useState({
   
  });
  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3002/users/${id}`);
    setUsers(res.data);
  };
  console.log(user)

  return (
    <div className="container mt-5 ">
      <Container>
        <Link to='/' ><button className='btn btn-primary'>Back to home</button></Link>
        <h1>User Card</h1>
          <Card key={user.id} style={{ width: '18rem' }}>
            <Card.Header>ID No: {user.id}</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>First Name: {user.first_name}</ListGroup.Item>
              <ListGroup.Item>Last Name: {user.last_name}</ListGroup.Item>
              <ListGroup.Item>Email: {user.email}</ListGroup.Item>
              <ListGroup.Item>Website: {user.website}</ListGroup.Item>
              <ListGroup.Item>Company: {user.company}</ListGroup.Item>
            </ListGroup>
          </Card>
     
      </Container>
    </div>
  );
};

export default View;
