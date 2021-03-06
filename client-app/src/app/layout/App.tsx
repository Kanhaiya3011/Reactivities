import React, { useState,useEffect, Fragment } from 'react';
import { List, Container } from 'semantic-ui-react';
import axios from 'axios';
import { IActivity } from '../models/activity';
import { NavBar } from '../../features/nav/NavBar';
import { AcitivityDashboard } from '../../features/activities/dashboard/AcitivityDashboard';

interface IState{
  activities: IActivity[]
}

const App = () => {
  const [activities, setActivities] = useState<IActivity[]>([])
 
  useEffect(() =>{
    axios.get<IActivity[]>('http://localhost:5000/api/activities')
         .then((response) => {
           setActivities(response.data)
       });
  }, []);

    return (
      <Fragment>
         <NavBar></NavBar>
         <Container style={{marginTop: '7em'}}>
            <AcitivityDashboard activities={activities}/>
         </Container>
        
      </Fragment>
    );
}
export default App;
