  import styled from 'styled-components';

  export const Container = styled.button`
    display: flex;
    flex-direction: column;
    gap: 15px;

    width: 100%;
    height: 222px;

    background-color: rgba(255, 133, 155, 0.05);
    color: ${({theme}) => theme.COLORS.WHITE};
    
    border: none;
    border-radius: 16px;
    padding: 32px;
    margin-bottom: 24px;
    text-align: left;

    > p {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;

      font-size: 16px;
      color: ${({theme}) => theme.COLORS.GRAY_300};
    }
  `
  export const Header = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: fit-content;

    > h1 {
      font-size: 24px;
      font-weight: 700;
    }

    > div {
      svg {
        height: 12px;
        margin-right: 6px;
        color: ${({theme}) => theme.COLORS.PINK};
      }
    }

  `