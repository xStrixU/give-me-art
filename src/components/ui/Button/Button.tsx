import { twMerge } from 'tailwind-merge';

import { variants } from './Button.styles';

import type { Variant } from './Button.styles';

type ButtonProps = Readonly<{
	variant: Variant;
	fullWidth?: boolean;
}> &
	JSX.IntrinsicElements['button'];

export const Button = ({
	variant,
	fullWidth = false,
	...props
}: ButtonProps) => (
	<button
		type="button"
		className={twMerge(
			'h-14 rounded-lg px-2.5 text-lg font-medium',
			variants[variant],
			fullWidth && 'w-full',
		)}
		{...props}
	/>
);
