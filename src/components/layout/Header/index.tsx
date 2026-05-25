import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Услуги', to: '/services' },
  { label: 'Кейсы', to: '/cases' },
  { label: 'О нас', to: '/about' },
  { label: 'Контакты', to: '/contacts' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/90 backdrop-blur-xl border-b border-border shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="container-custom">
        <div className="flex h-16 items-center justify-between md:h-18">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-accent">
              <span className="text-sm font-bold text-white">D</span>
            </div>
            <span className="font-display text-base font-700 text-text-primary">
              Dental<span className="gradient-text-blue">Agency</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  cn(
                    'text-sm font-medium transition-colors duration-200',
                    isActive ? 'text-text-primary' : 'text-text-secondary hover:text-text-primary'
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden items-center gap-3 md:flex">
            <Link
              to="/contacts"
              className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:bg-accent-hover hover:shadow-glow-accent"
            >
              Получить аудит
            </Link>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setOpen(!open)}
            className="flex md:hidden items-center justify-center w-9 h-9 rounded-lg text-text-secondary hover:text-text-primary transition-colors"
            aria-label="Меню"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border bg-white/95 backdrop-blur-xl md:hidden shadow-md">
          <div className="container-custom py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    'text-sm font-medium py-1 transition-colors',
                    isActive ? 'text-text-primary' : 'text-text-secondary'
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/contacts"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-lg bg-accent px-4 py-2.5 text-center text-sm font-medium text-white"
            >
              Получить аудит
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
