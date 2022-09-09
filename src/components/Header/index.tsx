import { HeaderContainer, ToggleTheme } from './styles'
import { Timer, Scroll, Sun } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

import logoIgnite from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <div>
        <img src={logoIgnite} alt="" />
        <ToggleTheme>
          <Sun size={24} />
        </ToggleTheme>
      </div>
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
