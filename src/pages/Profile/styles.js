import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  > header {
    width: 100%;
    height: 144px;

    background-color: rgba(255, 133, 155, 0.05);
    display: flex;
    padding-left: 144px;
    
    a {
      text-decoration: none;
      color: ${({theme}) => theme.COLORS.PINK};

      display: flex;
      align-items: center;

      svg {
        margin-right: 8px;
      }
    }
  }
`;

export const Form = styled.form`
  max-width: 340px;
  margin: 0 auto;

  > div + div {
    margin-top: 8px;
  }

  > a {
    margin-top: 24px;
  }

  > div:nth-child(4){
    margin-top: 24px;
  }
`;

export const Avatar = styled.div`
  width: 168px;
  height: 168px;

  margin: -87px auto 64px;

  position: relative;

  > img {
    width: 100%;
    border-radius: 50%;
  }

  > label {
    width: 48px;
    height: 48px;
    border-radius: 50%;

    background-color: ${({theme}) => theme.COLORS.PINK};
    position: absolute;
    bottom: 7px;
    right: 7px;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;
      color: ${({theme}) => theme.COLORS.BACKGROUND_700};
    }
  }
`;