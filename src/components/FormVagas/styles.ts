import { FormEvent, ReactNode } from 'react'
import styled from 'styled-components'
import { ButtonHTMLAttributes, InputHTMLAttributes } from 'react'

export const Formulario = styled.form<{
  onSubmit: (e: FormEvent<HTMLFormElement>) => void
  children?: ReactNode
}>`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: ${(props) => props.theme.corSecundaria};
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
`

export const BotaoPesquisar = styled.button<
  ButtonHTMLAttributes<HTMLButtonElement> & { children?: ReactNode }
>`
  background-color: ${(props) => props.theme.corPrincipal};
  border: 1px solid ${(props) => props.theme.corPrincipal};
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: ${(props) => props.theme.corSecundaria};
  margin-left: 8px;
  cursor: pointer;
`

export const Campo = styled.input<
  InputHTMLAttributes<HTMLInputElement> & { children?: ReactNode }
>`
  padding: 0 16px;
  outline-color: ${(props) => props.theme.corPrincipal};
`
