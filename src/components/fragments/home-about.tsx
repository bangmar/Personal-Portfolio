import { FC, ReactElement } from "react";
import RunningText from "../elements/running-text";
import ContentLayout from "../layouts/content-layout";

import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-scroll";
import { Link as RLink } from "react-router-dom";

const HomeAbout: FC = (): ReactElement => {
	const myRoutine: Array<string> = [
		"Programming",
		"Slicing UI",
		"Integrating API",
		"UI Design",
		"Problem Solvoing",
		"Team Work",
	];
	return (
		<section className=' mb-16 overflow-hidden' id='top'>
			<ContentLayout classname='!py-0 !pb-10'>
				<figure className='shadow-md mb-8 w-full  flex justify-end overflow-hidden h-80 md:h-[36rem]  order-2'>
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
						Lucky & Passionate Web Developer
					</h2>
					<p className='text-sm md:text-base  mb-6 md:mb-10 lg:mb-12'>
						Graduated from Informatics engineering with a focus on software
						development, especially websites. I Can be your{" "}
						<span className='font-bold text-yellow-400 group underline underline-offset-4 '>
							Frontend{" "}
						</span>
						and your{" "}
						<span className='font-bold group text-sky-400 underline underline-offset-4'>
							Backend.{" "}
						</span>
						By the way, i love Javascript. Cheers. 🍻
					</p>
					<section className='flex gap-4'>
						<Link
							spy={true}
							smooth={true}
							offset={-90}
							duration={500}
							to='Contact'
							className='secondary-gradient hover:primary-gradient border-transparent border-2  h-9 w-fit   px-4 rounded-full  shadow-md transition-all duration-150 ease-transition grid place-items-center'>
							GET IN TOUCH
						</Link>

						<RLink
							className='border-2  h-9 w-fit grid place-items-center  px-4 rounded-full  shadow-md transition-all duration-150 ease-transition border-neutral-400 hover:bg-neutral-800 hover:text-white-primary'
							to={"assets/home/cv/CV_MARIO RUDY SILALAHI.pdf"}
							target='_blank'
							type='application/octet-stream'
							download={"CV_MARIO RUDY SILALAHI.pdf"}>
							Download CV / Resume
						</RLink>
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
