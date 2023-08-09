import { FC, ReactElement } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import ContentLayout from "../layouts/content-layout";

const Footer: FC = (): ReactElement => {
	const socialLinks = [
		{
			icon: <FaLinkedinIn />,
			link: "linkedin.com/in/mario-rudy-silalahi-7bb657248/",
		},
		{ icon: <FaInstagram />, link: "https://www.instagram.com/mariorudyss/" },
		{ icon: <FaGithub />, link: "https://github.com/bangmar" },
	];

	const navgigationLinks = [
		{
			name: "Blog",
			link: "/",
		},
		{
			name: "Download CV",
			link: "/",
		},
	];

	return (
		<ContentLayout classname='!grid-cols-1 !mb-0 !pb-20'>
			<section className='flex flex-col gap-y-2 mb-6 md:mb-0 md:flex-row md:justify-between border-t-2 pt-8 border-neutral-600 md:items-center'>
				<h1 className='font-bold text-2xl'>MARIO S.</h1>
				<section className='flex gap-6 items-center text-sm '>
					{navgigationLinks.map(({ link, name }, index) => {
						return (
							<Link
								key={index}
								to={link}
								className='relative group text-neutral-400 hover:text-neutral-200 cursor-pointer ease-transition '>
								<span>{name}</span>
								<span className='absolute -bottom-1 left-0 w-0 h-0.5 primary-gradient ease-transition  group-hover:w-full'></span>
							</Link>
						);
					})}
				</section>
			</section>
			<section className='flex gap-y-4 flex-col md:flex-row md:justify-between md:items-center'>
				<h1 className='text-sm'>
					Design By <span className='font-bold'>Kartik Bansai 💙</span> at Figma
					Community
				</h1>
				<section className='flex gap-2'>
					{socialLinks.map(({ icon, link }, index) => {
						return (
							<Link
								key={index}
								to={link}
								target='_blank'
								className='grid place-items-center rounded-full h-9 w-9  primary-gradient'>
								<span className='grid place-items-center rounded-full h-8 w-9 hover:w-8 hover:h-9 ease-transition   bg-black-primary'>
									{icon}
								</span>
							</Link>
						);
					})}
				</section>
			</section>
		</ContentLayout>
	);
};

export default Footer;
