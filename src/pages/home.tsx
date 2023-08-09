import { FC, ReactElement } from "react";

import HomeAbout from "../components/fragments/home-about";
import BaseLayout from "../components/layouts/base-layout";
import HomeActivities from "../components/fragments/home-activities";
import HomeTools from "../components/fragments/home-tools";
import HomeProjects from "../components/fragments/home-projects";
import HomeContact from "../components/fragments/home-cotact";
import HomeSertificate from "../components/fragments/home-sertificate";

const HomePage: FC = (): ReactElement => {
	return (
		<BaseLayout>
			<HomeAbout />
			<HomeActivities />
			<HomeSertificate />
			<HomeProjects />
			<HomeTools />
			<HomeContact />
		</BaseLayout>
	);
};

export default HomePage;
