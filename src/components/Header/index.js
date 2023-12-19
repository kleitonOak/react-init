import Logo from '../Logo';
import Menu from '../Menu'
import Icon from '../Icon'
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #FFF;
  display: flex;
  justify-content: center;
`

function Header(){
    return (
      <HeaderContainer>
        <Logo/>
        <Menu/>
        <Icon/>
      </HeaderContainer>
    )
}

export default Header