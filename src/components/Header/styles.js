import styled from 'styled-components';

export const Container = styled.div`
  grid-area: header;
  
  width: 100%;
  height: 116px;
  padding: 24px 123px;

  display: flex;
  align-items: center;
  gap: 64px;


  border-bottom-width: 1px;
  border-bottom-color: ${({theme}) => theme.COLORS.GRAY_100};
  border-bottom-style: solid;
  
  > h1 {
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    color: ${({theme}) => theme.COLORS.PINK};
  }

  > input {
    flex: 1;

    width: 100%;
    height: 56px;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
    color: ${({theme}) => theme.COLORS.WHITE};

    padding: 0 24px;
    font-size: 14px;
    line-height: 18px;

    border-radius: 10px;
    border: none;
  }
` 

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;

  > div {
    display: flex;
    align-items: end;
    flex-direction: column;

    strong {
      font-size: 14px;
      font-weight: 700;
      color: ${({theme}) => theme.COLORS.WHITE};
    }

    button {
      font-size: 14px;
      font-weight: 400;
      color: ${({theme}) => theme.COLORS.GRAY_300};
      background-color: transparent;
      border: 0;
    }
  }

  > a img {
    height: 64px;
    width: 64px;

    border-radius: 50%;
    border: 1px solid ${({theme}) => theme.COLORS.GRAY_100};
  }
`