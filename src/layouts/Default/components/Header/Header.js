import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  background-image: linear-gradient(90deg, #DE6262, #FFB88C);
  height: 40px;
  flex: 100%;
`;

const LogoContainer = styled.div`
  padding: 5px;
`;

const Logo = styled.i`
  color: #fff;
  font-size: 24px;
`;

const LogoText = styled.span`
  color: #fff;
  font-size: 24px;
  margin-left: 5px;
`;

const Header = () => (
  <StyledHeader>
    <LogoContainer>
      <Logo className="fab fa-github" />
      <LogoText>
        Best of Repos
      </LogoText>
    </LogoContainer>
  </StyledHeader>
);

export { Header };
export default Header;
