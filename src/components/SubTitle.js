const SubTitle = ({ title, children }) => {
	return (
		<h2 className='text-center text-[2em] font-bold'>
			{title || children}
		</h2>
	);
};

export default SubTitle;
