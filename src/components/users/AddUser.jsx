import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const AddUser = () => {
    const [user, setUser] = useState({
        first_name: "",
        last_name: "",
        email: "",
        website: "",
        company: ""
    })
    const navigate =useNavigate()

    const onInputHandle = (e) =>{
        const {name, value} = e.target;
        setUser({...user, [name]:value})
        
    }
    

    const { first_name, last_name, email, website,company} = user;

    const handleSubmit = async (e) =>{
        e.preventDefault();
        if(!first_name || !last_name){
            alert("All fields are required")
        }else{
            await axios.post("http://localhost:3002/users", user)   
            toast.success("User added successfully!")

            navigate('/')
        }
       
    }

  return (
    <Container style={{ maxWidth: '600px', marginTop: '50px' }}>
      <h1>Add User</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="firstname">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" onChange={ onInputHandle} name='first_name' value={first_name} placeholder="Enter first name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="lastname">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" onChange={ onInputHandle} name='last_name'  value={last_name} placeholder="Enter last name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" onChange={ onInputHandle} name='email' value={email} placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="websitename">
          <Form.Label>Website</Form.Label>
          <Form.Control type="text" onChange={ onInputHandle} name='website' value={website}  placeholder="Enter website" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="companyname">
          <Form.Label>Company</Form.Label>
          <Form.Control type="text" onChange={ onInputHandle} name='company' value={company} placeholder="Enter company name" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add User
        </Button>
      </Form>
    </Container>
  );
};

export default AddUser;
