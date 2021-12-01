import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Admins from '../Admins/Admins';
import SideNavbar from '../home/Header/SideNavbar';
import AddEvent from './AddEvent';
import { useHistory } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Nav, Row, Tab } from 'react-bootstrap';
import './Event.css';
import logo from '../../logos/Group 1329.png';

const Events = () => {

  const history = useHistory();

  const handaleHistory = () => {
    history.push('/home')
  }


  return (

    <Tab.Container id="left-tabs-example " defaultActiveKey="first">
      <img onClick={handaleHistory} className="position-absolute mt-3 ms-4" width="202" src={logo} alt="" />
      <Row >
        <Col style={{ width: "300px", height: "100vh", paddingTop: "200px", backgroundColor: "#ffffff" }} sm={3}>
          <Nav variant="pills" className="flex-column d-grid justify-content-center">
            <Nav.Item>
              <Nav.Link eventKey="first">
                <i class="fas fa-user-friends"></i>  Volunteer Register List
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">
                <i class="fas fa-plus"></i> Add event
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9} className='ps-0'>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <Admins />
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <AddEvent />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
};

export default Events;