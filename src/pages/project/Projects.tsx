import React from 'react';
import Button from '../../components/button/Button';
import { Link } from 'react-router-dom';

function Projects() {
  return (
    <h1>
      projects
      <Link to='/'>
        <Button name='Home' props={String}/>
      </Link>
    </h1>
  )
}

export default Projects;