import {Icon} from '../../pages/skills/SkillsStyled'
import { Div } from  './SkillsIconsStyled'

function SkillsIcons(props: { src:string, alt: string, name:string }) {
  return (
    <Div>
      <Icon>
        <img src={props.src} alt={props.alt}/>
        <span>{ props.name }</span>
      </Icon>
    </Div>
  )
}

export default SkillsIcons