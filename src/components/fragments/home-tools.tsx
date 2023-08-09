import { FC, ReactElement } from "react";
import ContentLayout from "../layouts/content-layout";
import {
	SiTypescript,
	SiJavascript,
	SiNextdotjs,
	SiTailwindcss,
	SiPostman,
	SiGithub,
	SiRedux,
} from "react-icons/si";
import { FaReact, FaFigma } from "react-icons/fa";
import { TbBrandVscode } from "react-icons/tb";

const HomeTools: FC = (): ReactElement => {
	const techTools = [
		{
			name: "Typescript",
			icon: (
				<SiTypescript className='text-4xl mb-2 rounded-md shadow-md text-blue-500' />
			),
		},
		{
			name: "Javacript",
			icon: (
				<SiJavascript className='text-4xl mb-2 rounded-md shadow-md text-yellow-500' />
			),
		},
		{
			name: "ReactJs",
			icon: (
				<FaReact className='text-4xl mb-2 rounded-md shadow-md text-sky-500' />
			),
		},
		{
			name: "NextJs",
			icon: (
				<SiNextdotjs className='text-4xl mb-2 rounded-md shadow-md text-neutral-300' />
			),
		},
		{
			name: "TailwindCss",
			icon: (
				<SiTailwindcss className='text-4xl mb-2 rounded-md shadow-md text-blue-500' />
			),
		},
		{
			name: "Redux",
			icon: (
				<SiRedux className='text-4xl mb-2 rounded-md shadow-md text-purple-400' />
			),
		},
		{
			name: "VS Code",
			icon: (
				<TbBrandVscode className='text-4xl mb-2 rounded-md shadow-md text-blue-500' />
			),
		},
		{
			name: "Figma",
			icon: (
				<FaFigma className='text-4xl mb-2 rounded-md shadow-md text-sky-500' />
			),
		},
		{
			name: "Postman",
			icon: (
				<SiPostman className='text-4xl mb-2 rounded-md shadow-md text-amber-700' />
			),
		},
		{
			name: "Github",
			icon: (
				<SiGithub className='text-4xl mb-2 rounded-md shadow-md text-neutral-400s' />
			),
		},
	];

	return (
		<ContentLayout classname='!grid-cols-1 pt-10'>
			<header className=' mb-8 md:mb-4 lg:mb-0' id='Tools'>
				<h1 className='font-bold text-3xl md:text-4xl lg:text-5xl mb-2'>
					Tech & Tools
				</h1>
				<p className='text-xs md:text-sm text-neutral-300'>
					Berikut daftar Teknologi dan Sotfwere yang saya gunakan
				</p>
			</header>
			<section className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 px-0 gap-4 mb-4'>
				{techTools.map(({ name, icon }, index) => {
					return (
						<main
							className='bg-neutral-700 px-2 py-6 grid place-items-center'
							key={index}>
							{icon}
							<h1 className='font-bold text-xs'>{name}</h1>
						</main>
					);
				})}
			</section>
		</ContentLayout>
	);
};

export default HomeTools;
