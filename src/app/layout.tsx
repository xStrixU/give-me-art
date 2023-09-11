import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import '@/assets/styles/globals.css';

export const metadata: Metadata = {
	title: 'Give Me Art',
	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
};

const RootLayout = ({ children }: { readonly children: ReactNode }) => (
	<html lang="en">
		<body>{children}</body>
	</html>
);

export default RootLayout;
