import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import profile from '../../imagens/profile.jpg'
import {Title, Name, RightDiv, PrincipalDiv, Profile, LeftDiv, Resume} from './HomeStyled'

function Home() {
  return (
    <div id='container'>
    <Header />
    <PrincipalDiv id='home-page'>
      <LeftDiv>
        <Profile src={profile} alt='Jovem pardo, sorrido fazendo o sinal do ronaldinho'/>
      </LeftDiv>
      <RightDiv>
          <Name>
            <h1>PEDRO RYAN</h1>
          </Name>
          <Title>
              <h2>Desenvolverdor Front-End!</h2> 
          </Title>
          <Resume>
            Olá, sou Pedro Ryan tenho 20 anos,<br /> nasci em 
            <strong> Brasília - DF</strong>, e hoje moro em <br /><strong>Águas Lindas - GO </strong>
            junto com meus pais e meu irmão. Sou apaixonado por tecnologia desde
            que me entendo por gente, agora estou do meu primeiro emprego como desenvolvedor <strong>Front-End</strong>
          </Resume>
       </RightDiv> 
      </PrincipalDiv>
      <Footer />
    </div>
  )
}


export default Home;