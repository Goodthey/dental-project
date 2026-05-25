import { Link } from 'react-router-dom'

const navLinks = [
  { label: 'Услуги', to: '/services' },
  { label: 'Кейсы', to: '/cases' },
  { label: 'О нас', to: '/about' },
  { label: 'Контакты', to: '/contacts' },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06]">
      <div className="container-custom py-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-accent">
              <span className="text-xs font-bold text-white">D</span>
            </div>
            <span className="font-display text-sm font-bold text-text-primary">
              Dental<span className="gradient-text-blue">Agency</span>
            </span>
          </Link>

          {/* Nav + contacts */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm text-text-muted transition-colors hover:text-text-primary"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://t.me/placeholder"
              className="text-sm text-text-muted transition-colors hover:text-text-primary"
            >
              Telegram
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-text-muted shrink-0">© 2025 DentalAgency</p>
        </div>
      </div>
    </footer>
  )
}
