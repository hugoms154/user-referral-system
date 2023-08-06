import styled, { css } from 'styled-components';

export const H1 = styled.h1<{ center?: boolean }>`
  color: var(--dark-purple);
  font-size: 24px;
  font-weight: 500;
  line-height: 32px;
`;

// export const H2 = styled.h2`
//   color: ${Color.GrayXDark};
//   font-size: ${FontSize.XLarge};
//   font-family: ${FontFamily.Secondary};
//   font-weight: ${FontWeight.Bold};
//   margin: ${Spacing.Large} 0;

//   ${MediaQuery.md} {
//     font-size: ${FontSize.XXLarge};
//   }
// `;
// H2.displayName = 'H2';

// export const H3Height = FontSize.Large;
// export const H3 = styled.h3`
//   color: ${Color.GrayXDark};
//   font-size: ${H3Height};
//   font-family: ${FontFamily.Secondary};
//   font-weight: ${FontWeight.Bold};
//   margin: 0;

//   ${MediaQuery.md} {
//     font-size: ${FontSize.XLarge};
//   }
// `;
// H3.displayName = 'H3';

// export const H4Height = FontSize.Medium;
// export const H4 = styled.h4<{ light?: boolean; noMargin?: boolean }>`
//   color: ${(props) => (props.light ? Color.White : Color.GrayXDark)};
//   font-size: ${H4Height};
//   font-family: ${FontFamily.Secondary};
//   font-weight: ${FontWeight.Bold};
//   margin-top: 0;
//   margin-bottom: ${(props) => (props.noMargin ? 0 : Spacing.Small)};

//   ${MediaQuery.md} {
//     font-size: ${FontSize.Large};
//   }
// `;
// H4.displayName = 'H4';

// export const Body = styled.p<{ neutral?: boolean; center?: boolean }>`
//   color: ${(props) => (props.neutral ? Color.GrayDark : Color.GrayXDark)};
//   font-size: ${FontSize.Medium};
//   font-family: ${FontFamily.Primary};
//   font-weight: ${FontWeight.Normal};
//   line-height: 1.5;
//   margin: 0;
//   text-align: ${(props) => (props.center ? 'center' : 'left')};
// `;
// Body.displayName = 'Body';

// export const BodySecondary = styled.p<{ center?: boolean }>`
//   color: ${Color.GrayDark};
//   font-size: ${FontSize.Small};
//   font-family: ${FontFamily.Primary};
//   font-weight: ${FontWeight.Normal};
//   line-height: 1.5;
//   margin: 0;
//   text-align: ${(props) => (props.center ? 'center' : 'left')};
// `;

// export const TextLink = styled.a`
//   font-family: ${FontFamily.Primary};
//   font-weight: ${FontWeight.Bold};
//   font-size: ${FontSize.Medium};
//   text-decoration: underline;
//   color: ${Color.Secondary};
//   cursor: pointer;

//   &:hover {
//     color: ${Color.CallToAction};
//     text-decoration: underline;
//   }

//   ${MediaQuery.md} {
//     text-decoration: none;
//   }
// `;

interface InputLabelProps {
  hasError?: boolean;
}

export const InputLabel = styled.label<InputLabelProps>`
  color: var(--dark-purple);
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25rem;
`;

export const InputValue = styled.label`
  color: var(--dark-purple);
  display: block;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
`;

// export const InputDisabledCss = css`
//   color: ${Color.Gray};
//   font-size: ${FontSize.Small};
//   font-family: ${FontFamily.Primary};
//   font-weight: ${FontWeight.Bold};

//   /* https://stackoverflow.com/a/45209441/3670829 */
//   -webkit-text-fill-color: ${Color.GrayLight};
//   opacity: 1;
//   -webkit-opacity: 1;
// `;

// export const InputDisabled = styled.label`
//   ${InputDisabledCss};
// `;

// export const InputCaption = styled.label`
//   color: ${Color.GrayXDark};
//   font-size: ${FontSize.XSmall};
//   font-family: ${FontFamily.Primary};
//   font-weight: ${FontWeight.Bold};
//   margin-top: ${Spacing.XSmall};
//   display: block;
// `;

// export const InputCaptionError = styled(InputCaption)`
//   color: ${Color.Alert};
// `;

export const InputPlaceholder = styled.label`
  pointer-events: none;
  color: var(--light-gray);
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
`;

// export const DT = styled.dt`
//   display: inline;
//   color: ${Color.GrayXDark};
//   font-size: ${FontSize.Small};
//   font-family: ${FontFamily.Primary};
//   font-weight: ${FontWeight.Bold};
// `;

// export const DD = styled.dd`
//   display: inline;
//   color: ${Color.GrayXDark};
//   font-size: ${FontSize.Medium};
//   font-family: ${FontFamily.Primary};
//   font-weight: ${FontWeight.Bold};
//   margin: 0;
// `;

// // Utilities

// export const Ellipsed = styled.span`
//   max-width: 100%;
//   display: inline-block;
//   overflow: hidden;
//   white-space: nowrap;
//   text-overflow: ellipsis;
// `;

// export const TextCenter = styled.span`
//   text-align: center;
// `;
