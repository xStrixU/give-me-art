export type Variant = keyof typeof variants;

export const variants = {
	primary: 'bg-primary text-white',
	'primary-shadow': 'bg-primary text-white shadow-inner shadow-black/50',
	gray: 'bg-neutral-100',
} as const;
