import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  
  width: 100%;
  height: 56px;
  padding: 14px 32px;

  font-size: 16px;
  line-height: 21px;
  font-weight: 500;
  
  background-color: ${({theme}) => theme.COLORS.PINK};
  color: ${({theme}) => theme.COLORS.BACKGROUND_800};

  border: none;
  border-radius: 8px;

  > svg {
    font-size: 20px;
  }
`;