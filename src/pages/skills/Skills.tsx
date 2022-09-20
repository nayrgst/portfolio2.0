import React from 'react';
import Button from '../../components/button/Button';
import { Link } from 'react-router-dom';

function Skills() {
  return (
    <h1>
      Skills
      <Link to='/'>
        <Button name='Home' props={String}/>
      </Link>
    </h1>
  )
}

export default Skills;