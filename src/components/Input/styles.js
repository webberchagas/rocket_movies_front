import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex: 1;

  width: 100%;
  height: 56px;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
  color: ${({theme}) => theme.COLORS.WHITE};

  padding: 0 24px;
  border-radius: 10px;

  > svg {
    font-size: 18px;
    margin-right: 16px;
  }

  > input {
    width: 100%;
    height: 100%;

    border: none;
    background: transparent;
    color: ${({theme}) => theme.COLORS.WHITE};
  }

`