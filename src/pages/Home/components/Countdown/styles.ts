import styled from 'styled-components'

export const CountdownContainer = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  line-height: 8rem;
  color: ${(props) => props.theme['brand-100']};
  transition: ease-in-out 0.2s;

  display: flex;
  gap: 1rem;

  span {
    background: ${(props) => props.theme['panel-700']};
    padding: 2rem 1rem;
    border-radius: 8px;
  }

  @media (max-width: 768px) {
    font-size: 5rem;
    line-height: 2rem;
    transition: ease-in-out 0.2s;

    span {
      padding: 1rem 0;
      background: transparent;
    }
  }
`

export const Separator = styled.div`
  padding: 2rem 0;
  color: ${(props) => props.theme['primary-500']};

  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    width: 2rem;
    padding: 0.875rem 0;
  }
`
