import styled from "styled-components";

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  height: 100vh;
  background-color: var(--background);
`;

export const Container = styled.div`
  border-radius: 1rem;
  display: flex;
  background-color: var(--background-content);
  height: 100%;
  width: 100%;
`;

type ProgressBarProps = {
  $progress: number;
};

export const ProgressBar = styled.div<ProgressBarProps>`
  height: 0.25rem;
  background-color: var(--purple);
  width: ${({ $progress }) => $progress}%;
  transition: width 0.5s ease;
  max-width: 100%;
`;

export const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px solid var(--gray-disabled);
  padding: 2rem;
`;

export const FooterNextStepWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-left: auto;
`;
