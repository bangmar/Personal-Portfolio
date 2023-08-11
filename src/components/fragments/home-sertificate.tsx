import ContentLayout from "../layouts/content-layout";
import { FC, ReactElement, useState } from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";

const HomeSertificate: FC = (): ReactElement => {
	const sertificatesSource = [
		"msib",
		"kedaireka",
		"asprak",
		"progate",
		"sre",
		"upgrading",
		"dialofa",
		"futsal",
	];

	const [isOpen, setOpen] = useState<string>("");

	return (
		<ContentLayout classname='!py-20'>
			<aside className='mb-2' id='Sertificate'>
				<h1 className='font-bold text-transparent bg-clip-text mb-2 primary-gradient text-xl md:text-2xl'>
					Learning Enthusiasm
				</h1>
				<h1 className='font-bold text-3xl md:text-4xl lg:text-5xl'>
					Web Development, React Js, Next JS Addict
				</h1>
			</aside>
			<main>
				<p className=' text-sm md:text-base mb-8'>
					Sebagai seorang mahasiswa aktif, saya mengikuti kegiatan baik untuk
					meingkatkan pengalaman dan pengetahuan maupun sekaedar meluangkan
					hobby untuk memperluas relasi dan melatih softskill
				</p>
				<main className='flex gap-10 flex-wrap items-center border-b pb-10 border-b-neutral-500 mb-10'>
					<section>
						<h1 className='font-bold text-sm secondary-gradient text-transparent bg-clip-text mb-2'>
							CURRENT GPA
						</h1>
						<p className='font-bold text-4xl'>4 POIN</p>
					</section>
					<section>
						<h1 className='font-bold text-sm secondary-gradient text-transparent bg-clip-text mb-2'>
							Web Experience
						</h1>
						<p className='font-bold text-4xl'>1+ Years</p>
					</section>
					<section>
						<h1 className='font-bold text-sm secondary-gradient text-transparent bg-clip-text mb-2'>
							Sertificate
						</h1>
						<p className='font-bold text-4xl'>4+ Earned</p>
					</section>
				</main>
				<footer className=' overflow-x-auto snap-x snap-mandatory '>
					<section className=' whitespace-nowrap w-full h-full '>
						{sertificatesSource.map((sertificate, index) => {
							return (
								<figure
									key={index}
									onClick={() => setOpen(sertificate)}
									className='snap-start inline-block w-64 h-44 mr-4 '>
									<LazyLoadImage
										loading='lazy'
										src={`assets/home/sertif/${sertificate}.jpg`}
										alt={`${sertificate}-image`}
										className='h-full w-full cursor-pointer'
									/>
								</figure>
							);
						})}
					</section>
				</footer>
			</main>
			<section
				className={`${
					isOpen !== "" ? "fixed visible opacity-100" : "hidden opacity-0"
				} transition-all duration-300 ease-in top-0 bottom-0 left-0 right-0 z-50 backdrop-blur-sm `}
				onClick={() => setOpen("")}>
				<section className='w-full h-full flex justify-center items-center'>
					<figure className='h-full py-10 px-8'>
						<LazyLoadImage
							loading='lazy'
							src={`assets/home/sertif/${isOpen}.jpg`}
							alt={`test-image`}
							className='h-full w-full object-contain cursor-pointer'
						/>
					</figure>
				</section>
			</section>
		</ContentLayout>
	);
};

export default HomeSertificate;
