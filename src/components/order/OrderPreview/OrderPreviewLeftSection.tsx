import Image from 'next/image';

import ArrowBackIconImage from '@/assets/images/arrow-back-icon.png';
import OrderPreviewImage from '@/assets/images/order-preview.png';

export const OrderPreviewLeftSection = () => (
	<div className="relative flex w-full flex-col items-center justify-center bg-neutral-100 leading-tight">
		<button type="button" className="absolute left-2 top-3">
			<Image src={ArrowBackIconImage} alt="Arrow back" />
		</button>
		<p className="text-center font-medium">Style preview</p>
		<Image src={OrderPreviewImage} alt="Order preview" />
	</div>
);
