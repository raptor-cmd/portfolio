import { render, screen, fireEvent } from '@testing-library/react'
import { ThemeToggle } from '../ThemeToggle'

// Mock del ThemeContext
const mockToggleTheme = jest.fn()
let mockThemeValue: 'light' | 'dark' = 'light'

jest.mock('@/contexts/ThemeContext', () => ({
  useTheme: () => ({
    theme: mockThemeValue,
    toggleTheme: mockToggleTheme,
  }),
}))

describe('ThemeToggle', () => {
  beforeEach(() => {
    mockToggleTheme.mockClear()
    mockThemeValue = 'light'
  })

  it('debería renderizar el botón', () => {
    render(<ThemeToggle />)
    const button = screen.getByRole('button', { name: /toggle theme/i })
    expect(button).toBeInTheDocument()
  })

  it('debería mostrar el icono de luna cuando el tema es light', () => {
    render(<ThemeToggle />)
    const moonIcon = screen.getByRole('button').querySelector('svg')
    expect(moonIcon).toBeInTheDocument()
    expect(moonIcon?.querySelector('path[d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"]')).toBeInTheDocument()
  })

  it('debería llamar a toggleTheme cuando se hace click en el botón', () => {
    render(<ThemeToggle />)
    const button = screen.getByRole('button', { name: /toggle theme/i })
    fireEvent.click(button)
    expect(mockToggleTheme).toHaveBeenCalledTimes(1)
  })

  it('debería aplicar el className prop correctamente', () => {
    render(<ThemeToggle className="custom-class" />)
    const button = screen.getByRole('button', { name: /toggle theme/i })
    expect(button).toHaveClass('custom-class')
  })

  it('debería mostrar el icono de sol cuando el tema es dark', () => {
    mockThemeValue = 'dark'
    render(<ThemeToggle />)
    const sunIcon = screen.getByRole('button').querySelector('svg')
    expect(sunIcon).toBeInTheDocument()
    expect(sunIcon?.querySelector('path[d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"]')).toBeInTheDocument()
  })
})
