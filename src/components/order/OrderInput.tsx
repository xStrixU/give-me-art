import Image from 'next/image';

import { Input } from '@/components/ui/Input';

import PenIconImage from '@/assets/images/pen-icon.png';

export const OrderInput = () => (
	<Input
		type="text"
		placeholder="What do you want to create?"
		fullWidth
		rightSection={
			<button
				type="button"
				className="flex h-full w-20 items-center justify-center bg-primary"
			>
				<Image src={PenIconImage} alt="Pen icon" />
			</button>
		}
	/>
);
