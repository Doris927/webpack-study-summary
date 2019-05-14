import styled from 'styled-components';

export const FooterWrapper = styled.div`
  z-index: 1;
  position: relative;
  height: 100px;
  margin: 0 80px;
  width: 100%;
  @media (max-width: 700px) {
    background: palevioletred;
  }
`;

export const ContactBox = styled.div`
  color: #ccc;
  width: 960px;
  margin: 20px auto;
  text-align: center;
`;
