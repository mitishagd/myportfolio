import styled, { css } from 'styled-components'

const baseButtonStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 20px;
  font-size: 14px;
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;
  transition:
    transform 0.2s ease,
    opacity 0.2s ease;

  &:hover {
    transform: scale(1.1);
    opacity: 0.9;
    filter: brightness(1.2);
  }
`

export const PrimaryButton = styled.a`
  ${baseButtonStyles}
  background-color: ${({ theme }) => theme.secondary};
  color: white;
  border: none;
`

export const SecondaryButton = styled.a`
  ${baseButtonStyles}
  background-color: transparent;
  color: ${({ theme }) => theme.secondary};
  border: 1px solid ${({ theme }) => theme.secondary};
`
