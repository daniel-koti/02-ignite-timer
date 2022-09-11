import styled from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;
  color: ${(props) => props.theme['brand-100']};
  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;
`

const BaseInput = styled.input`
  background: transparent;
  height: 2.5rem;
  border: 0;
  border-bottom: 2px solid ${(props) => props.theme['brand-500']};
  font-size: 1.125rem;
  font-weight: bold;
  padding: 0 0.5rem;

  color: ${(props) => props.theme['brand-100']};

  &::placeholder {
    color: ${(props) => props.theme['brand-500']};
  }

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme['primary-500']};
  }
`

export const TaskInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
`

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

export const StartCountdownButton = styled.button`
  width: 100%;
  border: 0;
  padding: 1rem;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  font-weight: bold;

  cursor: pointer;

  background: ${(props) => props.theme['primary-500']};
  color: ${(props) => props.theme['brand-100']};

  transition: background 0.2s;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background: ${(props) => props.theme['primary-700']};
  }
`
