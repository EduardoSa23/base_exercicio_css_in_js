import { FormEvent, useState } from 'react'
import { Formulario, BotaoPesquisar, Campo } from './styles'

type Props = {
  aoPesquisar: (termo: string) => void
  children?: React.ReactNode
}

const FormVagas = ({ aoPesquisar, children }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <Formulario onSubmit={aoEnviarForm}>
      {children}
      <Campo
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <BotaoPesquisar type="submit">Pesquisar</BotaoPesquisar>
    </Formulario>
  )
}

export default FormVagas
