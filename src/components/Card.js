import clsx from "clsx";
import Image from "next/image";

function Card({ children }) {
	return (
		<div className='md:grid md:grid-cols-3 md:gap-10 pt-10 md:px-5 text-center'>
			{children}
		</div>
	);
}

function Body({ image, children, className = "" }) {
	return (
		<div
			className={clsx(
				className,
				"class rounded-lg bg-orange-400 bg-opacity-50 mb-5 mx-10 md:mx-0"
			)}>
			<Image
				src={image}
				alt='project'
				className='rounded-lg w-full object-cover hover:scale-125 hover:transition duration-300 ease-in-out overflow-hidden'
			/>
			{children}
		</div>
	);
}

function Title({ title }) {
	return <h3 className='text-center text-[1.1em] font-bold py-2'>{title}</h3>;
}

function Description({ children }) {
	return <p className='text-justify px-5 pb-5'>{children}</p>;
}

Card.Title = Title;
Card.Description = Description;
Card.Body = Body;

export default Card;
