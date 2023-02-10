import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  min-width: 2px;
  
  background-color: ${({theme, isNew}) => isNew ? 'transparent' : theme.COLORS.BACKGROUND_700};
  border: ${({theme, isNew}) => isNew ? `3px dashed ${theme.COLORS.GRAY_300}` : 'none'};
  border-radius: 10px;

  > input {
    width: fit-content;
    border: none;
    background: none;

    color: ${({theme}) => theme.COLORS.WHITE};
  }
  
  > button {
    border: none;
    background: none;
    
    svg {
      color: ${({theme}) => theme.COLORS.PINK};
      font-size: 22px;
    }
  }

`;
