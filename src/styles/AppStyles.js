import styled from 'styled-components';

export const AppContainer = styled.div`
  padding: 20px;
  text-align: center;
`;

export const ToggleButton = styled.button`
  margin-bottom: 20px;
  background-color: ${({ theme }) => theme.buttonBg};
  color: ${({ theme }) => theme.buttonText};
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
