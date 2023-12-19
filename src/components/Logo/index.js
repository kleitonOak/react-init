import logo from '../../images/logo.svg'
import styled from 'styled-components';

const LogoContainer = styled.div`
  display: flex;
  font-size: 30px;
`

const LogoImgContainer = styled.img`
  margin-right: 10px;
`

function Logo(){
    return (
      <LogoContainer>
        <LogoImgContainer src={logo} alt='Logo'/>
        <p> <strong>Books</strong></p>
      </LogoContainer>
    )
}

export default Logo;