import styled from "styled-components";

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 1rem;
  height: 100vh;
  background-color: var(--background);
`;

export const ContainerBoxes = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  gap: 1rem;
`;

export const LeftContainerBoxes = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 33.4%;
  gap: 1rem;
`;

export const LeftTopBox = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 100%;
  height: 17rem;
  border-radius: 1rem;
  background-color: var(--background-content);
  padding: 2rem;
`;

export const LeftBottomBox = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  border-radius: 1rem;
  background-color: var(--background-content);
  padding: 2rem;
`;

export const RightBox = styled.div`
  height: 100%;
  width: 66.6%;
  display: flex;
  flex-direction: row;
  align-self: flex-end;
  border-radius: 1rem;
  background-color: var(--green);
`;

export const LinkIconWrap = styled.div`
  width: 5rem;
  height: 5rem;
  padding: 1rem;
  border-radius: 6.25rem;
  background-color: var(--light-green);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`;

export const LeftBoxContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LeftTopBoxTitleWrapper = styled.div`
  margin-bottom: 1rem;
`;

export const LeftBottomBoxTitleWrapper = styled.div`
  margin-bottom: auto;
`;

export const PersonWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const RightBoxTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin: 2rem;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;
