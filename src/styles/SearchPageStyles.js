import styled from 'styled-components';

export const ResultsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
`;

export const AlbumCard = styled.div`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  padding: 10px;
  border-radius: 10px;
  text-align: center;
  width: 200px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  img {
    max-width: 100%;
    border-radius: 10px;
  }
`;
