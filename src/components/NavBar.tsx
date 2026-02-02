import { useState } from 'react'
import styled from 'styled-components'
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa'
import logoDark from '../assets/icons/logo-dark.png'
import logoLight from '../assets/icons/logo-light.png'
import { useTheme } from '../hooks/useTheme'

const Styled = {
  Container: styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 40px 0 10px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    background: ${({ theme }) => theme.bg};
    transition: background 0.3s ease;

    @media (max-width: 768px) {
      padding: 0 20px 0 10px;
    }
  `,
  Logo: styled.img`
    height: 95px;
    width: 95px;

    @media (max-width: 768px) {
      height: 70px;
      width: 70px;
    }
  `,
  NavLinks: styled.div<{ $isOpen: boolean }>`
    display: flex;
    gap: 25px;

    @media (max-width: 768px) {
      display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
      flex-direction: column;
      position: absolute;
      top: 70px;
      right: 20px;
      padding: 20px;
      border-radius: 8px;
      background: ${({ theme }) => theme.card};
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
      gap: 15px;
    }
  `,
  NavLink: styled.a`
    text-decoration: none;
    color: ${({ theme }) => theme.text};
    font-size: 14px;
    font-weight: 450;
    text-transform: uppercase;
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.primary};
    }
  `,
  RightSection: styled.div`
    display: flex;
    align-items: center;
    gap: 25px;
  `,
  ThemeToggle: styled.button`
    background: none;
    border: none;
    cursor: pointer;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 20px;
      height: 20px;
      color: ${({ theme }) => theme.primary};
    }
  `,
  MenuButton: styled.button`
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    padding: 5px;

    svg {
      width: 24px;
      height: 24px;
      color: ${({ theme }) => theme.text};
    }

    @media (max-width: 768px) {
      display: block;
    }
  `,
}

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { isDarkMode, toggleTheme } = useTheme()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <Styled.Container>
      <Styled.Logo src={isDarkMode ? logoDark : logoLight} alt="Logo" />
      <Styled.RightSection>
        <Styled.NavLinks $isOpen={isMenuOpen}>
          <Styled.NavLink href="#about" onClick={closeMenu}>
            About
          </Styled.NavLink>
          <Styled.NavLink href="#skills" onClick={closeMenu}>
            Skills
          </Styled.NavLink>
          <Styled.NavLink href="#experience" onClick={closeMenu}>
            Experience
          </Styled.NavLink>
          <Styled.NavLink href="#projects" onClick={closeMenu}>
            Projects
          </Styled.NavLink>
        </Styled.NavLinks>
        <Styled.ThemeToggle onClick={toggleTheme} aria-label="Toggle theme">
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </Styled.ThemeToggle>
        <Styled.MenuButton onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </Styled.MenuButton>
      </Styled.RightSection>
    </Styled.Container>
  )
}

export default NavBar
