import React from 'react';
import Button from '../../components/button/Button';
import { Link } from 'react-router-dom';

function About() {
  return (
    <h1>
      About
      <Link to='/'>
        <Button name='Home' props={String}/>
      </Link>
    </h1>
  )
}

export default About;