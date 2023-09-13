import Image from 'next/image';

import { Button } from '@/components/ui/Button/Button';

import LockIconImage from '@/assets/images/lock-icon.png';
import ScrollingImage from '@/assets/images/scrolling.png';

export const OrderPreviewRightSection = () => (
	<div className="relative flex w-full flex-col items-center justify-center gap-2 bg-neutral-200 pl-10 pr-4">
		<p className="font-semibold">MINIMALISTIC</p>
		<Image
			src={ScrollingImage}
			alt="Scrolling"
			className="absolute left-1.5 top-1/2 -translate-y-1/2"
		/>
		<Button variant="primary-shadow" fullWidth>
			CARTOON
		</Button>
		<p className="flex items-center gap-2 font-semibold">
			<Image src={LockIconImage} alt="Lock icon" />
			ARTISTIC
		</p>
	</div>
);
