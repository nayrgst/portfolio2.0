import Header from "../../components/header/Header";
import { PrincipalDiv, Div, Title} from "./SkillsStyled";
import SkillsIcons from "../../components/skillsIcons/skillsIcons";

function Skills() {
  return (
    <div id="container">
      <Header />
      <PrincipalDiv id="home-page">
        <Title>
          Habilidades
        </Title>
        <Div>
          <SkillsIcons src='https://img.icons8.com/glyph-neue/60/github.png' alt="Icone de git/github(gato) em preto e branco" name="Git/github"/>
          <SkillsIcons src='https://img.icons8.com/ios-filled/50/linux.png' alt="Icone do linux(pinguim) em preto e branco" name="Linux"/>
          <SkillsIcons src='https://img.icons8.com/ios-filled/50/typescript.png' alt="Icone do typescript(um TS) em preto e branco" name="TypeScript"/>
          <SkillsIcons src='https://img.icons8.com/ios-filled/50/javascript.png' alt="Icone do Javascript(um JS) em preto e branco" name="JavaScript"/>
          <SkillsIcons src='https://img.icons8.com/dotty/60/react.png' alt="icone do React em preto e branco" name="React"/>
          <SkillsIcons src='https://img.icons8.com/ios-filled/50/redux.png' alt="Icone do Redux em preto e branco" name="Redux"/>
          <SkillsIcons src='https://img.icons8.com/ios-filled/50/mysql.png' alt="Icone do mysql em preto e branco" name="SQL/MySQL"/>
          <SkillsIcons src='https://img.icons8.com/ios-filled/50/docker.png' alt="Icone do docker(uma baleia) em preto e branco" name="Docker"/>
          <SkillsIcons src='https://img.icons8.com/ios-filled/60/css3.png' alt="Icone do CSS(um escudo com um 3 no meio) em preto e branco" name="CSS"/>
          <SkillsIcons src='https://img.icons8.com/ios-filled/50/html-5--v1.png' alt="Icone do HTML(um escudo com um 5 no meio) em preto e branco" name="HTML"/>
          <SkillsIcons src='https://img.icons8.com/windows/60/node-js.png' alt="Icone do nodejs em preto e branco" name="Nodejs"/>
          <SkillsIcons src='https://img.icons8.com/ios-filled/50/api-settings.png' alt="Icone escrito API em preto e branco" name="API REST"/>
        </Div>
      </PrincipalDiv>
    </div>
  )
}

export default Skills;