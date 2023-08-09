import { FC, ReactElement } from "react";
import { TLayoutProps } from "./types";

interface ActivitiesLayoutProps extends TLayoutProps {
	title: string;
	subtitle: string;
	id?: string;
}

const ActivitiesLayout: FC<ActivitiesLayoutProps> = ({
	children,
	subtitle,
	title,
	classname,
	id,
}): ReactElement => {
	return (
		<section className={`${classname} mb-8 `} id={id}>
			<header className='mb-10'>
				<h1 className='font-bold text-3xl md:text-4xl lg:text-5xl  mb-1 primary-gradient text-transparent bg-clip-text'>
					{title}
				</h1>
				<p className='text-xs md:text-sm text-neutral-200'>{subtitle}</p>
			</header>

			{children}
		</section>
	);
};

export default ActivitiesLayout;
