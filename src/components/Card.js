import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

function Card({children}) {
    return (
        // <div className='md:grid md:grid-cols-3 md:gap-10 pt-10 md:px-5 text-center'>
        // 	{children}
        // </div>
        <div className={'flex flex-wrap md:mt-10 mt-5 justify-center'}>
            {children}
        </div>
    );
}

function Body({image, children, className = ""}) {
    return (
        <div
            className={clsx(
                className,
                "rounded-lg bg-orange-400 bg-opacity-50 mb-5 mx-10 md:mx-5 md:w-1/4"
            )}>
            <Image
                src={image}
                alt='project'
                className='rounded-lg w-full object-cover hover:scale-125 hover:transition duration-300 ease-in-out overflow-hidden'
            />
            <div>
                {children}
            </div>
        </div>
    );
}

function Title({title, href}) {
    return <div className='text-center text-[1.1em] font-bold py-2 hover:text-orange-300 duration-300' > <Link href={href} target="blank" > {title} </Link></div>;
}

function Description({children}) {
    return <div className='text-justify px-5 pb-5'>{children}</div>;
}

function TechStack({image, stack}) {
    return (
        <div className={'mx-1 bg-[#ab4582] shadow-lg flex mb-5 justify-center items-center rounded-md p-1 cursor-default hover:scale-110 hover:duration-300 transition ease-in-out'}>
            <Image src={image} alt={stack} className={'w-8 h-8'}/>
            <div className={'ms-1 font-bold text-[0.8em]'}>{stack}</div>
        </div>
    )
}

Card.Title = Title;
Card.Description = Description;
Card.Body = Body;
Card.TechStack = TechStack;

export default Card;
