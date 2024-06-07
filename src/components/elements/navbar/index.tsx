import { Link } from "react-scroll";
import { FC, ReactElement, useState, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar: FC = (): ReactElement => {
	const links = ["Experience", "Sertificate", "Projects", "Tools", "Contact"];

	const [isSticky, setIsSticky] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsSticky(window.scrollY > 250);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const [isToggled, setToggled] = useState(false);

	console.log("toogle status :", isToggled);

	return (
		<section
			className={`px-8  md:flex md:px-12 lg:px-24 justify-between  items-center flex gap-16 ${
				isSticky
					? " sticky top-0 right-0 bg-black-primary z-50 left-0  py-4 "
					: "py-10"
			} transition-all ease-in-out duration-300`}>
			<Link
				to='top'
				className='text-2xl cursor-pointer'
				spy={true}
				smooth={true}
				offset={-90}
				duration={500}>
				個人のポートフォリオ
			</Link>
			<nav className='flex items-center'>
				<ul className='md:flex justify-end items-center hidden pl-4 py-4  gap-4 md:text-neutral-300 text-sm'>
					{links.map((link, index) => {
						return (
							<Link
								to={link}
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
								key={index}>
								<li className={`hover:text-neutral-100 ease-transition `}>
									{link}
								</li>
							</Link>
						);
					})}
				</ul>
				<ul
					className={`md:hidden bg-neutral-100 rounded-sm shadow-md text-black-primary absolute   ${
						isSticky ? "top-14 right-10" : "top-20 right-24"
					} ${
						isToggled ? "h-48 top-0" : "h-0  top-0"
					}  overflow-hidden tansition-all duration-300 ease-in-out  flex flex-col justify-between  `}>
					{links.map((link, index) => {
						return (
							<Link
								key={index}
								to={link}
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}>
								<li
									className={`hover:text-neutral-100 ease-transition pr-20 text-sm hover:bg-gradient-via1 px-4 py-2`}
									key={index}>
									{link}
								</li>
							</Link>
						);
					})}
				</ul>
				<section
					className='md:hidden text-3xl cursor-pointer'
					onClick={() => {
						setToggled(!isToggled);
					}}>
					<AiOutlineMenu />
				</section>
			</nav>
		</section>
	);
};

export default Navbar;
