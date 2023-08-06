import styled from "styled-components";

type InputRootProps = { error: boolean };

export const InputRoot = styled.div<InputRootProps>`
  border-radius: 0.5rem;
  ${({error}) => error ? "border: 1px solid var(--red);" : "border: 1px solid var(--light-gray-border);"}
  
  background: var(--background-content);
  
  display: flex;
  height: 3.5rem;
  padding: 0rem 0.25rem;
  align-items: center;
  margin: 0.5rem 0 1rem 0;
  align-self: stretch;
  padding: 0 1.5rem;

  & input {
    height: 100%;
    width: 100%;
    outline: none;
    border: none;
  }
`;

export const ButtonPassword = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  border: 0;
  background: transparent;
  outline: none;
  :focus {
    box-shadow: none;
  }
`;
