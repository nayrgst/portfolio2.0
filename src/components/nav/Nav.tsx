/* eslint-disable jsx-a11y/alt-text */
import * as React from 'react';
import Button from '../button/Button';
import { Link } from 'react-router-dom';
import {pushRotate as Menu, State} from 'react-burger-menu'
import { TiThMenu } from 'react-icons/ti'
import { styles } from '../../utils/Styles'
import { A, Icons } from './NavStyled'

class Nav extends React.Component {
  showSettings(event: {preventDefault(): void;}) {
    event.preventDefault();
  }

  render() {
    return (
      <Menu
        customBurgerIcon={<TiThMenu />}
        customCrossIcon={<TiThMenu />}
        onStateChange={this.onStateChange}
        itemListElement='div'
        pageWrapId='home-page'
        outerContainerId='container'
        styles={styles}
      >
          <Link to='/about'>
            <Button name='Sobre mim' props={String} />
          </Link>
          
          <Link to='/projects'>
            <Button name='Projetos' props={String} />
          </Link>

          <Link to='/skills'>
            <Button name='Habilidades' props={String} />
          </Link>
          
          <Link to='/leisure'>
            <Button name='Lazer' props={String} />
          </Link>
          <Icons>
            <A href="https://github.com/nayrgst" target='_blank' rel="noreferrer">
              <img src="https://img.icons8.com/3d-fluency/50/000000/github.png"/>
            </A>
            <A href='https://www.linkedin.com/in/nayrgst/' target='_blank' rel="noreferrer">
              <img src="https://img.icons8.com/3d-fluency/50/000000/linkedin.png"/>
            </A>
          </Icons>
      </Menu>
      )
    }
    onStateChange = (state: State): void => {
      console.log(state.isOpen)
    }
}

export default Nav;