import styled, { css } from "styled-components";

type InputRootProps = {
  error: boolean;
  outline?: boolean;
};

export const InputRoot = styled.div<InputRootProps>`
  background: var(--background-content);

  display: flex;
  height: 3.5rem;
  align-items: center;
  margin: 0.5rem 0 1rem 0;
  align-self: stretch;
  padding: 0 1.5rem;

  border-width: 0.125rem;
  border-radius: 0.5rem;
  border-style: solid;
  border-color: var(--light-gray-border);

  ${({ outline }) =>
    outline &&
    css`
      border-color: var(--dark-purple);
    `}

  ${({ error }) =>
    error &&
    css`
      border-color: var(--red);
    `};

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

export const InputTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const LinkText = styled.a`
  color: var(--link);
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25rem;
  cursor: pointer;

  &:hover {
    color: var(--dark-purple);
    transition: 0.3s linear;
  }
`;
