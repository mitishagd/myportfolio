import { useState } from 'react'
import styled from 'styled-components'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '../assets/icons/logo.png'

const Styled = {
  Container: styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 40px 15px 20px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    background: #fff;

    @media (max-width: 768px) {
      padding: 10px 20px;
    }
  `,
  Logo: styled.img`
    height: 60px;
    width: 60px;

    @media (max-width: 768px) {
      height: 50px;
      width: 50px;
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
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
      gap: 15px;
    }
  `,
  NavLink: styled.a`
    text-decoration: none;
    color: #333;
    font-size: 14px;
    font-weight: 450;
    text-transform: uppercase;

    &:hover {
      color: #10b981;
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
      color: #333;
    }

    @media (max-width: 768px) {
      display: block;
    }
  `,
}

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <Styled.Container>
      <Styled.Logo src={logo} alt="Logo" />
      <Styled.MenuButton onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </Styled.MenuButton>
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
    </Styled.Container>
  )
}

export default NavBar
