import styled from 'styled-components'

export const HistoryContainer = styled.main`
  flex: 1;
  padding: 3.5rem;
  display: flex;
  flex-direction: column;

  overflow-y: auto;

  h1 {
    font-size: 1.5rem;
    color: ${(props) => props.theme['brand-100']};
  }
`

export const HistoryList = styled.div`
  flex: 1;
  overflow: auto;
  margin-top: 2rem;

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;

    thead th {
      background: ${(props) => props.theme['panel-600']};
      padding: 1rem;
      text-align: left;
      color: ${(props) => props.theme['brand-100']};
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 1.5rem;
      }

      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 1.5rem;
      }
    }

    tbody td {
      background-color: ${(props) => props.theme['panel-700']};
      border-top: 4px solid ${(props) => props.theme['panel-800']};
      padding: 1rem;
      font-size: 0.875rem;

      line-height: 1.6;

      &:first-child {
        padding-left: 1.5rem;
        width: 50%;
      }

      &:last-child {
        padding-right: 1.5rem;
      }
    }
  }
`

const STATUS_COLORS = {
  yellow: 'yellow-500',
  green: 'primary-500',
  red: 'red-500',
} as const

interface StatusProps {
  statusColor: keyof typeof STATUS_COLORS
}

// O valor de statusColor será as chaves do objecto STATUS_COLORS

export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '';
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: ${(props) =>
      props.theme[STATUS_COLORS[props.statusColor]]};
  }
`
