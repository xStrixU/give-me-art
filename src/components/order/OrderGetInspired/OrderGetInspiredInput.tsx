import { Input } from '@/components/ui/Input';

export const OrderGetInspiredInput = () => (
	<Input
		type="text"
		placeholder="Type something"
		defaultValue="punk heart, ghotic"
		fullWidth
		background="200"
		rightSection={
			<button
				type="button"
				className="h-full w-28 bg-neutral-200 bg-gradient-to-b from-neutral-300"
			>
				ARTISTIC
			</button>
		}
	/>
);
