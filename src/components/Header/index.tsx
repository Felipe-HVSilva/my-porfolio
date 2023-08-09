import { GithubLogo, LinkedinLogo } from 'phosphor-react'

import { Container } from './styles'

export function Header() {
  return (
    <Container>
      <ul>
        <li>
          <a href="https://github.com/Felipe-HVSilva" target='_blank'>
            <GithubLogo size={32} weight="fill" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/felipe-henrique-b988201b1/" target='_blank'>
            <LinkedinLogo size={32} weight="fill" />
          </a>
        </li>
      </ul>
    </Container>
  )
}