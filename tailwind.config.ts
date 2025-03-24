
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				buff: {
					DEFAULT: '#00FFAA',
					dark: '#00CC88',
					light: '#33FFBB',
					foreground: '#080A1A'
				},
				games: {
					valorant: '#FD4556',
					fortnite: '#9D4DFF',
					minecraft: '#62B47A',
					csgo: '#F89F1B'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			boxShadow: {
				'neon': '0 0 5px theme("colors.buff.DEFAULT"), 0 0 20px theme("colors.buff.DEFAULT")',
				'neon-sm': '0 0 2px theme("colors.buff.DEFAULT"), 0 0 10px theme("colors.buff.DEFAULT")',
				'neon-lg': '0 0 10px theme("colors.buff.DEFAULT"), 0 0 30px theme("colors.buff.DEFAULT")',
				'glow': '0 0 20px rgba(0, 255, 170, 0.5)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				'pulse-gentle': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.7' },
				},
				'shimmer': {
					'0%': { backgroundPosition: '-500px 0' },
					'100%': { backgroundPosition: '500px 0' },
				},
				'rotate-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' },
				},
				'scale-up': {
					'0%': { transform: 'scale(0.9)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' },
				},
				'scale-down': {
					'0%': { transform: 'scale(1.1)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' },
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				'slide-in-bottom': {
					'0%': { transform: 'translateY(20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' },
				},
				'slide-in-left': {
					'0%': { transform: 'translateX(-20px)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' },
				},
				'slide-in-right': {
					'0%': { transform: 'translateX(20px)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' },
				},
				'number-count': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'pulse-gentle': 'pulse-gentle 2s ease-in-out infinite',
				'shimmer': 'shimmer 3s linear infinite',
				'rotate-slow': 'rotate-slow 8s linear infinite',
				'scale-up': 'scale-up 0.5s ease-out forwards',
				'scale-down': 'scale-down 0.5s ease-out forwards',
				'fade-in': 'fade-in 0.5s ease-out forwards',
				'slide-in-bottom': 'slide-in-bottom 0.5s ease-out forwards',
				'slide-in-left': 'slide-in-left 0.5s ease-out forwards',
				'slide-in-right': 'slide-in-right 0.5s ease-out forwards',
				'number-count': 'number-count 0.5s ease-out forwards',
			},
			backgroundImage: {
				'hero-pattern': 'linear-gradient(to bottom, rgba(8, 10, 26, 0.9), rgba(8, 10, 26, 1)), url("/hero-bg.png")',
				'grid-pattern': 'radial-gradient(rgba(0, 255, 170, 0.1) 1px, transparent 1px)',
				'buff-gradient': 'linear-gradient(135deg, #00FFAA 0%, #00CC88 100%)',
				'blur-gradient': 'linear-gradient(180deg, rgba(0, 255, 170, 0.15) 0%, rgba(0, 255, 170, 0) 100%)',
				'dark-gradient': 'linear-gradient(180deg, rgba(8, 10, 26, 0) 0%, rgba(8, 10, 26, 1) 100%)',
			},
			fontSize: {
				'title-2xl': ['3.5rem', { lineHeight: '1.1' }],
				'title-xl': ['2.75rem', { lineHeight: '1.1' }],
				'title-lg': ['2.25rem', { lineHeight: '1.2' }],
				'title-md': ['1.75rem', { lineHeight: '1.25' }],
				'title-sm': ['1.5rem', { lineHeight: '1.3' }],
			},
			backgroundSize: {
				'grid': '40px 40px',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
