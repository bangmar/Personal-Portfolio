import { FC, ReactElement, ReactNode } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

type TCardProps = {
	children: ReactNode;
	link?: string;
};

const Card: FC<TCardProps> & {
	Image: typeof Image;
	Description: typeof Description;
} = ({ children, link = "" }): ReactElement => {
	return (
		<section className='mb-8 overflow-hidden'>
			{link !== "" ? (
				<Link
					to={link}
					target='_blank'
					className='w-full h-full relative group overflow-hidden cursor-pointer'>
					{children}
				</Link>
			) : (
				<section className='w-full h-full relative group overflow-hidden cursor-pointer'>
					{children}
				</section>
			)}
		</section>
	);
};

export default Card;

type TImageProps = {
	src: string;
	name: string;
};

const Image: FC<TImageProps> = ({ src, name }): ReactElement => {
	return (
		<LazyLoadImage
			loading='lazy'
			src={src}
			alt={name}
			className='h-full w-full object-cover group-hover:scale-105 ease-transition'
		/>
	);
};

type TDescriptionProps = {
	title: string;
	subtitle?: string;
	children?: ReactNode;
	size?: "small" | "normal";
};

const Description: FC<TDescriptionProps> = ({
	title,
	children,
	subtitle,
	size = "normal",
}): ReactElement => {
	return (
		<section className='w-full h-full flex items-end px-6 md:px-8  md:py-8 py-8    md:absolute top-0 bottom-0 bg-gradient-to-t from-black-secondary/80 to-transparent'>
			<section>
				<header className='mb-4 font-bold'>
					<h1
						className={`${
							size === "normal" ? "text-3xl md:text-4xl" : "text-3xl"
						}  mb-1`}>
						{title}
					</h1>
					<p
						className={`${
							size === "normal" ? "text-2xl" : "text-base md:text-lg"
						}  mb-1`}>
						{subtitle}
					</p>
				</header>
				{children}
			</section>
		</section>
	);
};

Card.Image = Image;
Card.Description = Description;
