import styled from "styled-components";
import { Button } from "../button";

export const Container = styled.div`
  background-color: var(--dark-purple);
  max-width: 100%;
  border-radius: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 1rem;
`;

export const ContainerLogo = styled.div`
  display: flex;
  flex: 1;
  margin-right: auto;
  color: var(--dark-purple);
  cursor: pointer;
`;

export const ContainerOptions = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
`;

export const CopyButtonContainer = styled.div`
  min-width: 13.125rem;
  display: flex;
`;

export const CopyButton = styled(Button)`
  background-color: var(--background);
  color: var(--dark-purple);
`;

export const IconsWrapper = styled.div`
  cursor: pointer;
`;
