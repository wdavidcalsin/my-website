import { Typography } from '@mui/material';
import styled, { keyframes } from 'styled-components';

export const gradient = keyframes`
{
0% {
  background-position: 0 50%;
}
50% {
  background-position: 100% 50%;
}
100% {
  background-position: 0 50%;
}}
`;

export const AnimatedGradientText = styled(Typography)`
  background: linear-gradient(to right, #3b82f6, #ec4899);
  background-size: 300%;
  -webkit-background-clip: text !important;
  color: transparent;
  -webkit-text-fill-color: transparent;
  animation: ${gradient} 5s ease-in-out infinite;
`;
