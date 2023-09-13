import Image from 'next/image';

import { OrderGetInspiredInput } from './OrderGetInspiredInput';
import { SeeMoreButton } from './SeeMoreButton';

import { Button } from '@/components/ui/Button/Button';

import GetInspiredImage from '@/assets/images/get-inspired.png';

export const OrderGetInspired = () => (
	<article className="flex flex-col items-center rounded-xl bg-neutral-100 p-4">
		<h2 className="text-xl font-bold text-primary">GET INSPIRED</h2>
		<p className="text-xl font-medium">BEST USERS DESIGNS</p>
		<SeeMoreButton />
		<Image src={GetInspiredImage} alt="Get inspired" />
		<div className="my-5 w-full">
			<OrderGetInspiredInput />
		</div>
		<div className="w-44">
			<Button variant="primary" fullWidth>
				BUY
			</Button>
		</div>
	</article>
);
