import React from 'react';
import Button from '../../components/button/Button';
import { Link } from 'react-router-dom';

function Leisure() {
  return (
    <h1>
      Leisure
      <Link to='/'>
        <Button name='Home' props={String}/>
      </Link>
    </h1>
  )
}

export default Leisure;