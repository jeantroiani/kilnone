import styled from 'styled-components';
import { COLORS } from '../colors';

export const Paragraph = styled.p`
font-family: 'Open Sans';
font-weight: normal;
font-size: 16px;
line-height: 22px;
letter-spacing: 0.1em;
color: ${COLORS.SILVER}
`;

const MainTitleBaseStyle = `
font-family: Homenaje;
font-style: normal;
font-weight: normal;
font-size: 72px;
line-height: 79px;
margin: 0 12px 0 0;
padding: 0;
text-transform: uppercase;
letter-spacing: 0.195em;
`;

export const MainTitle = styled.h1`
${MainTitleBaseStyle}
color: ${COLORS.WHITE}
`;

export const MainTitleCerise = styled.span`
${MainTitleBaseStyle}
display: inline-block;
color: ${COLORS.CERISE}
`;




