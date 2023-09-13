import { twMerge } from 'tailwind-merge';

const lineStyles =
	'ease h-0.5 w-6 rounded-full bg-black transition duration-300';

type HamburgerButtonProps = Readonly<{
	isOpen: boolean;
	onClick: () => void;
}>;

export const HamburgerButton = ({ isOpen, onClick }: HamburgerButtonProps) => (
	<button
		type="button"
		aria-label={`${isOpen ? 'Close' : 'Open'} menu`}
		aria-expanded={isOpen}
		onClick={onClick}
		className="flex h-8 w-8 flex-col items-center justify-center gap-1.5 sm:hidden"
	>
		<div className={twMerge(lineStyles, isOpen && 'translate-y-2 rotate-45')} />
		<div
			className={twMerge(lineStyles, isOpen ? 'opacity-0' : 'opacity-100')}
		/>
		<div
			className={twMerge(lineStyles, isOpen && '-translate-y-2 -rotate-45')}
		/>
	</button>
);
