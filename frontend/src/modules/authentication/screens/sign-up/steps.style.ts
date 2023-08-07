import styled from "styled-components";

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const LinkWrapper = styled.div`
  margin-bottom: 1rem;
`;

export const TitleWrapper = styled.div`
  margin-bottom: 0.5rem;
`;

export const DescriptionWrapper = styled.div`
  margin-bottom: 2.5rem;
`;

export const InputWrapper = styled.div`
  width: 100%;
`;

export const ObservationText = styled.div`
  color: var(--light-gray);
  font-family: "Inter";
  font-weight: 400;
  font-size: 0.75rem;
`;

export const DescriptionPasswordWrapper = styled.div`
  background-color: var(--light-purple);
  padding: 1rem 1.25rem;
  border-radius: 0.5rem;
  max-width: 28.625rem;
`;

export const DescriptionPasswordText = styled.p`
  font-family: "Inter";
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1rem;
  letter-spacing: -0.0037rem;
  color: var(--dark-purple);
`;

export const DescriptionPasswordTextSpan = styled.span`
  color: var(--gray);
`;
