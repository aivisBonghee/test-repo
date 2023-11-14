'use client';
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.section`
  h2 {
    font-size: 2rem;
    color: yellow;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <h2>안녕</h2>
    </FooterContainer>
  );
}

export default Footer;
