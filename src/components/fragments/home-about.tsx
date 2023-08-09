import { FC, ReactElement } from "react";
import RunningText from "../elements/running-text";
import ContentLayout from "../layouts/content-layout";
import Button from "../elements/button";

import { LazyLoadImage } from "react-lazy-load-image-component";

const HomeAbout: FC = (): ReactElement => {
	const myRoutine: Array<string> = [
		"Developer",
		"Proggramer",
		"Footballer",
		"Learner",
	];
	return (
		<section className=' mb-16 overflow-hidden'>
			<ContentLayout classname='!py-0 !pb-10'>
				<figure className='shadow-md mb-8 w-full  lg:grid lg:place-items-center overflow-hidden h-80 md:h-[36rem]  order-2'>
					<LazyLoadImage
						loading='lazy'
						src='\assets\home\hero\hero.jpg'
						alt='mario'
						className='object-cover  w-full lg:w-[32rem] h-full'
					/>
				</figure>
				<aside className='order-1 flex flex-col align-middle justify-center'>
					<h1 className='font-extrabold text-transparent text-5xl md:text-6xl lg:text-7xl bg-clip-text primary-gradient mb-4 md:mb-6'>
						Holla, I'm Mario Rudy Silalahi
					</h1>
					<h2 className='text-4xl md:text-5xl  mb-4 md:mb-6 font-medium'>
						Lucky Frontend Web Developer
					</h2>
					<p className='text-sm md:text-base  mb-6 md:mb-8'>
						I'm an Informatics Enginner Student and a React / Next JS Lover, I
						also like to use other framework like Tailwind Css and more. Buy the
						way, I like{" "}
						<span className='font-bold text-sky-400 underline underline-offset-4'>
							Typescript
						</span>{" "}
						more then JS. Cheers. 🍻
					</p>
					<section className='flex gap-4'>
						<Button
							classify='primary'
							name='get-me'
							teks='GET IN TOUCH'
							type='button'
						/>
						<Button
							classify='secondary'
							name='download-cv'
							teks='DOWNLOAD CV'
							type='button'
						/>
					</section>
				</aside>
			</ContentLayout>
			<footer className='secondary-gradient  w-full  h-16 md:h-24  grid place-items-center'>
				<RunningText teks={myRoutine} />
			</footer>
		</section>
	);
};

export default HomeAbout;
