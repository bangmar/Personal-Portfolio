import { FC, ReactElement } from "react";
import ContentLayout from "../layouts/content-layout";
import { Disclosure, Transition } from "@headlessui/react";
import ActivitiesLayout from "../layouts/activities-layout";
import { EducationExperience, worksExperience } from "./const";
const HomeActivities: FC = (): ReactElement => {
	return (
		<ContentLayout classname='!gap-20 !py-0 !pt-10'>
			<ActivitiesLayout
				id='Experience'
				title='Works Experiences'
				subtitle='Click to see my Works Activities'>
				<main className='flex flex-col gap-6' data-aos='zoom-in'>
					{worksExperience.map(({ company, jobs, role, time }, index) => {
						return (
							<Disclosure key={index} as='section'>
								<Disclosure.Button
									as='header'
									className='flex hover:bg-neutral-800 hover:pl-4 transition-all ease-in-out justify-between cursor-pointer items-center border-b border-neutral-500 pb-4 pt-2'>
									<section>
										<h1 className='font-bold text-sm md:text-base mb-1'>
											{company}
										</h1>
										<p className='text-xs md:text-sm text-neutral-300'>
											{role}
										</p>
									</section>
									<section>
										<h1 className='text-xs md:text-sm text-neutral-400'>
											{time}
										</h1>
									</section>
								</Disclosure.Button>

								<Transition
									enter='transition duration-100 ease-out'
									enterFrom='transform scale-95 opacity-0'
									enterTo='transform scale-100 opacity-100'
									leave='transition duration-75 ease-out'
									leaveFrom='transform scale-100 opacity-100'
									leaveTo='transform scale-95 opacity-0'>
									<Disclosure.Panel
										as='main'
										className='flex flex-col gap-4 px-6 py-4 bg-neutral-800/80 transition-all duration-300 ease-in-out'>
										{jobs.map((job, index) => {
											return (
												<li key={index} className='text-xs md:text-sm'>
													{job}
												</li>
											);
										})}
									</Disclosure.Panel>
								</Transition>
							</Disclosure>
						);
					})}
				</main>
			</ActivitiesLayout>
			<ActivitiesLayout title='Education' subtitle='Click to see my Education '>
				<main className='flex flex-col gap-6' data-aos='zoom-in'>
					{EducationExperience.map(({ dept, jobs, school, time }, index) => {
						return (
							<Disclosure key={index} as='section'>
								<Disclosure.Button
									as='header'
									className='flex hover:bg-neutral-800 hover:pl-4 transition-all ease-in-out justify-between cursor-pointer items-center border-b border-neutral-500 pb-4 pt-2'>
									<section>
										<h1 className='font-bold text-sm md:text-base mb-1'>
											{school}
										</h1>
										<p className='text-xs md:text-sm text-neutral-300'>
											{dept}
										</p>
									</section>
									<section>
										<h1 className='text-xs md:text-sm text-neutral-400'>
											{time}
										</h1>
									</section>
								</Disclosure.Button>

								<Transition
									enter='transition duration-100 ease-out'
									enterFrom='transform scale-95 opacity-0'
									enterTo='transform scale-100 opacity-100'
									leave='transition duration-75 ease-out'
									leaveFrom='transform scale-100 opacity-100'
									leaveTo='transform scale-95 opacity-0'>
									<Disclosure.Panel
										as='main'
										className='flex flex-col gap-4 px-8 py-6 bg-neutral-800/80 transition-all duration-300 ease-in-out'>
										{jobs.map((job, index) => {
											return (
												<li key={index} className='text-xs md:text-sm'>
													{job}
												</li>
											);
										})}
									</Disclosure.Panel>
								</Transition>
							</Disclosure>
						);
					})}
				</main>
			</ActivitiesLayout>
		</ContentLayout>
	);
};

export default HomeActivities;
