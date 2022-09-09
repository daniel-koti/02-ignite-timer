import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > div {
    display: flex;
    align-items: center;

    gap: 0.5rem;
  }

  nav {
    display: flex;
    gap: 0.5rem;

    a {
      width: 3rem;
      height: 3rem;

      display: flex;
      align-items: center;
      justify-content: center;

      color: ${(props) => props.theme['gray-100']};

      border-bottom: 3px solid transparent;
      border-top: 3px solid transparent;

      transition: border 0.1s;

      &:hover {
        border-bottom: 3px solid ${(props) => props.theme['green-500']};
      }

      &.active {
        color: ${(props) => props.theme['green-500']};
      }
    }
  }
`
export const ToggleTheme = styled.button`
  width: 3rem;
  height: 3rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  background: none;
  cursor: pointer;

  svg {
    color: ${(props) => props.theme['gray-100']};
  }
`
