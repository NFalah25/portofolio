const clsx = require("clsx");

const Template = (props) => {
	const { className = "pb-36 h-full ", bg = 'bg-primary', children } = props;
	return (
		<div className={clsx(className, bg)}>
			{children}
		</div>
	);
};

export default Template;
