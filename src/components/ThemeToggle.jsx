import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light')

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <button
      className={`relative w-14 h-8 flex items-center rounded-full transition-all duration-300 shadow-inner
        ${theme === 'dark' ? 'bg-neutral' : 'bg-primary'}`}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      aria-label="Toggle Theme"
    >
      <div
        className={`absolute w-6 h-6 rounded-full  text-sm flex items-center justify-center shadow-md transition-all duration-300
          ${theme === 'dark' ? 'translate-x-6 rotate-180 bg-primary' : 'translate-x-1 bg-neutral'}`}
      >
        {theme === 'dark' ? '☀' : '🌙'}
      </div>
    </button>
  )
}
