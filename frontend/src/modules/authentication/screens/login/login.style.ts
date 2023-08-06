import styled from "styled-components";

export const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Container = styled.div`
  display: flex;
  width: 28.75rem;
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

type CheckBoxContainerProps = {
  checked?: boolean;
};

export const CheckboxContainer = styled.div<CheckBoxContainerProps>`
  margin-top: 1rem;
  margin-bottom: 1.5rem;

  display: flex;
  align-items: center;
`;

export const HiddenCheckbox = styled.input.attrs({
  type: "checkbox",
})<CheckBoxContainerProps>`
  border: 0;
  clip: rect(0 0 0 0);
  height: 0.0625rem;
  margin: -0.0625rem;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 0.0625rem;
`;

export const CheckBoxText = styled.label<CheckBoxContainerProps>`
  color: var(--dark-purple);
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25rem;
`;

export const Checkbox = styled.div<CheckBoxContainerProps>`
  margin-right: 0.75rem;
  display: flex;
  width: 1rem;
  height: 1rem;
  background: ${(props) =>
    props.checked ? "var(--green)" : "var(--background-content)"};
  border-radius: 0.25rem;
  border-width: 0.0625rem;
  border-style: solid;
  border-color: ${(props) =>
    props.checked ? "transparent" : "var(--light-gray-border)"};
  transition: all 150ms;

  align-items: center;
  justify-content: center;
`;

export const FormContainer = styled.div`
  width: 100%;
`;

export const MessageIconWrapper = styled.div`
  position: fixed;
  bottom: 0px;
  right: 0px;
  cursor: pointer;
`;
