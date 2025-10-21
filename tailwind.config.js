/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
  	extend: {
  		colors: {
  			// shadcn/ui colors
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
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			// Weaver Design System Colors
  			weaver: {
  				// Base colors
  				white: 'var(--weaver-white)',
  				black: 'var(--weaver-black)',
  				// Gray scale
  				gray: {
  					50: 'var(--weaver-gray-50)',
  					100: 'var(--weaver-gray-100)',
  					200: 'var(--weaver-gray-200)',
  					300: 'var(--weaver-gray-300)',
  					400: 'var(--weaver-gray-400)',
  					500: 'var(--weaver-gray-500)',
  					600: 'var(--weaver-gray-600)',
  					700: 'var(--weaver-gray-700)',
  					800: 'var(--weaver-gray-800)',
  					900: 'var(--weaver-gray-900)',
  					950: 'var(--weaver-gray-950)',
  				},
  				// Slate scale
  				slate: {
  					50: 'var(--weaver-slate-50)',
  					100: 'var(--weaver-slate-100)',
  					200: 'var(--weaver-slate-200)',
  					300: 'var(--weaver-slate-300)',
  					400: 'var(--weaver-slate-400)',
  					500: 'var(--weaver-slate-500)',
  					600: 'var(--weaver-slate-600)',
  					700: 'var(--weaver-slate-700)',
  					800: 'var(--weaver-slate-800)',
  					900: 'var(--weaver-slate-900)',
  					950: 'var(--weaver-slate-950)',
  				},
  				// Brand colors
  				red: {
  					50: 'var(--weaver-red-50)',
  					100: 'var(--weaver-red-100)',
  					200: 'var(--weaver-red-200)',
  					300: 'var(--weaver-red-300)',
  					400: 'var(--weaver-red-400)',
  					500: 'var(--weaver-red-500)',
  					600: 'var(--weaver-red-600)',
  					700: 'var(--weaver-red-700)',
  					800: 'var(--weaver-red-800)',
  					900: 'var(--weaver-red-900)',
  					950: 'var(--weaver-red-950)',
  				},
  				blue: {
  					50: 'var(--weaver-blue-50)',
  					100: 'var(--weaver-blue-100)',
  					200: 'var(--weaver-blue-200)',
  					300: 'var(--weaver-blue-300)',
  					400: 'var(--weaver-blue-400)',
  					500: 'var(--weaver-blue-500)',
  					600: 'var(--weaver-blue-600)',
  					700: 'var(--weaver-blue-700)',
  					800: 'var(--weaver-blue-800)',
  					900: 'var(--weaver-blue-900)',
  					950: 'var(--weaver-blue-950)',
  				},
  				green: {
  					50: 'var(--weaver-green-50)',
  					100: 'var(--weaver-green-100)',
  					200: 'var(--weaver-green-200)',
  					300: 'var(--weaver-green-300)',
  					400: 'var(--weaver-green-400)',
  					500: 'var(--weaver-green-500)',
  					600: 'var(--weaver-green-600)',
  					700: 'var(--weaver-green-700)',
  					800: 'var(--weaver-green-800)',
  					900: 'var(--weaver-green-900)',
  					950: 'var(--weaver-green-950)',
  				},
  				amber: {
  					50: 'var(--weaver-amber-50)',
  					100: 'var(--weaver-amber-100)',
  					200: 'var(--weaver-amber-200)',
  					300: 'var(--weaver-amber-300)',
  					400: 'var(--weaver-amber-400)',
  					500: 'var(--weaver-amber-500)',
  					600: 'var(--weaver-amber-600)',
  					700: 'var(--weaver-amber-700)',
  					800: 'var(--weaver-amber-800)',
  					900: 'var(--weaver-amber-900)',
  					950: 'var(--weaver-amber-950)',
  				},
  				// Semantic colors
  				bg: {
  					default: 'var(--weaver-bg-default)',
  					subtle: 'var(--weaver-bg-subtle)',
  					muted: 'var(--weaver-bg-muted)',
  					accent: 'var(--weaver-bg-accent)',
  				},
  				text: {
  					default: 'var(--weaver-text-default)',
  					subtle: 'var(--weaver-text-subtle)',
  					muted: 'var(--weaver-text-muted)',
  					disabled: 'var(--weaver-text-disabled)',
  				},
  				border: {
  					default: 'var(--weaver-border-default)',
  					subtle: 'var(--weaver-border-subtle)',
  					strong: 'var(--weaver-border-strong)',
  				},
  				primary: 'var(--weaver-primary)',
  				'primary-hover': 'var(--weaver-primary-hover)',
  				'primary-pressed': 'var(--weaver-primary-pressed)',
  				secondary: 'var(--weaver-secondary)',
  				'secondary-hover': 'var(--weaver-secondary-hover)',
  				'secondary-pressed': 'var(--weaver-secondary-pressed)',
  				success: 'var(--weaver-success)',
  				warning: 'var(--weaver-warning)',
  				danger: 'var(--weaver-danger)',
  				info: 'var(--weaver-info)',
  			}
  		},
  		fontFamily: {
  			sans: ['var(--weaver-font-inter)', 'system-ui', 'sans-serif'],
  			geist: ['var(--weaver-font-geist)', 'system-ui', 'sans-serif'],
  			mono: ['var(--weaver-font-mono)', 'monospace'],
  			serif: ['var(--weaver-font-alexandria)', 'serif'],
  		},
  		spacing: {
  			'weaver-xxxs': 'var(--weaver-space-xxxs)',
  			'weaver-xxs': 'var(--weaver-space-xxs)',
  			'weaver-xs': 'var(--weaver-space-xs)',
  			'weaver-sm': 'var(--weaver-space-sm)',
  			'weaver-md': 'var(--weaver-space-md)',
  			'weaver-lg': 'var(--weaver-space-lg)',
  			'weaver-xl': 'var(--weaver-space-xl)',
  			'weaver-2xl': 'var(--weaver-space-2xl)',
  			'weaver-3xl': 'var(--weaver-space-3xl)',
  			'weaver-4xl': 'var(--weaver-space-4xl)',
  			'weaver-5xl': 'var(--weaver-space-5xl)',
  			'weaver-6xl': 'var(--weaver-space-6xl)',
  			'weaver-7xl': 'var(--weaver-space-7xl)',
  			'weaver-8xl': 'var(--weaver-space-8xl)',
  			'weaver-9xl': 'var(--weaver-space-9xl)',
  			'weaver-10xl': 'var(--weaver-space-10xl)',
  			'weaver-11xl': 'var(--weaver-space-11xl)',
  			'weaver-12xl': 'var(--weaver-space-12xl)',
  			'weaver-13xl': 'var(--weaver-space-13xl)',
  			'weaver-14xl': 'var(--weaver-space-14xl)',
  			'weaver-15xl': 'var(--weaver-space-15xl)',
  			'weaver-16xl': 'var(--weaver-space-16xl)',
  			'weaver-17xl': 'var(--weaver-space-17xl)',
  			'weaver-18xl': 'var(--weaver-space-18xl)',
  			'weaver-19xl': 'var(--weaver-space-19xl)',
  		},
  		borderRadius: {
  			'weaver-sm': 'var(--weaver-radius-sm)',
  			'weaver-md': 'var(--weaver-radius-md)',
  			'weaver-lg': 'var(--weaver-radius-lg)',
  			'weaver-xl': 'var(--weaver-radius-xl)',
  			'weaver-2xl': 'var(--weaver-radius-2xl)',
  			'weaver-3xl': 'var(--weaver-radius-3xl)',
  			'weaver-full': 'var(--weaver-radius-full)',
  		},
  		boxShadow: {
  			'weaver-sm': 'var(--weaver-shadow-sm)',
  			'weaver': 'var(--weaver-shadow)',
  			'weaver-md': 'var(--weaver-shadow-md)',
  			'weaver-lg': 'var(--weaver-shadow-lg)',
  			'weaver-xl': 'var(--weaver-shadow-xl)',
  			'weaver-2xl': 'var(--weaver-shadow-2xl)',
  		},
  		borderRadius: {
  			md: 'calc(var(--radius) - 2px)',
  			lg: 'var(--radius)',
  			sm: 'calc(var(--radius) - 4px)',
  			'weaver-sm': 'var(--weaver-radius-sm)',
  			'weaver-md': 'var(--weaver-radius-md)',
  			'weaver-lg': 'var(--weaver-radius-lg)',
  			'weaver-xl': 'var(--weaver-radius-xl)',
  			'weaver-2xl': 'var(--weaver-radius-2xl)',
  			'weaver-3xl': 'var(--weaver-radius-3xl)',
  			'weaver-full': 'var(--weaver-radius-full)',
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};