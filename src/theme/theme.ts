const spacing = {
  xs: '8px',
  sm: '16px',
  md: '24px',
  lg: '40px',
  xl: '64px',
  '2xl': '80px',
  section: '100px',
}

export const lightTheme = {
  bg: '#FAF9F6', // Warm Cream
  text: '#022C22', // Deep Forest Green
  card: '#FFFFFF', // Pure white for elevation
  primary: '#059669', // Emerald-600 (High contrast for buttons)
  secondary: '#10b981', // Emerald-500
  muted: '#475569', // Slate-600 (Better readability for dates than dark green)
  border: '#E2E8F0', // Soft border for cards
  isDark: false,
  spacing,
}

export const darkTheme = {
  bg: '#022E27', // Deep Jungle Green
  text: '#ECFDF5', // Mint-50
  card: '#064E3B', // Emerald-900 (Lighter than bg to show depth)
  primary: '#34D399', // Emerald-400 (Pops against dark green)
  secondary: '#10b981', // Emerald-500
  muted: '#A7F3D0', // Emerald-200 (For secondary text)
  border: '#065F46', // Deep border
  isDark: true,
  spacing,
}

export type Theme = typeof darkTheme
