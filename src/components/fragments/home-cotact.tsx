import { FaWhatsapp } from "react-icons/fa";
import ContentLayout from "../layouts/content-layout";
import { AiOutlineMail } from "react-icons/ai";
import InputField from "../elements/input-field";
import Button from "../elements/button";

const HomeContact = () => {
	return (
		<ContentLayout classname='!gap-40'>
			<section className='mb-10 md:mb-0' id='Contact'>
				<h1 className='primary-gradient text-4xl md:text-5xl lg:text-6xl font-bold mb-2 text-transparent bg-clip-text'>
					Get In Touch
				</h1>
				<p className='text-neutral-300 text-sm md:text-base mb-8'>
					Honestly, if you're a UI/UX Designer, Projects Manager, Backend
					Developer and you all need some that will happyly help your projects
					from client side or Frontend Developement using React or Next Js, fell
					free to contact me.
				</p>
				<footer className='flex flex-col gap-2'>
					<section className='flex gap-2 items-center'>
						<FaWhatsapp />
						<p>+6281327532014</p>
					</section>
					<section className='flex  gap-2 items-center'>
						<AiOutlineMail />
						<p>mariosihaloho700@gmail.com</p>
					</section>
				</footer>
			</section>
			<form>
				<InputField>
					<InputField.label htmlfor='name' label='Your Name' />
					<InputField.input
						name='name'
						placeholder='Enter your name'
						type='text'
					/>
				</InputField>
				<InputField>
					<InputField.label htmlfor='name' label='Your Email' />
					<InputField.input
						name='name'
						placeholder='Enter your email'
						type='email'
					/>
				</InputField>
				<InputField>
					<InputField.label
						htmlfor='describle'
						label='Tell me something you want me to do'
					/>
					<InputField.textArea col={4} id='describe' name='describle' row={8} />
				</InputField>
				<Button
					classify='primary'
					name={"submit"}
					teks={"Submit"}
					type='submit'
					classname='cursor-pointer text-xl !h-10 !px-10'
				/>
			</form>
		</ContentLayout>
	);
};

export default HomeContact;
