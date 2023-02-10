import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas: 
    "header"
    "content"
    ;

  > main {
    grid-area: content;
    margin: 40px 123px 0;
    overflow-y: auto;

    header {
      display: flex;
      flex-direction: column;
      gap: 24px;

      a {
        text-decoration: none;
        color: ${({theme}) => theme.COLORS.PINK};
  
        display: flex;
        align-items: center;
        cursor: pointer;
        
        svg {
          font-size: 20px;
          margin-right: 8px ;
        }
      }
  
      > div:nth-child(2) {
        display: flex;
        align-items: center;
        gap: 19px;

        h2 {
          font-size: 36px;
          font-weight: 500px;
        }
      }
  
      > div:nth-child(3) {
        display: flex;
        align-items: center;
        gap: 8px;
  
        img {
          height: 16px;
          width: 16px;
          border-radius: 50%;
        }
  
        svg {
          color: ${({theme}) => theme.COLORS.PINK};
        }
      }

    }

    aside {
      margin: 40px 0;
    }

    p {
      /* margin-top: 40px; */
      text-align: justify;
    }
  }
 `;