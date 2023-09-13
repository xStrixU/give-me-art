'use client';

import { useState } from 'react';

import { HamburgerButton } from './HamburgerButton';
import { Navigation } from './Navigation/Navigation';

export const Header = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	return (
		<header className="absolute left-0 right-0 flex h-20 items-center px-6">
			<HamburgerButton
				isOpen={isMobileMenuOpen}
				onClick={() =>
					setIsMobileMenuOpen(isMobileMenuOpen => !isMobileMenuOpen)
				}
			/>
			<Navigation />
		</header>
	);
};
