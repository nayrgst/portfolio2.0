import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import TypeString from '../../components/typeWriter/typeWriter';
import profile from '../../imagens/profile.jpg';
import Age from '../../utils/Age';
import { LeftDiv, Name, PrincipalDiv, Profile, Resume, RightDiv, Title } from './HomeStyled';


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
          <TypeString text='Pedro Ryan'/>
          </Name>
          <Title>
              <h2>Desenvolverdor Front-End!</h2> 
          </Title>
          <Resume>
            Olá, sou Pedro Ryan tenho <Age birthdate='2001-10-11'/> anos,<br /> nasci em 
            <strong> Brasília - DF</strong>, e hoje moro em <br /><strong>Águas Lindas - GO </strong>
            junto com meus pais e meu irmão. Sou apaixonado por tecnologia desde
            que me entendo por gente, agora estou à procura do meu primeiro emprego como desenvolvedor <br/>
            <strong>Front-End</strong>
          </Resume>
       </RightDiv> 
      </PrincipalDiv>
      <Footer />
    </div>
  )
}


export default Home;