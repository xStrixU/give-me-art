import CartIconImage from '@/assets/images/cart-icon.png';
import HeartIconImage from '@/assets/images/heart-icon.png';
import UserIconImage from '@/assets/images/user-icon.png';

import type { StaticImageData } from 'next/image';

interface NavItem {
	label: string;
	href: string;
	image: StaticImageData;
}

export const navItems: NavItem[] = [
	{
		label: 'Saved',
		href: '#',
		image: HeartIconImage,
	},
	{
		label: 'Cart',
		href: '#',
		image: CartIconImage,
	},
	{
		label: 'Account',
		href: '#',
		image: UserIconImage,
	},
];
