import { FC, ReactElement } from "react";
import Card from "../elements/card";
import ContentLayout from "../layouts/content-layout";
import Button from "../elements/button";
import { Link } from "react-router-dom";

const HomeProjects: FC = (): ReactElement => {
	const projects = [
		{
			name: "AbangGas",
			thumb: "assets/home/projects/gagas.png",
			techs: ["Next Js", "JavaScript", "Material UI", "SASS"],
			link: "#",
		},
		{
			name: "Pertamina NRE",
			thumb: "assets/home/projects/pertamina.png",
			techs: ["Next Js", "SASS", "JavaScript"],
			link: "https://www.pertaminanre.com/",
		},
		{
			name: "Petrokimia Gresik",
			thumb: "assets/home/projects/petrokimia.png",
			techs: ["React Js", "Redux", "JavaScript", "Ant Design", "SASS"],
			link: "#",
		},
		{
			name: "GAIN Sistem Pangan Nasional",
			thumb: "assets/home/projects/gain.png",
			techs: ["Next Js", "JavaScript", "Material UI", "SASS"],
			link: "https://dspi.bappenas.go.id/",
		},
		{
			name: "Tanito",
			thumb: "assets/home/projects/tanito.png",
			techs: ["Next Js", "JavaScript", "Material UI", "SASS"],
			link: "#",
		},
		{
			name: "Zyrex Maveric",
			thumb: "assets/home/projects/zyrex.png",
			techs: ["Next Js", "Tailwind Css", "TypeScript", "Ant Design", "Recoil"],
			link: "https://maveric.zyrex.com/",
		},
		{
			name: "Kampus Gratis Website",
			thumb: "assets/home/projects/kg.png",
			techs: ["Next Js", "Tailwind Css", "TypeScript"],
			link: "https://github.com/magang-mknows/mknows-fe",
		},
		{
			name: "IoT Monitoring Dashboard",
			thumb: "assets/home/projects/iot.png",
			techs: ["Next Js", "Tailwind Css", "TypeScript"],
			link: "https://egrotek.id/login",
		},
	];

	return (
		<>
			<ContentLayout classname='!pt-8 !pb-2 !grid-cols-1 '>
				<header className='mb-6 text-center' id='Projects'>
					<h1 className='font-bold text-3xl md:text-4xl lg:text-5xl  mb-2 primary-gradient text-transparent bg-clip-text'>
						Projects
					</h1>
					<p className='text-xs md:text-sm text-neutral-200'>
						Here’s a showcase of my recent projects as a Frontend Web Developer,
						where I brought innovative ideas to life through clean, responsive
						design and interactive experiences. Dive into more of my work by
						visiting{" "}
						<Link
							to={"https://github.com/bangmar"}
							className='font-bold underline underline-offset-4 text-gradient-via1'
							target='_blank'>
							my repository here!
						</Link>
					</p>
				</header>
			</ContentLayout>
			<ContentLayout classname='xl:!grid-cols-2 lg:!grid-cols-1 !py-2 '>
				{projects.map(({ name, techs, thumb, link }, index) => {
					return (
						<Card key={index} link={link}>
							<Card.Image src={thumb} name={name} />
							<Card.Description title={name} subtitle='Tech'>
								<footer>
									<section className='flex gap-2 flex-wrap'>
										{techs.map((tech, index) => {
											return (
												<Button
													key={index}
													classify='primary'
													name={name}
													teks={tech}
													type='reset'
													classname='cursor-default'
												/>
											);
										})}
									</section>
								</footer>
							</Card.Description>
						</Card>
					);
				})}
			</ContentLayout>
		</>
	);
};

export default HomeProjects;
