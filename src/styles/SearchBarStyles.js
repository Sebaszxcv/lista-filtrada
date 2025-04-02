import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  padding: 10px;
  border: 2px solid ${({ theme }) => theme.primary};
  border-radius: 5px;
  outline: none;
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.primary};
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  &:disabled {
    background-color: grey;
    cursor: not-allowed;
  }
`;
