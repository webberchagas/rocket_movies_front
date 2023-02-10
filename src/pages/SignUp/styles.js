import styled from 'styled-components';
import BackgroundImg from '../../assets/background.png'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  
  display: flex;
  align-items: stretch;
`;

export const Section = styled.section`
  padding-inline: 134px 163px;
  margin-top: -160px;

  display: flex;
  flex-direction: column;
  justify-content: center;

 
  > h1 {
    font-size: 48px;
    line-height: 63px;
    font-weight: 700;
    color: ${({theme}) => theme.COLORS.PINK}
  }

  > span {
    font-size: 14px;
    line-height: 18px;
    color: ${({theme}) => theme.COLORS.GRAY_300};

    margin-bottom: 48px;
  }

  a {
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 42px;

    font-size: 16px;
    color: ${({theme}) => theme.COLORS.PINK};

    svg {
      margin-right: 8px;
    }
  }
`;

export const Form = styled.form`
  width: 100%;

  > h2 {
    margin-bottom: 48px;
  }

  > div + div {
    margin-top: 8px;
  }

  & button:nth-child(5){
    margin-top: 48px;
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${BackgroundImg}) no-repeat center center;
  background-size: cover;

`;