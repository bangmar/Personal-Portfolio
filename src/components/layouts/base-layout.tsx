import { FC } from "react";
import { TLayoutProps } from "./types";
import Navbar from "../elements/navbar";
import Footer from "../fragments/footer";

const BaseLayout: FC<TLayoutProps> = ({ children, classname }) => {
	return (
		<section className='w-full bg-black-primary'>
			<section
				className={`w-full container mx-auto  bg-black-primary  text-white-primary font-jakarta ${classname}`}>
				<Navbar />
				{children}
				<Footer />
			</section>
		</section>
	);
};

export default BaseLayout;
