/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        nyati: {
          // Primary brand colors - exact hex from the Nyati Cement brand manual
          navy: '#173158',
          orange: '#F49545',
          green: '#239557',

          // Extended color palette
          'dark-blue': '#293f63',  // Existing dark blue
          'light-orange': '#feb47b', // Existing light orange
          cream: '#fff7ed',     // Existing cream
          grey: '#64748b',      // Existing grey
          'light-grey': '#f8fafc', // Existing light grey
          'dark-grey': '#334155', // Existing dark grey
        },
        // Tint/shade scales for the brand colors, anchored on the exact
        // brand manual hex (navy at 900, orange at 500, green at 700 -
        // their natural lightness), interpolated smoothly around it.
        orange: {
          50: '#FAF4EF',
          100: '#F2E2D4',
          200: '#F2CFB1',
          300: '#F8BB88',
          400: '#F6A866',
          500: '#F49545', // Brand orange
          600: '#F17914',
          700: '#C5600C',
          800: '#934809',
          900: '#623006',
        },
        navy: {
          50: '#F1F4F8',
          100: '#D5DEEB',
          200: '#B2C6E3',
          300: '#8BADE1',
          400: '#6996D8',
          500: '#487ECF',
          600: '#3169BC',
          700: '#28569B',
          800: '#204479',
          900: '#173158', // Brand navy
        },
        green: {
          50: '#F1F9F4',
          100: '#D3EBDE',
          200: '#AEE4C7',
          300: '#84E2AF',
          400: '#61DA98',
          500: '#3ED281',
          600: '#2BB86C',
          700: '#239557', // Brand green
          800: '#1B7142',
          900: '#124D2D',
        },
        // Grayscale extensions for consistency
        white: '#ffffff',
        black: '#000000',
        // Nyati gray scale - consistent gray palette
        'nyati-gray': {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-merriweather)', 'serif'], 
        futura: ['Futura', 'var(--font-inter)', 'sans-serif'], // Add Futura for branding elements
      },
      backgroundImage: {
        'hero-pattern': "url('/images/hero-bg.jpg')",
        'nyati-pattern': "url('/images/nyati-pattern.jpg')",
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out forwards',
        'slide-up': 'slideUp 0.5s ease-in-out forwards',
        'slide-in-right': 'slideInRight 0.5s ease-in-out forwards',
        'bounce-slow': 'bounce 3s infinite',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'rotate-in': 'rotateIn 0.7s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        rotateIn: {
          '0%': { transform: 'rotate(-5deg) scale(0.9)', opacity: '0' },
          '100%': { transform: 'rotate(0) scale(1)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'strong': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'inner-soft': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        '128': '32rem',
      },
      zIndex: {
        '-10': '-10',
        '60': '60',
        '70': '70',
      },
      transitionDuration: {
        '2000': '2000ms',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}