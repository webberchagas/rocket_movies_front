import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  grid-template-rows: 116px auto;
  grid-template-areas: 
    "header"
    "content"
  ;
`;

export const Form = styled.form`
  grid-area: content;
  overflow-y: auto;
  margin: 40px 123px 0;

  display: flex;
  flex-direction: column;
  gap: 40px;

  .col-2 {
    display: flex;
    gap: 40px;
  }

  > header {
    a {
      text-decoration: none;
      display: flex;
      gap: 8px;
  
      color: ${({theme}) => theme.COLORS.PINK};
  
      margin-bottom: 24px;
    }
  
    h2 {
      font-size: 36px;
      line-height: 47px;
      color: ${({theme}) => theme.COLORS.WHITE};
    }

  }

  > div:nth-child(5) {
    margin-bottom: 101px;

    > a:first-child {
      background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
      color: ${({theme}) => theme.COLORS.PINK};
    }
  }

`;

export const Markers = styled.div`
  > span {
    font-size: 20px;
    line-height: 26px;
    color: ${({theme}) => theme.COLORS.GRAY_300};
  }

  > div:nth-child(2) {
    margin-top: 24px;
   
    width: 100%;
    
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
    border-radius: 8px;
    padding: 16px;

    display: flex;
    flex-wrap: wrap;
    gap: 24px;
  }
`;
