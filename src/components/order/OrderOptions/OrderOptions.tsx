import { options } from './OrderOptions.options';

import { Button } from '@/components/ui/Button/Button';

export const OrderOptions = () => (
	<ul className="flex w-full gap-3">
		{options.map((option, i) => (
			<li key={i} className="w-full">
				<Button variant="gray" fullWidth>
					{option}
				</Button>
			</li>
		))}
	</ul>
);
