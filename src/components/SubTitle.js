import clsx from "clsx";

const SubTitle = (props) => {
	const { title, children, className = '' } = props;
	return (
		<h2 className={clsx(className, 'text-center text-[2em] font-bold')}>
			{title || children}
		</h2>
	);
};

export default SubTitle;
