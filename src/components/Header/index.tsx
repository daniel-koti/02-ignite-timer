import { useContext } from 'react'
import { HeaderContainer, ToggleTheme } from './styles'
import { Timer, Scroll, Sun, Moon } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

import logoIgnite from '../../assets/logo.svg'
import { ThemeContext } from '../../App'

export function Header() {
  const { toggleTheme, currentTheme } = useContext(ThemeContext)

  function handleToggleTheme() {
    toggleTheme()
  }

  return (
    <HeaderContainer>
      <div>
        <img src={logoIgnite} alt="" />
        {currentTheme === 'dark' ? (
          <ToggleTheme onClick={handleToggleTheme}>
            <Sun size={24} />
          </ToggleTheme>
        ) : (
          <ToggleTheme onClick={handleToggleTheme}>
            <Moon size={24} />
          </ToggleTheme>
        )}
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
