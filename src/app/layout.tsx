import { Raleway } from 'next/font/google';

import { Header } from '@/components/layout/Header/Header';

import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import '@/assets/styles/globals.css';

export const metadata: Metadata = {
	title: 'Give Me Art',
	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
};

const raleway = Raleway({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-raleway',
});

const RootLayout = ({ children }: { readonly children: ReactNode }) => (
	<html lang="en" className={raleway.variable}>
		<body>
			<Header />
			{children}
		</body>
	</html>
);

export default RootLayout;
