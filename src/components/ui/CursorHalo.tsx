import { useEffect, useState } from 'react'
import styled from 'styled-components'

import { useTheme } from '../../hooks/useTheme'

const Halo = styled.div<{ $x: number; $y: number }>`
  position: fixed;
  top: ${({ $y }) => $y}px;
  left: ${({ $x }) => $x}px;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(52, 211, 153, 0.15) 0%,
    rgba(52, 211, 153, 0.05) 40%,
    transparent 70%
  );
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 0;
  transition: opacity 0.3s ease;
`

const CursorHalo = () => {
  const { isDarkMode } = useTheme()
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    if (isDarkMode) {
      window.addEventListener('mousemove', handleMouseMove)
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [isDarkMode])

  if (!isDarkMode) return null

  return <Halo $x={position.x} $y={position.y} aria-hidden="true" />
}

export default CursorHalo
