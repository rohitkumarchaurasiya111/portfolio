import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    screens: {
      xs: '375px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
      '3xl': '1920px',
    },
    extend: {
      colors: {
        // Premium dark-tech palette, wired through CSS variables so the entire site
        // re-themes between dark (default) and light mode by toggling a single class
        // on <html> — see src/index.css for the variable definitions. Token names
        // (blue/cyan/violet/etc.) are kept stable so no component markup needs to change.
        bg: 'rgb(var(--color-bg) / <alpha-value>)',
        surface: 'rgb(var(--color-surface) / <alpha-value>)',
        card: 'rgb(var(--color-card) / <alpha-value>)',
        elevated: 'rgb(var(--color-elevated) / <alpha-value>)',
        border: {
          // Alpha is baked into these two variables already (never used with a
          // Tailwind opacity modifier in this codebase), so no <alpha-value> here.
          DEFAULT: 'rgb(var(--color-border))',
          strong: 'rgb(var(--color-border-strong))',
        },
        ink: {
          DEFAULT: 'rgb(var(--color-ink) / <alpha-value>)',
          secondary: 'rgb(var(--color-ink-secondary) / <alpha-value>)',
          muted: 'rgb(var(--color-ink-muted) / <alpha-value>)',
        },
        accent: {
          blue: 'rgb(var(--color-accent-blue) / <alpha-value>)', // electric blue — primary
          cyan: 'rgb(var(--color-accent-cyan) / <alpha-value>)', // cyan — supporting highlight
          violet: 'rgb(var(--color-accent-violet) / <alpha-value>)', // violet — secondary
        },
        signal: {
          green: 'rgb(var(--color-signal-green) / <alpha-value>)',
          amber: 'rgb(var(--color-signal-amber) / <alpha-value>)',
          red: 'rgb(var(--color-signal-red) / <alpha-value>)',
        },
      },
      fontFamily: {
        sans: ['"Inter Variable"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono Variable"', '"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        display: ['clamp(2.75rem, 3vw + 2rem, 5.5rem)', { lineHeight: '1.02', letterSpacing: '-0.03em' }],
        h1: ['clamp(2.25rem, 2vw + 1.75rem, 3.75rem)', { lineHeight: '1.06', letterSpacing: '-0.025em' }],
        h2: ['clamp(1.75rem, 1.4vw + 1.4rem, 2.75rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        h3: ['clamp(1.25rem, 0.6vw + 1.1rem, 1.625rem)', { lineHeight: '1.25', letterSpacing: '-0.01em' }],
        body: ['1rem', { lineHeight: '1.65' }],
        small: ['0.875rem', { lineHeight: '1.55' }],
        caption: ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.02em' }],
      },
      spacing: {
        1.5: '0.375rem',
        18: '4.5rem',
        30: '7.5rem',
      },
      borderRadius: {
        sm: '6px',
        md: '8px',
        lg: '12px',
        xl: '16px',
      },
      maxWidth: {
        content: '1200px',
      },
      boxShadow: {
        card: 'var(--shadow-card)',
        glow: 'var(--shadow-glow)',
        'glow-violet': 'var(--shadow-glow-violet)',
        'glow-lg': 'var(--shadow-glow-lg)',
      },
      backgroundImage: {
        'grid-fade': 'var(--bg-grid-fade)',
        'accent-line': 'var(--bg-accent-line)',
        'dot-grid': 'var(--bg-dot-grid)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-dot': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.35' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        dash: {
          to: { strokeDashoffset: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'flow-particle': {
          '0%': { offsetDistance: '0%', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { offsetDistance: '100%', opacity: '0' },
        },
        'orb-drift': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(2%, -3%) scale(1.05)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s cubic-bezier(0.16,1,0.3,1) both',
        'pulse-dot': 'pulse-dot 2s ease-in-out infinite',
        marquee: 'marquee 28s linear infinite',
        float: 'float 6s cubic-bezier(0.45,0,0.55,1) infinite',
        'orb-drift': 'orb-drift 14s ease-in-out infinite',
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
} satisfies Config
