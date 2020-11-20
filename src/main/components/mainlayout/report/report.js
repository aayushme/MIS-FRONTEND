import React, { Component } from 'react';
import Header from '../header/header';
import Navbar from '../navbar/navbar';

class Report extends Component {
  render() {
    return (
      <>
        <Header />
        <div>
          <br />

          <div class='vertical-nav bg-white' id='sidebar'>
            <Navbar />
          </div>

          <div class='page-content' id='content'>
            <div className='jumbotron overflow-cont'></div>
          </div>
        </div>
      </>
    );
  }
}

export default Report;
