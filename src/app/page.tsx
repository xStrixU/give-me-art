import { Hero } from '@/components/layout/Hero';
import { OrderGetInspired } from '@/components/order/OrderGetInspired/OrderGetInspired';
import { OrderInput } from '@/components/order/OrderInput';
import { OrderOptions } from '@/components/order/OrderOptions/OrderOptions';
import { OrderPreview } from '@/components/order/OrderPreview/OrderPreview';

const IndexPage = () => (
	<>
		<Hero />
		<section className="mx-auto flex max-w-3xl flex-col gap-6 px-4">
			<OrderInput />
			<OrderOptions />
			<OrderPreview />
			<OrderGetInspired />
		</section>
	</>
);

export default IndexPage;
