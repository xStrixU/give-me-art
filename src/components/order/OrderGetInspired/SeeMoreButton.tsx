import Image from 'next/image';

import RightArrowIcon from '@/assets/images/right-arrow-icon.png';

export const SeeMoreButton = () => (
	<button
		type="button"
		className="group flex items-center gap-2 text-xl font-semibold"
	>
		See More
		<Image
			src={RightArrowIcon}
			alt="Right arrow"
			className="transition-transform group-hover:translate-x-1"
		/>
	</button>
);
