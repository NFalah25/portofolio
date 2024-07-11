import clsx from "clsx";

const SubTitle = (props) => {
	const { title, children, className = '', id } = props;
	return (
		<h2 className={clsx(className, 'text-center text-[2em] font-bold')} id={id}>
			{title || children}
		</h2>
	);
};

export default SubTitle;
