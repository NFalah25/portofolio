import Image from "next/image";
import react from "../../public/Image/logo/reactjs.png";
import laravel from "../../public/Image/logo/laravel.png";
import tailwind from "../../public/Image/logo/tailwind.png";
import bootstrap from "../../public/Image/logo/bootstrap.png";
import css from "../../public/Image/logo/css.png";
import html from "../../public/Image/logo/html.png";
import javascript from "../../public/Image/logo/javascript.png";
import php from "../../public/Image/logo/php.png";
import midtrans from "../../public/Image/logo/midtrans.png";
import mongo from "../../public/Image/logo/mongo.png";
import java from "../../public/Image/logo/java.png";
import flutter from "../../public/Image/logo/flutter.png";
import inertia from "../../public/Image/logo/inertia.png";
import python from "../../public/Image/logo/python.png";

const { default: SubTitle } = require("./SubTitle");
const { default: Template } = require("./Template");

function Skill() {
	const skills = [
		{ name: "React", image: react },
		{ name: "Laravel", image: laravel },
		{ name: "Tailwind", image: tailwind },
		{ name: "Bootstrap", image: bootstrap },
		{ name: "CSS", image: css },
		{ name: "HTML", image: html },
		{ name: "Javascript", image: javascript },
		{ name: "PHP", image: php },
		{ name: "Midtrans", image: midtrans },
		{ name: "Mongo", image: mongo },
		{ name: "Java", image: java },
		{ name: "Flutter", image: flutter },
		{ name: "Inertia JS", image: inertia },
		{ name: "Python", image: python },
	];

	return (
		<Template className={"h-full"} id={'skill'}>
			<SubTitle title='Skill'/>
			<div className='flex flex-wrap md:mx-16 mx-7 mt-10'>
				{skills.map((skill, index) => (
					<div
						key={index}
						className='flex-auto text-center md:h-40 md:mx-10 mx-3 md:mb-5 mb-14 hover:transition ease-in-out duration-500 hover:scale-125'>
						<div className='text-center'>
							<Image
								src={skill.image}
								alt={skill.name}
								className='md:h-28 md:w-28 w-16 h-16 mx-auto bg-white rounded-full'
							/>
						</div>
						<p className='text-center'>{skill.name}</p>
					</div>
				))}
			</div>
		</Template>
	);
}

export default Skill;
