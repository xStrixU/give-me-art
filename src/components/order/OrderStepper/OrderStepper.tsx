import { steps } from './OrderStepper.steps';
import { OrderStepperStep } from './OrderStepperStep';

export const OrderStepper = () => (
	<ol className="mt-4 flex w-full">
		{steps.map((step, i) => (
			<li key={i} className="w-full">
				<OrderStepperStep
					position={i + 1}
					label={step}
					isActive={i === 0}
					isLast={i === steps.length - 1}
				/>
			</li>
		))}
	</ol>
);
