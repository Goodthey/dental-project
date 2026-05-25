import { type ChangeEvent } from 'react'
import { cn } from '@/lib/utils'

interface Props {
  value: string
  onChange: (value: string) => void
  className?: string
  required?: boolean
}

function formatPhone(raw: string): string {
  const digits = raw.replace(/\D/g, '').slice(0, 11)

  // Убираем ведущую 7 или 8 если пользователь начал вводить с неё
  const normalized = digits.startsWith('8')
    ? '7' + digits.slice(1)
    : digits.startsWith('7')
    ? digits
    : digits.length > 0
    ? '7' + digits
    : ''

  const d = normalized.slice(1) // убираем 7, работаем с 10 цифрами

  let result = ''
  if (normalized.length > 0) result += '+7'
  if (d.length > 0) result += ' (' + d.slice(0, 3)
  if (d.length >= 3) result += ') ' + d.slice(3, 6)
  if (d.length >= 6) result += '-' + d.slice(6, 8)
  if (d.length >= 8) result += '-' + d.slice(8, 10)

  return result
}

export default function PhoneInput({ value, onChange, className, required }: Props) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value)
    onChange(formatted)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Разрешаем: Backspace, Delete, Tab, стрелки, Ctrl+A/C/V/X
    const allowed = ['Backspace', 'Delete', 'Tab', 'ArrowLeft', 'ArrowRight', 'Home', 'End']
    if (allowed.includes(e.key)) return
    if (e.ctrlKey || e.metaKey) return
    // Блокируем всё кроме цифр
    if (!/\d/.test(e.key)) e.preventDefault()
  }

  return (
    <input
      type="tel"
      inputMode="numeric"
      placeholder="+7 (___) ___-__-__"
      value={value}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      required={required}
      maxLength={18}
      className={cn(
        'w-full rounded-xl border border-white/[0.08] bg-bg px-4 py-3 text-sm text-text-primary placeholder:text-text-muted outline-none transition-colors focus:border-accent/40 focus:ring-1 focus:ring-accent/20',
        className
      )}
    />
  )
}
