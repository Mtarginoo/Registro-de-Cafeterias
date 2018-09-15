import React from 'react';
import {Switch, Route} from 
'react-router-dom';
import Cafeteria from './Cafeteria';
import About from './About';
import CafeteriaDetails from './CafeteriaDetails';
import AddCafeteria from './AddCafeteria';
import EditCafeteria from './EditCafeteria';
const Main = () =>(
    <main>
        <Switch>
          <Route exact path = '/' component = {Cafeteria} />
          <Route exact path = '/about' component = {About} />
          <Route exact path = '/Cafeterias/add' component = {AddCafeteria} />
          <Route exact path = '/cafeteria/edit/:id' component = {EditCafeteria} />
          <Route exact path = '/cafeteria/:id' component = {CafeteriaDetails} />
        </Switch>
    </main>        
)

export default Main;