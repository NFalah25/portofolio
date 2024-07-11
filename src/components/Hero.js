import Image from "next/image";
import naufal from "../../public/Image/2.png";
import star from "../../public/Image/star.png";

function Hero() {
	return (
		<div className='h-screen bg-[#5858d2] flex flex-col md:flex-row-reverse md:items-center md:justify-around justify-center items-center lg:px-36 md:px-14'>
			{/* Gambar */}
			<div className='md:h-auto md:w-[40rem] w-96 h-auto mb-2 flex justify-center items-center mx-auto md:mx-0'>
				<div className="mx-auto">
					<Image
						src={naufal}
						alt='hero'
						className= 'h-full w-full'
					/>
				</div>
			</div>
			<Image src={star} alt='star' className='h-12 w-12 md:w-16 md:h-auto md:absolute md:ms-36 md:mt-20' />
			{/* Nama */}
			<div className='text-center md:text-left md:mr-10'>
				<h1 className='md:text-[5em] text-[2.5em] font-bold text-white'>
					Naufal Falah{" "}
				</h1>
				<h1 className='text-[#f3aa31] md:text-[6em] text-[3em] font-bold'>
					Wafiuddin
				</h1>
				<div className='text-white md:w-3/4'>
				Hi... I am a FullStack Web Development programmer, specializing in creating seamless and dynamic web applications.
				</div>
			</div>
		</div>
	);
}

export default Hero;
