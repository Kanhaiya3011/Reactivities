import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Header, List } from 'semantic-ui-react';

function App() {
  const[activities, setActivies] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/activities').then(response => {
        setActivies(response.data);
    })
  }, []);

  return (
    <div>
        <Header as='h2' icon='users' content='Reactivites'/>
        <List>
        {
            activities.map((activity : any) => (
              <List.Item key={activity.id}>{activity.title}</List.Item>
            ))
          }
        </List>
        <ul>
          
        </ul>
    </div>
  );
}

export default App;
