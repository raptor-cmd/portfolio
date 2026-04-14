import { render, screen, fireEvent } from '@testing-library/react'
import Header from '../Header'

// Mock de ThemeToggle
jest.mock('../ThemeToggle', () => ({
  ThemeToggle: () => <div data-testid="theme-toggle">ThemeToggle</div>,
}))

// Mock de MobileMenu
jest.mock('../MobileMenu', () => ({
  __esModule: true,
  default: ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => (
    isOpen ? (
      <div data-testid="mobile-menu">
        <button onClick={onClose}>Close</button>
      </div>
    ) : null
  ),
}))

describe('Header', () => {
  it('debería renderizar el logo y enlaces de navegación', () => {
    render(<Header />)
    expect(screen.getByText('MiBlog')).toBeInTheDocument()
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Blog')).toBeInTheDocument()
  })

  it('debería renderizar el botón del menú móvil', () => {
    render(<Header />)
    const mobileButton = screen.getByRole('button', { name: /abrir menú/i })
    expect(mobileButton).toBeInTheDocument()
  })

  it('debería mostrar el menú móvil al hacer click en el botón', () => {
    render(<Header />)
    const mobileButton = screen.getByRole('button', { name: /abrir menú/i })
    
    // El menú no debería estar visible inicialmente
    expect(screen.queryByTestId('mobile-menu')).not.toBeInTheDocument()
    
    // Hacer click en el botón
    fireEvent.click(mobileButton)
    
    // El menú debería estar visible
    expect(screen.getByTestId('mobile-menu')).toBeInTheDocument()
  })

  it('debería cerrar el menú móvil al hacer click en el botón de cerrar', () => {
    render(<Header />)
    const mobileButton = screen.getByRole('button', { name: /abrir menú/i })
    
    // Abrir el menú
    fireEvent.click(mobileButton)
    expect(screen.getByTestId('mobile-menu')).toBeInTheDocument()
    
    // Cerrar el menú
    const closeButton = screen.getByText('Close')
    fireEvent.click(closeButton)
    
    // El menú debería estar cerrado
    expect(screen.queryByTestId('mobile-menu')).not.toBeInTheDocument()
  })

  it('debería renderizar ThemeToggle', () => {
    render(<Header />)
    expect(screen.getByTestId('theme-toggle')).toBeInTheDocument()
  })
})
