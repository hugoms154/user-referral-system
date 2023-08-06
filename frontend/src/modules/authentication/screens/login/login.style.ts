import styled from "styled-components";

export const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Container = styled.div`
  display: flex;
  width: 28.625rem;
  padding: 2rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  border-radius: 1rem;

  background-color: var(--background-content);
  box-shadow: 0px 16px 48px -16px rgba(30, 26, 52, 0.1),
    0px 1px 2px 0px rgba(30, 26, 52, 0.05);
`;
