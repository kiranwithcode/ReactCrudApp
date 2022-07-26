import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';


const Home = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get('http://localhost:3002/users');
    setUser(result.data.reverse());
  };

  const deleteUser = async (id) => {
    if (window.confirm('Are you sure you want to delete student data!')) {
      await axios.delete(`http://localhost:3002/users/${id}`);
      loadUser();
      toast.success('User deleted successfully!');
    }
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1>Home Page</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>
                <td>
                  <Button
                    as={Link}
                    to={`/users/view/${user.id}`}
                    className="btn btn-secondary mx-2"
                  >
                    View
                  </Button>
                  <Button
                    as={Link}
                    to={`/users/edit/${user.id}`}
                    className="btn btn-primary mx-2"
                  >
                    Edit
                  </Button>
                  <Button
                    className="btn btn-danger"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Home;
