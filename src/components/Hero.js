import Image from "next/image";
import naufal from "../../public/Image/naufal.png";

function Hero() {
	return (
		<div className='h-screen bg-[#5858d2] md:flex md:flex-row-reverse md:items-center md:justify-around flex flex-col items-center pt-10 md:pt-0'>
			{/* Gambar */}
			<div className='bg-[#f3aa31] rounded-full md:h-96 md:w-96 w-40 h-40 flex justify-center items-center mx-auto md:mx-0'>
				<div className="mx-auto">
					<Image
						src={naufal}
						alt='hero'
						className='rounded-full h-full w-full'
					/>
				</div>
			</div>
			{/* Nama */}
			<div className='text-center md:text-left md:mr-10'>
				<h1 className='md:text-[5em] text-[2.5em] font-bold text-white'>
					Naufal Falah{" "}
				</h1>
				<h1 className='text-[#f3aa31] md:text-[6em] text-[3em] font-bold'>
					Wafiuddin
				</h1>
				<div className='text-white'>
					Hi... Saya adalah seorang Programmer dibidang{" "}
					<span className='italic'>FullStack Web Development</span>
				</div>
			</div>
		</div>
	);
}

export default Hero;
