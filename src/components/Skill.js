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
	];

	return (
		<Template className={"h-full bg-primary"}>
			<SubTitle title='Skill' />
			<div className='flex flex-wrap mx-16 mt-10'>
				{skills.map((skill, index) => (
					<div
						key={index}
						className='flex-auto text-center h-40 md:mx-10 mb-5 hover:transition ease-in-out duration-500 hover:scale-125'>
						<div className='text-center'>
							<Image
								src={skill.image}
								alt={skill.name}
								className='h-28 w-28 mx-auto bg-white rounded-full'
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
