import Fund from './pages/home/Fund/Fund';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './pages/home/Header/Header';
import Navbar from './pages/home/Header/Navbar';
import SingleDetials, { singleServiceContext } from './pages/Details/SingleDetials';
import { useState } from 'react';
import Regester from './pages/Regester/Regester';
import Event from './pages/Events/Events';
import Dashboard from './pages/Dashboard/Dashboard';
import AuthContext from './Firebase/AuthContext';
import Login from './pages/Account/Login';
import MyEvent from './pages/MyEvent/MyEvent';


function App() {

const [ service, setService ]  = useState();

  return (
  
   <AuthContext>
   <singleServiceContext.Provider value={[service,setService]}>
     <BrowserRouter>
         
     <Switch>
       
       <Route exact path="/">
         <Header />
          <Fund />
       </Route>

       <Route exact path="/home">
         <Header />
          <Fund />
       </Route>

       <Route path="/donation">

       </Route>

       <Route path="/events">
          <Regester />
       </Route>

       <Route path="/blog">
          <Login />
       </Route>

       <Route path="/event">
          <Event />
       </Route>

       <Route path="/service/:id">
          <SingleDetials />
       </Route>

       {/* <Route path="/myEvent/:email">
          <Navbar />
          <Dashboard />
       </Route> */}

       <Route path="/myEvent/:email">
          <Navbar />
         <MyEvent />
       </Route>

       

     </Switch>
     </BrowserRouter>
     </singleServiceContext.Provider>
     </AuthContext>
  );
}

export default App;
