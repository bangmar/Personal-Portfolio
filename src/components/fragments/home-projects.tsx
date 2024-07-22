import { FC, ReactElement } from "react";
import Card from "../elements/card";
import ContentLayout from "../layouts/content-layout";
import Button from "../elements/button";
import { Link } from "react-router-dom";

const HomeProjects: FC = (): ReactElement => {
	const projects = [
		{
			name: "Zyrex Maveric",
			thumb: "assets/home/projects/zyrex.png",
			techs: ["Next Js", "Tailwind Css", "TypeScript", "Ant Design"],
			link: "hhttps://maveric.zyrex.com/",
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
		{
			name: "Shoping Cart with Redux",
			thumb: "assets/home/projects/cart.png",
			techs: ["React Js", "Tailwind Css", "Redux"],
			link: "https://github.com/bangmar/Cart-Redux",
		},
		{
			name: "Midterm Project Art website",
			thumb: "assets/home/projects/retro.png",
			techs: ["React Js", "Tailwind Css", "Firebase"],
			link: "https://bangmar.github.io/retro_art_comunnity/",
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
						Berikut Projects terakhr yang saya kerjakan selama mengikuti
						kegiatan Magang Bersertifikat MSIB V di PT Menara Indonesia (M-Knows
						Consulting) yaitu pengembangan Platform Learning Experience Platform
						dan Kampus Gratis dari sisi antar muka atau Frontend Development dan
						bebrapa project pribadi untuk meningkatkan skill. atau bisa kunjungi
						repositori saya{" "}
						<Link
							to={"https://github.com/bangmar"}
							className='font-bold underline underline-offset-4 text-gradient-via1'
							target='_blank'>
							disini
						</Link>
					</p>
				</header>
			</ContentLayout>
			<ContentLayout classname='xl:!grid-cols-2 lg:!grid-cols-1 !py-2 '>
				{projects.slice(0, 2).map(({ name, techs, thumb, link }, index) => {
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
			<ContentLayout classname='xl:!grid-cols-3 !py-0'>
				{projects.slice(2).map(({ name, techs, thumb, link }, index) => {
					return (
						<Card key={index} link={link}>
							<Card.Image src={thumb} name={name} />
							<Card.Description title={name} subtitle='Tech' size='small'>
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
