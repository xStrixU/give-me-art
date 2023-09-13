import Image from 'next/image';
import Link from 'next/link';

import { navItems } from './Navigation.items';

export const Navigation = () => (
	<nav className="ml-auto">
		<ul className="flex items-center gap-2.5">
			{navItems.map(({ label, href, image }) => (
				<li key={label}>
					<Link href={href} aria-label={label}>
						<Image src={image} alt={label} />
					</Link>
				</li>
			))}
		</ul>
	</nav>
);
