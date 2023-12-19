import profile from '../../images/perfil.svg';
import bag from '../../images/sacola.svg';
import styled from 'styled-components';

const IconLiContainer = styled.li`
  margin: 20px;
  width: 25px;
`

const IconsUlContainer = styled.ul`
  display: flex;
  text-align: center;
`

const icons = [profile, bag];
function Icon(){
    return (
        <IconsUlContainer>
          {
            icons.map((icon)=>(
              <IconLiContainer><img src={icon} alt=''></img></IconLiContainer>
            ))
          }
        </IconsUlContainer>
    )
}

export default Icon;