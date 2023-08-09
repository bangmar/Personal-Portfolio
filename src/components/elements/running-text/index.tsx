import { FC, ReactElement } from "react";
import Marquee from "react-fast-marquee";

type TRunningTextProps = {
	teks: Array<string>;
};

const RunningText: FC<TRunningTextProps> = ({ teks }): ReactElement => {
	return (
		<Marquee
			autoFill
			className='bg-white-primary py-4 md:py-6 -rotate-3 md:-rotate-[1deg]'>
			{teks?.map((item, index) => {
				return (
					<h1 className='text-black-primary font-bold ml-6' key={index}>
						{item} 💫
					</h1>
				);
			})}
		</Marquee>
	);
};

export default RunningText;
