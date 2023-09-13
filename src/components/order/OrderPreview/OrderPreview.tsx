import { OrderPreviewLeftSection } from './OrderPreviewLeftSection';
import { OrderPreviewRightSection } from './OrderPreviewRightSection';

export const OrderPreview = () => (
	<article className="flex h-36 overflow-hidden rounded-xl shadow-md">
		<OrderPreviewLeftSection />
		<OrderPreviewRightSection />
	</article>
);
