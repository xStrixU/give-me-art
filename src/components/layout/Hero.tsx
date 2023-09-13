import Image from 'next/image';

import { OrderStepper } from '../order/OrderStepper/OrderStepper';

import LogoImage from '@/assets/images/logo.png';

export const Hero = () => (
	<section className="mx-auto flex max-w-3xl flex-col items-center gap-5 bg-hero bg-right-top bg-no-repeat px-4 pb-10 pt-24 md:bg-none">
		<Image src={LogoImage} alt="Logo" />
		<div className="flex flex-col items-center text-center text-2xl">
			<p>Generate your ART</p>
			<p>by typing in field below any words</p>
			<p>that comes to your mind!</p>
		</div>
		<OrderStepper />
	</section>
);
