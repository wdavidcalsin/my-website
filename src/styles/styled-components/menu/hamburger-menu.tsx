import styled from 'styled-components';

type HamburgerMenuProps = {
  clicked: boolean;
};

export const HamburgerMenu = styled.span<HamburgerMenuProps>`
  position: relative;
  background-color: ${(props) =>
    props.clicked ? 'transparent' : props.theme.palette.secondary.contrastText};
  width: 3rem;
  height: 2px;
  display: inline-block;
  transition: all 0.3s;
  &::before,
  &::after {
    content: '';
    background-color: ${(props) => props.theme.palette.secondary.contrastText};
    width: 2.5rem;
    height: 2px;
    display: inline-block;
    position: absolute;
    left: 0;
    transition: all 0.3s;
    border-radius: 5rem;
  }
  &::before {
    top: ${(props) => (props.clicked ? '0' : '-0.8rem')};
    transform: ${(props) => (props.clicked ? 'rotate(135deg)' : 'rotate(0)')};
  }
  &::after {
    top: ${(props) => (props.clicked ? '0' : '0.8rem')};
    transform: ${(props) => (props.clicked ? 'rotate(-135deg)' : 'rotate(0)')};
  }
`;
