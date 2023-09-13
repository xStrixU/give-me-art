import { twMerge } from 'tailwind-merge';

import type { ReactNode } from 'react';

type InputProps = Readonly<{
	fullWidth?: boolean;
	background?: '100' | '200';
	rightSection: ReactNode;
}> &
	JSX.IntrinsicElements['input'];

export const Input = ({
	fullWidth = false,
	background = '100',
	rightSection,
	...props
}: InputProps) => (
	<div
		className={twMerge(
			'relative flex rounded-r-xl shadow-md',
			fullWidth ? 'w-full' : 'w-fit',
		)}
	>
		<input
			className={twMerge(
				'h-14 w-full appearance-none rounded-l-xl border border-r-0 border-transparent px-4 text-xl outline-none transition-colors placeholder:text-neutral-400 focus:border-neutral-300',
				background === '100' && 'bg-neutral-100',
				background === '200' && 'bg-neutral-200',
			)}
			{...props}
		/>
		<div className="shrink-0 overflow-hidden rounded-r-xl">{rightSection}</div>
	</div>
);
