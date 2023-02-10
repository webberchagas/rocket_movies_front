import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 116px 133px auto;
  grid-template-areas: 
    "header"
    "newmovie"
    "content"
  ;
    > div:nth-child(2){
      display: flex;
      justify-content: space-between;
      align-items: center;
    
      margin: 48px 0 37px;
      padding: 0 123px;
    
      h2 {
        font-weight: 400;
      }

      a {
        flex-basis: 210px;
      }
    }
`

export const Section = styled.section`
  margin: 0 123px;
  overflow-y: auto;
`; 