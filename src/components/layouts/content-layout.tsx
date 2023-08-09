import { FC, ReactElement } from "react";
import { TLayoutProps } from "./types";

const ContentLayout: FC<TLayoutProps> = ({
	children,
	classname,
}): ReactElement => {
	return (
		<main
			className={`px-8 md:px-12 lg:px-24 pb-6 md:py-10 lg:py-12 mb-8 lg:grid  grid-cols-2 gap-10 ${classname}`}>
			{children}
		</main>
	);
};

export default ContentLayout;
