import Image from "next/image";
import naufal from "../../public/Image/naufal2.png";
import Template from "./Template";
import SubTitle from "./SubTitle";

function About() {
	return (
		<Template>
			<SubTitle title='About Me' />
			<div className='flex gap-10 items-center justify-center flex-col md:flex-row'>
				<div className=''>
					<Image
						src={naufal}
						alt='Picture of Naufal'
						height={450}
						className='rounded-full'
					/>
				</div>
				<div className='md:w-1/3 text-[1.1em] text-justify md:leading-10 mx-5 md:mx-0'>
					I am an Informatics Engineering student from Malang State
					Polytechnic who wants to increase knowledge and experience in
					various fields. I am very interested in web development, mobile
					applications, and UI/UX design. I am a child who is always on
					time and doesn&apos;t waste time because time is important. Apart from
					that, I am a child who has good public speaking skills, the
					ability to work together in a team, and the enthusiasm to continue
					learning.
				</div>
			</div>
		</Template>
	);
}

export default About;
