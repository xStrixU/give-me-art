import defaultTheme from 'tailwindcss/defaultTheme';

import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{ts,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				hero: "url('/hero-image.png')",
			},
			colors: {
				primary: '#ce2b28',
			},
			fontFamily: {
				sans: ['var(--font-raleway)', ...defaultTheme.fontFamily.sans],
			},
		},
	},
} satisfies Config;
