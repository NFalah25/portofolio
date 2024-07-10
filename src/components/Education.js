import Template from "./Template";

const Education = () => {
	return (
		<Template>
			<div className=''>
				<div className=''>
					<h2 className='text-center text-[2em] font-bold'>Education</h2>
				</div>
				<div className='justify-center flex'>
					<div className='bg-[#f3aa31] md:w-1/3 rounded-lg md:px-5 px-2 my-10 py-5 mx-10'>
						<div className='flex items-center justify-between gap-3'>
							<h2 className='md:text-[1.5em] font-bold'>
								Malang State Polytechnic
							</h2>
							<p className=''>Malang, Jawa Timur</p>
						</div>
						<div className='md:text-[1.1em] mt-2'>
							<ul className='list-disc ms-10'>
								<li>D4 Informatics Engineering - GPA <b>3.67</b></li>
							</ul>
						</div>
						<p className='text-right opacity-90 mt-5'>2019 - Now</p>
					</div>
				</div>
			</div>
		</Template>
	);
};

export default Education;
