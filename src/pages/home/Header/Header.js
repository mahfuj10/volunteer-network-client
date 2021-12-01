import React from 'react';
import './Header.css';
import Navbar from './Navbar';
import headerBanner from '../../../pages/banner.png';

const Header = () => {

  const headerStyle = {
    backgroundSize: 'cover',
    // position: 'absolute',
    top: 0,
    width: '100vw',
    backgroundImage: `url(${headerBanner})`,
    height: '500px',
  }

  return (

    <header style={headerStyle} >
      <article className="blend-mode"></article>
      <section >
        <Navbar />

        <h3 className="text-center mb-4" style={{ marginTop: "120px" }}>I GROW BY HELPING PEOPLE IN NEED</h3>

        <aside className="search-container">
          <input placeholder="Search..." style={{ width: "16%" }} type="text"
          /><button className="border-0 ">Search</button>

        </aside>
      </section>
    </header>

  );
};

export default Header;