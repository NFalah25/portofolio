const clsx = require("clsx");

const Template = (props) => {
	const { className = "pb-14 h-full ", bg = 'bg-primary', children, id } = props;
	return (
		<div className={clsx(className, bg)} id={id}>
			{children}
		</div>
	);
};

export default Template;
