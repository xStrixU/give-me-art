import { twMerge } from 'tailwind-merge';

type OrderStepperStepProps = Readonly<{
	position: number;
	label: string;
	isActive: boolean;
	isLast: boolean;
}>;

export const OrderStepperStep = ({
	position,
	label,
	isActive,
	isLast,
}: OrderStepperStepProps) => (
	<div className="relative flex w-full flex-col items-center">
		<div
			className={twMerge(
				'h-2 w-full',
				isActive ? 'bg-primary' : 'bg-neutral-300',
				position === 1 && 'rounded-l-full',
				isLast && 'rounded-r-full',
			)}
		/>
		<p
			className={twMerge(
				'absolute -top-3 flex h-8 w-8 items-center justify-center rounded-xl text-lg font-semibold',
				isActive ? 'bg-primary text-white' : 'bg-neutral-300 text-neutral-500',
			)}
		>
			{position}
		</p>
		<p
			className={twMerge(
				'mt-4 text-center text-lg font-medium leading-tight',
				isActive ? 'text-primary' : 'text-neutral-300',
			)}
		>
			{label}
		</p>
	</div>
);
