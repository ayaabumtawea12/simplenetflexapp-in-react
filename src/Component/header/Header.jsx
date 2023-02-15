import React, { Component } from 'react';
import  './Header.css';

export default class Header extends Component {
  render() {
    return (
      <header className='header vh-100 d-flex justify-content-center align-items-center text-center'>
      <div className='content text-white'>
    <h1>Unimited movies, Tv showes,and more.</h1>
   <p>Match anywhere, Cancel anything</p>
      </div>

      </header>
    )
  }
}
