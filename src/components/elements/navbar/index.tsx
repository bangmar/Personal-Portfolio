import { Link } from "react-scroll";
import { FC, ReactElement, useState, useEffect } from "react";

const Navbar: FC = (): ReactElement => {
	const navLinks = [
		"Experience",
		"Sertificate",
		"Projects",
		"Tools",
		"Contact",
	];

	const [isSticky, setIsSticky] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsSticky(window.scrollY > 0);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<section
			className={`px-8 hidden md:flex md:px-12 lg:px-24 ${
				isSticky ? "py-4 bg-black-primary backdrop-blur-lg" : "py-12"
			}  gap-12  items-center sticky top-0 bg-white z-10 transition-all duration-300`}>
			<h1 className='text-4xl'>ワンピース</h1>
			<nav>
				<ul className='flex gap-4 text-neutral-300 text-sm'>
					{navLinks.map((link, index) => {
						return (
							<li
								className='hover:text-neutral-100 ease-transition'
								key={index}>
								<Link
									to={link}
									spy={true}
									smooth={true}
									offset={-70}
									duration={500}>
									{link}
								</Link>
							</li>
						);
					})}
				</ul>
			</nav>
		</section>
	);
};

export default Navbar;
