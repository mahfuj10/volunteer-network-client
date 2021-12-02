import Fund from './pages/home/Fund/Fund';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './pages/home/Header/Header';
import Navbar from './pages/home/Header/Navbar';
import SingleDetials, { singleServiceContext } from './pages/Details/SingleDetials';
import { useState } from 'react';
import Event from './pages/Events/Events';
import AuthContext from './Firebase/AuthContext';
import Login from './pages/Account/Login';
import MyEvent from './pages/MyEvent/MyEvent';
import PageNotFound from './pages/PageNotFound/PageNotFound';


function App() {

   const [service, setService] = useState();

   return (

      <AuthContext>
         <singleServiceContext.Provider value={[service, setService]}>
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

                  {/* <Route path="/dashboard"> */}
                  {/* <Regester /> */}
                  {/* </Route> */}

                  <Route path="/login">
                     <Login />
                  </Route>

                  <Route path="/dashboard">
                     <Event />
                  </Route>

                  <Route path="/service/:id">
                     <SingleDetials />
                  </Route>


                  <Route path="/myEvent/:email">
                     <Navbar />
                     <MyEvent />
                  </Route>

                  <Route path="*">
                     <PageNotFound />
                  </Route>



               </Switch>
            </BrowserRouter>
         </singleServiceContext.Provider>
      </AuthContext>
   );
}

export default App;
